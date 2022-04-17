export interface Unit {
  name: {
    singular: string;
    plural: string;
  };
  to_anchor: number;
  anchor_shift?: number;
}

export interface Conversion<
  TMeasures extends string,
  TSystems extends string,
  TUnits extends string
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

type TransformFunc = (value: number) => number;

export interface Anchor {
  ratio?: number;
  transform?: TransformFunc;
}

export interface Measure<TSystems extends string, TUnits extends string> {
  systems: Partial<Record<TSystems, Partial<Record<TUnits, Unit>>>>;
  anchors?: Partial<Record<TSystems, Partial<Record<TSystems, Anchor>>>>;
}

export interface BestResult {
  val: number;
  unit: string;
  singular: string;
  plural: string;
}

/**
 * Represents a conversion path
 */
export class Converter<
  TMeasures extends string,
  TSystems extends string,
  TUnits extends string
> {
  private val = 0;
  private destination: Conversion<TMeasures, TSystems, TUnits> | null = null;
  private origin: Conversion<TMeasures, TSystems, TUnits> | null = null;
  private measureData: Record<TMeasures, Measure<TSystems, TUnits>>;

  constructor(
    measures: Record<TMeasures, Measure<TSystems, TUnits>>,
    value?: number
  ) {
    if (typeof value === 'number') {
      this.val = value;
    }

    if (typeof measures !== 'object') {
      throw new Error('Measures cannot be blank');
    }

    this.measureData = measures;
  }

  /**
   * Lets the converter know the source unit abbreviation
   */
  from(from: TUnits): this {
    if (this.destination != null)
      throw new Error('.from must be called before .to');

    this.origin = this.getUnit(from);

    if (this.origin == null) {
      this.throwUnsupportedUnitError(from);
    }

    return this;
  }

  /**
   * Converts the unit and returns the value
   */
  to(to: TUnits): number {
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
      throw new Error(
        `Cannot convert incompatible measures of ${destination.measure} and ${origin.measure}`
      );
    }

    /**
     * Convert from the source value to its anchor inside the system
     */
    let result: number = this.val * origin.unit.to_anchor;

    /**
     * For some changes it's a simple shift (C to K)
     * So we'll add it when convering into the unit (later)
     * and subtract it when converting from the unit
     */
    if (origin.unit.anchor_shift) {
      result -= origin.unit.anchor_shift;
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
        throw new Error(
          `Unable to convert units. Anchors are missing for "${origin.measure}" and "${destination.measure}" measures.`
        );
      }

      const anchor: Partial<Record<TSystems, Anchor>> | undefined =
        anchors[origin.system];
      if (anchor == null) {
        throw new Error(
          `Unable to find anchor for "${origin.measure}" to "${destination.measure}". Please make sure it is defined.`
        );
      }

      const transform: unknown = anchor[destination.system]?.transform;
      const ratio: unknown = anchor[destination.system]?.ratio;

      if (typeof transform === 'function') {
        result = transform(result);
      } else if (typeof ratio === 'number') {
        result *= ratio;
      } else {
        throw new Error(
          'A system anchor needs to either have a defined ratio number or a transform function.'
        );
      }
    }

    /**
     * This shift has to be done after the system conversion business
     */
    if (destination.unit.anchor_shift) {
      result += destination.unit.anchor_shift;
    }

    /**
     * Convert to another unit inside the destination system
     */
    return result / destination.unit.to_anchor;
  }

  /**
   * Converts the unit to the best available unit.
   */
  toBest(options?: {
    exclude?: TUnits[];
    cutOffNumber?: number;
    system?: TSystems;
  }): BestResult | null {
    if (this.origin == null)
      throw new Error('.toBest must be called after .from');

    const isNegative = this.val < 0;

    let exclude: TUnits[] = [];
    let cutOffNumber = isNegative ? -1 : 1;
    let system = this.origin.system;

    if (typeof options === 'object') {
      exclude = options.exclude ?? [];
      cutOffNumber = options.cutOffNumber ?? cutOffNumber;
      system = options.system ?? this.origin.system;
    }

    let best: BestResult | null = null;
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
        if (isNegative ? result > cutOffNumber : result < cutOffNumber) {
          continue;
        }
        if (
          best === null ||
          (isNegative
            ? result <= cutOffNumber && result > best.val
            : result >= cutOffNumber && result < best.val)
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

    return best;
  }
  /**
   * Finds the unit
   */
  getUnit(abbr: TUnits): Conversion<TMeasures, TSystems, TUnits> | null {
    const found = null;

    for (const [measureName, measure] of Object.entries(this.measureData)) {
      for (const [systemName, system] of Object.entries(
        (measure as Measure<TSystems, TUnits>).systems
      )) {
        for (const [testAbbr, unit] of Object.entries(
          system as Partial<Record<TUnits, Unit>>
        )) {
          if (testAbbr == abbr) {
            return {
              abbr: abbr as TUnits,
              measure: measureName as TMeasures,
              system: systemName as TSystems,
              unit: unit as Unit,
            };
          }
        }
      }
    }

    return found;
  }

  /**
   * An alias for getUnit
   */
  describe(abbr: TUnits): UnitDescription | never {
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
   */
  list(measureName?: TMeasures): UnitDescription[] | never {
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
    } else if (!(measureName in this.measureData)) {
      throw new Error(`Meausre "${measureName}" not found.`);
    } else {
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

    throw new Error(
      `Unsupported unit ${what}, use one of: ${validUnits.join(', ')}`
    );
  }

  /**
   * Returns the abbreviated measures that the value can be
   * converted to.
   */
  possibilities(forMeasure?: TMeasures): TUnits[] {
    let possibilities: TUnits[] = [];
    let list_measures: TMeasures[] = [];

    if (typeof forMeasure == 'string') {
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

export default function <
  TMeasures extends string,
  TSystems extends string,
  TUnits extends string
>(
  measures: Record<TMeasures, Measure<TSystems, TUnits>>
): (value?: number) => Converter<TMeasures, TSystems, TUnits> {
  return (value?: number) =>
    new Converter<TMeasures, TSystems, TUnits>(measures, value);
}
