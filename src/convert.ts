import DefaultWrapper from './number_wrapper.js';
import { Wrapper, isWrapper } from './wrapper.js';

export interface Fraction {
  numerator: number | string;
  denominator: number | string;
}

function isFraction(value: unknown): value is Fraction {
  return (
    value != null &&
    typeof value === 'object' &&
    'numerator' in value &&
    (typeof value.numerator === 'number' ||
      typeof value.numerator === 'string') &&
    'denominator' in value &&
    (typeof value.denominator === 'number' ||
      typeof value.denominator === 'string')
  );
}

export interface Unit {
  name: {
    singular: string;
    plural: string;
  };
  to_anchor: number | string | Fraction;
  anchor_shift?: number | string | Fraction;
}

export interface Conversion<
  TMeasures extends string,
  TSystems extends string,
  TUnits extends string,
> {
  abbr: TUnits;
  measure: TMeasures;
  system: TSystems;
  unit: Unit;
}

export interface UnitDescription {
  abbr: string;
  measure: string;
  system: string;
  singular: string;
  plural: string;
}

type TransformFunc = <T>(value: T, cls: Wrapper<T>) => T;
export interface Anchor {
  ratio?: number | Fraction;
  transform?: TransformFunc;
}

export interface Measure<TSystems extends string, TUnits extends string> {
  systems: Partial<Record<TSystems, Partial<Record<TUnits, Unit>>>>;
  anchors?: Partial<Record<TSystems, Partial<Record<TSystems, Anchor>>>>;
}

export interface BestResult<TUnits extends string, TValue> {
  val: TValue;
  unit: TUnits;
  singular: string;
  plural: string;
}

export type UnitCache<TMeasures, TSystems, TUnits> = Map<
  string,
  {
    system: TSystems;
    measure: TMeasures;
    unit: Unit;
    abbr: TUnits;
  }
>;

export class UnknownUnitError extends Error {}
export class OperationOrderError extends Error {}
export class IncompatibleUnitError extends Error {}
export class MeasureStructureError extends Error {}
export class UnknownMeasureError extends Error {}

/**
 * Represents a conversion path
 */
export class Converter<
  TMeasures extends string,
  TSystems extends string,
  TUnits extends string,
  TValue,
> {
  private val: TValue;
  private cls: Wrapper<TValue>;
  private destination: Conversion<TMeasures, TSystems, TUnits> | null = null;
  private origin: Conversion<TMeasures, TSystems, TUnits> | null = null;
  private measureData: Record<TMeasures, Measure<TSystems, TUnits>>;
  private unitCache: Map<
    string,
    {
      system: TSystems;
      measure: TMeasures;
      unit: Unit;
      abbr: TUnits;
    }
  >;

  constructor(
    options: {
      measures: Record<TMeasures, Measure<TSystems, TUnits>>;
      unitCache: UnitCache<TMeasures, TSystems, TUnits>;
      cls: Wrapper<TValue>;
    },
    value?: number | string
  ) {
    this.cls = options.cls;
    this.val = this.cls.create(value ? value : 0);

    this.measureData = options.measures;
    this.unitCache = options.unitCache;
  }

  /**
   * Lets the converter know the source unit abbreviation
   *
   * @throws OperationOrderError, UnknownUnitError
   */
  from(from: TUnits | (string & {})): this {
    if (this.destination != null)
      throw new OperationOrderError('.from must be called before .to');

    this.origin = this.getUnit(from);

    if (this.origin == null) {
      this.throwUnsupportedUnitError(from);
    }

    return this;
  }

  private convertFraction(value: number | string | Fraction): TValue {
    if (isFraction(value)) {
      return this.cls.div(value.numerator, value.denominator);
    }

    return this.cls.create(value);
  }

  /**
   * Converts the unit and returns the value
   *
   * @throws OperationOrderError, UnknownUnitError, IncompatibleUnitError, MeasureStructureError
   */
  to(to: TUnits | (string & {})): TValue {
    if (this.origin == null) throw new Error('.to must be called after .from');

    this.destination = this.getUnit(to);

    if (this.destination == null) {
      this.throwUnsupportedUnitError(to);
    }

    const destination = this.destination as Conversion<
      TMeasures,
      TSystems,
      TUnits
    >;
    const origin = this.origin as Conversion<TMeasures, TSystems, TUnits>;

    // Don't change the value if origin and destination are the same
    if (origin.abbr === destination.abbr) {
      return this.val;
    }

    // You can't go from liquid to mass, for example
    if (destination.measure != origin.measure) {
      throw new IncompatibleUnitError(
        `Cannot convert incompatible measures of ${destination.measure} and ${origin.measure}`
      );
    }

    /**
     * Convert from the source value to its anchor inside the system
     */
    let result = this.cls.mul(
      this.val,
      this.convertFraction(origin.unit.to_anchor)
    );

    /**
     * For some changes it's a simple shift (C to K)
     * So we'll add it when converting into the unit (later)
     * and subtract it when converting from the unit
     */
    if (origin.unit.anchor_shift) {
      result = this.cls.sub(
        result,
        this.convertFraction(origin.unit.anchor_shift)
      );
    }

    /**
     * Convert from one system to another through the anchor ratio. Some conversions
     * aren't ratio based or require more than a simple shift. We can provide a custom
     * transform here to provide the direct result
     */
    if (origin.system != destination.system) {
      const measure = this.measureData[origin.measure];

      const anchors = measure.anchors;
      if (anchors == null) {
        throw new MeasureStructureError(
          `Unable to convert units. Anchors are missing for "${origin.measure}" and "${destination.measure}" measures.`
        );
      }

      const anchor: Partial<Record<TSystems, Anchor>> | undefined =
        anchors[origin.system];
      if (anchor == null) {
        throw new MeasureStructureError(
          `Unable to find anchor for "${origin.measure}" to "${destination.measure}". Please make sure it is defined.`
        );
      }

      const transform = anchor[destination.system]?.transform;
      const ratio = anchor[destination.system]?.ratio;

      if (typeof transform === 'function') {
        result = transform(result, this.cls);
      } else if (typeof ratio === 'number') {
        result = this.cls.mul(result, ratio);
      } else if (isFraction(ratio)) {
        result = this.cls.mul(result, this.convertFraction(ratio));
      } else {
        throw new MeasureStructureError(
          'A system anchor needs to either have a defined ratio number or a transform function.'
        );
      }
    }

    /**
     * This shift has to be done after the system conversion business
     */
    if (destination.unit.anchor_shift) {
      result = this.cls.add(
        result,
        this.convertFraction(destination.unit.anchor_shift)
      );
    }

    /**
     * Convert to another unit inside the destination system
     */
    return this.cls.div(
      result,
      this.convertFraction(destination.unit.to_anchor)
    );
  }

  /**
   * Converts the unit to the best available unit.
   *
   * @throws OperationOrderError
   */
  toBest(options?: {
    exclude?: (TUnits | (string & {}))[];
    cutOffNumber?: number;
    system?: TSystems | (string & {});
  }): BestResult<TUnits, TValue> | null {
    if (this.origin == null)
      throw new OperationOrderError('.toBest must be called after .from');

    const isNegative = this.cls.lt(this.val, 0);

    let exclude: (TUnits | (string & {}))[] = [];
    let cutOffNumber = isNegative ? -1 : 1;
    let system: TSystems | (string & {}) = this.origin.system;

    if (typeof options === 'object') {
      exclude = options.exclude ?? [];
      cutOffNumber = options.cutOffNumber ?? cutOffNumber;
      system = options.system ?? this.origin.system;
    }

    let best: BestResult<TUnits, TValue> | null = null;
    /**
      Looks through every possibility for the 'best' available unit.
      i.e. Where the value has the fewest numbers before the decimal point,
      but is still higher than 1.
    */
    for (const possibility of this.possibilities()) {
      const unit = this.describe(possibility);
      const isIncluded = exclude.indexOf(possibility) === -1;

      if (isIncluded && unit.system === system) {
        const result = this.to(possibility);
        if (
          isNegative
            ? this.cls.gt(result, cutOffNumber)
            : this.cls.lt(result, cutOffNumber)
        ) {
          continue;
        }
        if (
          best === null ||
          (isNegative
            ? this.cls.lte(result, cutOffNumber) &&
              this.cls.gt(result, best.val)
            : this.cls.gte(result, cutOffNumber) &&
              this.cls.lt(result, best.val))
        ) {
          best = {
            val: result,
            unit: possibility,
            singular: unit.singular,
            plural: unit.plural,
          };
        }
      }
    }

    if (best == null) {
      return {
        val: this.val,
        unit: this.origin.abbr,
        singular: this.origin.unit.name.singular,
        plural: this.origin.unit.name.plural,
      };
    }

    return best;
  }

  /**
   * Finds the unit
   */
  getUnit(
    abbr: TUnits | (string & {})
  ): Conversion<TMeasures, TSystems, TUnits> | null {
    return this.unitCache.get(abbr) ?? null;
  }

  /**
   * Provides additional information about the unit
   *
   * @throws UnknownUnitError
   */
  describe(abbr: TUnits | (string & {})): UnitDescription {
    const result = this.getUnit(abbr);

    if (result != null) {
      return this.describeUnit(result);
    }

    this.throwUnsupportedUnitError(abbr);
  }

  private describeUnit(
    unit: Conversion<TMeasures, TSystems, TUnits>
  ): UnitDescription {
    return {
      abbr: unit.abbr,
      measure: unit.measure,
      system: unit.system,
      singular: unit.unit.name.singular,
      plural: unit.unit.name.plural,
    };
  }

  /**
   * Detailed list of all supported units
   *
   * If a measure is supplied the list will only contain
   * details about that measure. Otherwise the list will contain
   * details abaout all measures.
   *
   * However, if the measure doesn't exist, an empty array will be
   * returned
   *
   *
   */
  list(measureName?: TMeasures | (string & {})): UnitDescription[] | never {
    const list = [];

    if (measureName == null) {
      for (const [name, measure] of Object.entries(this.measureData)) {
        for (const [systemName, units] of Object.entries(
          (measure as Measure<TSystems, TUnits>).systems
        )) {
          for (const [abbr, unit] of Object.entries(
            units as Partial<Record<TUnits, Unit>>
          )) {
            list.push(
              this.describeUnit({
                abbr: abbr as TUnits,
                measure: name as TMeasures,
                system: systemName as TSystems,
                unit: unit as Unit,
              })
            );
          }
        }
      }
    } else {
      if (!this.isMeasure(measureName))
        throw new UnknownMeasureError(`Meausure "${measureName}" not found.`);

      const measure = this.measureData[measureName];
      for (const [systemName, units] of Object.entries(
        (measure as Measure<TSystems, TUnits>).systems
      )) {
        for (const [abbr, unit] of Object.entries(
          units as Partial<Record<TUnits, Unit>>
        )) {
          list.push(
            this.describeUnit({
              abbr: abbr as TUnits,
              measure: measureName as TMeasures,
              system: systemName as TSystems,
              unit: unit as Unit,
            })
          );
        }
      }
    }

    return list;
  }

  private isMeasure(measureName: string): measureName is TMeasures {
    return measureName in this.measureData;
  }

  private throwUnsupportedUnitError(what: string): never {
    let validUnits: string[] = [];

    for (const measure of Object.values(this.measureData)) {
      for (const systems of Object.values(
        (measure as Measure<TSystems, TUnits>).systems
      )) {
        validUnits = validUnits.concat(
          Object.keys(systems as Record<TUnits, Unit>)
        );
      }
    }

    throw new UnknownUnitError(
      `Unsupported unit ${what}, use one of: ${validUnits.join(', ')}`
    );
  }

  /**
   * Returns the abbreviated measures that the value can be
   * converted to.
   */
  possibilities(forMeasure?: TMeasures | (string & {})): TUnits[] {
    let possibilities: TUnits[] = [];
    let list_measures: TMeasures[] = [];

    if (typeof forMeasure == 'string' && this.isMeasure(forMeasure)) {
      list_measures.push(forMeasure);
    } else if (this.origin != null) {
      list_measures.push(this.origin.measure);
    } else {
      list_measures = Object.keys(this.measureData) as TMeasures[];
    }

    for (const measure of list_measures) {
      const systems = this.measureData[measure].systems;

      for (const system of Object.values(systems)) {
        possibilities = [
          ...possibilities,
          ...(Object.keys(system as Record<TUnits, Unit>) as TUnits[]),
        ];
      }
    }

    return possibilities;
  }

  /**
   * Returns the abbreviated measures that the value can be
   * converted to.
   */
  measures(): TMeasures[] {
    return Object.keys(this.measureData) as TMeasures[];
  }
}

export function buildUnitCache<
  TMeasures extends string,
  TSystems extends string,
  TUnits extends string,
>(measures: Record<TMeasures, Measure<TSystems, TUnits>>) {
  const unitCache: UnitCache<TMeasures, TSystems, TUnits> = new Map();
  for (const [measureName, measure] of Object.entries(measures) as Entries<
    typeof measures,
    TMeasures
  >[]) {
    for (const [systemName, system] of Object.entries(
      measure.systems
    ) as Entries<Record<TSystems, Record<TUnits, Unit>>, TSystems>[]) {
      for (const [testAbbr, unit] of Object.entries(system) as Entries<
        typeof system,
        TUnits
      >[]) {
        unitCache.set(testAbbr, {
          measure: measureName,
          system: systemName,
          abbr: testAbbr,
          unit,
        });
      }
    }
  }
  return unitCache;
}

type Entries<T, S extends keyof T> = [S, T[keyof T]];

function configureMeasurements<
  TMeasures extends string,
  TSystems extends string,
  TUnits extends string,
>(
  measures: Record<TMeasures, Measure<TSystems, TUnits>>
): (value?: number) => Converter<TMeasures, TSystems, TUnits, number>;
function configureMeasurements<
  TMeasures extends string,
  TSystems extends string,
  TUnits extends string,
  TValue,
>(
  measures: Record<TMeasures, Measure<TSystems, TUnits>>,
  cls: Wrapper<TValue>
): (value?: number) => Converter<TMeasures, TSystems, TUnits, TValue>;
function configureMeasurements<
  TMeasures extends string,
  TSystems extends string,
  TUnits extends string,
  TValue,
>(
  measures: Record<TMeasures, Measure<TSystems, TUnits>>,
  cls?: unknown
): (
  value?: number | string
) =>
  | Converter<TMeasures, TSystems, TUnits, TValue>
  | Converter<TMeasures, TSystems, TUnits, number> {
  if (typeof measures !== 'object') {
    throw new TypeError('The measures argument needs to be an object');
  }

  const unitCache = buildUnitCache(measures);

  if (cls != null && isWrapper<TValue>(cls)) {
    return (value?: number | string) =>
      new Converter<TMeasures, TSystems, TUnits, TValue>(
        {
          measures,
          unitCache,
          cls,
        },
        value
      );
  } else {
    return (value?: number | string) =>
      new Converter<TMeasures, TSystems, TUnits, number>(
        {
          measures,
          unitCache,
          cls: DefaultWrapper,
        },
        value
      );
  }
}

export { configureMeasurements };
