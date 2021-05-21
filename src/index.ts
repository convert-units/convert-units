import length from './definitions/length';
import area from './definitions/area';
import mass from './definitions/mass';
import volume from './definitions/volume';
import each from './definitions/each';
import temperature from './definitions/temperature';
import time from './definitions/time';
import digital from './definitions/digital';
import partsPer from './definitions/partsPer';
import speed from './definitions/speed';
import pace from './definitions/pace';
import pressure from './definitions/pressure';
import current from './definitions/current';
import voltage from './definitions/voltage';
import power from './definitions/power';
import reactivePower from './definitions/reactivePower';
import apparentPower from './definitions/apparentPower';
import energy from './definitions/energy';
import reactiveEnergy from './definitions/reactiveEnergy';
import volumeFlowRate from './definitions/volumeFlowRate';
import illuminance from './definitions/illuminance';
import frequency from './definitions/frequency';
import angle from './definitions/angle';
import charge from './definitions/charge';
import force from './definitions/force';
import acceleration from './definitions/acceleration';
import pieces from './definitions/pieces';

const measures: Record<string, SystemExport> = {
  length,
  area,
  mass,
  volume,
  each,
  temperature,
  time,
  digital,
  partsPer,
  speed,
  pace,
  pressure,
  current,
  voltage,
  power,
  reactivePower,
  apparentPower,
  energy,
  reactiveEnergy,
  volumeFlowRate,
  illuminance,
  frequency,
  angle,
  charge,
  force,
  acceleration,
  pieces,
};

export type Unit = {
  name: {
    singular: string;
    plural: string;
  };
  to_anchor: number;
  anchor_shift?: number;
};

export interface Conversion {
  abbr: string;
  measure: string;
  system: string;
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
  unit: string;
  ratio?: number;
  transform?: TransformFunc;
}

export interface SystemExport {
  systems: Record<string, Record<string, Unit>>;
  anchors: Record<string, Anchor>;
}

/**
 * Represents a conversion path
 */
class Converter {
  private val = 0;
  private destination: Conversion | null = null;
  private origin: Conversion | null = null;

  constructor(numerator?: number, denominator?: number) {
    if (typeof numerator === 'number') {
      this.val = numerator;
      if (typeof denominator === 'number') this.val = numerator / denominator;
    }
  }

  /**
   * Lets the converter know the source unit abbreviation
   */
  from(from: string): this {
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
  to(to: string): number {
    if (this.origin == null) throw new Error('.to must be called after .from');

    this.destination = this.getUnit(to);

    if (this.destination == null) {
      this.throwUnsupportedUnitError(to);
    }

    const destination = this.destination as Conversion;
    const origin = this.origin as Conversion;

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
      const transform: unknown =
        measures[origin.measure].anchors[origin.system].transform;
      const ratio: unknown =
        measures[origin.measure].anchors[origin.system].ratio;
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
  toBest(options?: { exclude?: string[]; cutOffNumber?: number }) {
    if (this.origin == null)
      throw new Error('.toBest must be called after .from');

    options = Object.assign(
      {
        exclude: [],
        cutOffNumber: 1,
      },
      options
    );

    let best = null;
    /**
      Looks through every possibility for the 'best' available unit.
      i.e. Where the value has the fewest numbers before the decimal point,
      but is still higher than 1.
    */
    for (const possibility of this.possibilities()) {
      const unit = this.describe(possibility);
      const isIncluded = options?.exclude?.indexOf(possibility) === -1;

      if (isIncluded && unit.system === this.origin.system) {
        const result = this.to(possibility);
        const cutOffNumber = options?.cutOffNumber ?? 0;
        if (best == null || (result >= cutOffNumber && result < best.val)) {
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
  getUnit(abbr: string): Conversion | null {
    const found = null;

    for (const [measureName, measure] of Object.entries(measures)) {
      for (const [systemName, system] of Object.entries(measure.systems)) {
        for (const [testAbbr, unit] of Object.entries(system)) {
          if (testAbbr == abbr) {
            return {
              abbr: abbr,
              measure: measureName,
              system: systemName,
              unit: unit,
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
  describe(abbr: string): UnitDescription | never {
    const result = this.getUnit(abbr);

    if (result != null) {
      return this.describeUnit(result);
    }

    this.throwUnsupportedUnitError(abbr);
  }

  private describeUnit(unit: Conversion): UnitDescription {
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
  list(measureName?: string): UnitDescription[] | never {
    const list = [];

    if (measureName == null) {
      for (const [name, measure] of Object.entries(measures)) {
        for (const [systemName, units] of Object.entries(
          (measure as SystemExport).systems
        )) {
          for (const [abbr, unit] of Object.entries(units)) {
            list.push(
              this.describeUnit({
                abbr: abbr,
                measure: name,
                system: systemName,
                unit: unit,
              })
            );
          }
        }
      }
    } else if (!(measureName in measures)) {
      throw new Error(`Meausre "${measureName}" not found.`);
    } else {
      const measure = measures[measureName];
      for (const [systemName, units] of Object.entries(
        (measure as SystemExport).systems
      )) {
        for (const [abbr, unit] of Object.entries(units)) {
          list.push(
            this.describeUnit({
              abbr: abbr,
              measure: measureName,
              system: systemName,
              unit: unit,
            })
          );
        }
      }
    }

    return list;
  }

  private throwUnsupportedUnitError(what: string): never {
    let validUnits: string[] = [];

    for (const measure of Object.values(measures)) {
      for (const systems of Object.values((measure as SystemExport).systems)) {
        validUnits = validUnits.concat(Object.keys(systems));
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
  possibilities(forMeasure?: unknown) {
    let possibilities: string[] = [];
    let list_measures: string[] = [];

    if (typeof forMeasure == 'string') {
      list_measures.push(forMeasure);
    } else if (this.origin != null) {
      list_measures.push(this.origin.measure);
    } else {
      list_measures = Object.keys(measures);
    }

    for (const measure of list_measures) {
      const systems: Record<string, Record<string, Unit>> =
        measures[measure].systems;

      for (const system of Object.values(systems)) {
        possibilities = [...possibilities, ...Object.keys(system)];
      }
    }

    return possibilities;
  }

  /**
   * Returns the abbreviated measures that the value can be
   * converted to.
   */
  measures() {
    return Object.keys(measures);
  }
}

export default function (value?: number): Converter {
  return new Converter(value);
}
