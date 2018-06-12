declare module "convert-units" { 
    export type Length = 'mm' | 'cm' | 'm' | 'km' | 'in' | 'yd' | 'ft-us' | 'ft' | 'mi';
    export type Area = 'mm2' | 'cm2' | 'm2' | 'ha' | 'km2' | 'in2' | 'yd2' | 'ft2' | 'ac' | 'mi2';
    export type Mass = 'mcg' | 'mg' | 'g' | 'kg' | 'mt' | 'oz' | 'lb' | 't';
    export type Volume = 'mm3' | 'cm3' | 'ml' | 'cl' | 'dl' | 'l' | 'kl' | 'm3' | 'km3' | 'krm' | 'tsk' | 'msk' | 'kkp' | 'glas' | 'kanna' | 'tsp' | 'Tbs' | 'in3' | 'fl-oz' | 'cup' | 'pnt' | 'qt' | 'gal' | 'ft3' | 'yd3';
    export type Each = 'ea' | 'dz';
    export type Temperature = 'C' | 'K' | 'F' | 'R';
    export type Time = 'ns' | 'mu' | 'ms' | 's' | 'min' | 'h' | 'd' | 'week' | 'month' | 'year';
    export type Digital = 'b' | 'Kb' | 'Mb' | 'Gb' | 'Tb' | 'B' | 'KB' | 'MB' | 'GB' | 'TB';
    export type PartsPer = 'ppm' | 'ppb' | 'ppt' | 'ppq';
    export type Speed = 'm/s' | 'km/h' | 'm/h' | 'knot' | 'ft/s';
    export type Pace = 'min/km' | 's/m' | 'min/mi' | 's/ft';
    export type Pressure = 'Pa' | 'kPa' | 'MPa' | 'hPa' | 'bar' | 'torr' | 'psi' | 'ksi';
    export type Current = 'A' | 'mA' | 'kA';
    export type Voltage = 'V' | 'mV' | 'kV';
    export type Power = 'W' | 'mW' | 'kW' | 'MW' | 'GW';
    export type ReactivePower = 'VAR' | 'mVAR' | 'kVAR' | 'MVAR' | 'GVAR';
    export type ApparentPower = 'VA' | 'mVA' | 'kVA' | 'MVA' | 'GVA';
    export type Energy = 'Wh' | 'mWh' | 'kWh' | 'MWh' | 'GWh' | 'J' | 'kJ';
    export type ReactiveEnergy = 'VARh' | 'mVARh' | 'kVARh' | 'MVARh' | 'GVARh';
    export type VolumeFlowRate = 'mm3/s' | 'cm3/s' | 'ml/s' | 'cl/s' | 'dl/s' | 'l/s' | 'l/min' | 'l/h' | 'kl/s' | 'kl/min' | 'kl/h' | 'm3/s' | 'm3/min' | 'm3/h' | 'km3/s' | 'tsp/s' | 'Tbs/s' | 'in3/s' | 'in3/min' | 'in3/h' | 'fl-oz/s' | 'fl-oz/min' | 'fl-oz/h' | 'cup/s' | 'pnt/s' | 'pnt/min' | 'pnt/h' | 'qt/s' | 'gal/s' | 'gal/min' | 'gal/h' | 'ft3/s' | 'ft3/min' | 'ft3/h' | 'yd3/s' | 'yd3/min' | 'yd3/h';
    export type Illuminance = 'lx' | 'ft-cd';
    export type Frequency = 'mHz' | 'Hz' | 'kHz' | 'MHz' | 'GHz' | 'THz' | 'rpm' | 'deg/s' | 'rad/s';
    export type Angle = 'rad' | 'deg' | 'grad' | 'arcmin' | 'arcsec';


    export type Unit
      = Length
      | Area
      | Mass
      | Volume
      | Each
      | Temperature
      | Time
      | Digital
      | PartsPer
      | Speed
      | Pace
      | Pressure
      | Current
      | Voltage
      | Power
      | ReactivePower
      | ApparentPower
      | Energy
      | ReactiveEnergy
      | VolumeFlowRate
      | Illuminance
      | Frequency
      | Angle;

    export type Measure
      = "length"
      | "area"
      | "mass"
      | "volume"
      | "each"
      | "temperature"
      | "time"
      | "digital"
      | "partsPer"
      | "speed"
      | "pace"
      | "pressure"
      | "current"
      | "voltage"
      | "power"
      | "reactivePower"
      | "apparentPower"
      | "energy"
      | "reactiveEnergy"
      | "volumeFlowRate"
      | "illuminance"
      | "frequency"
      | "angle";

    export type System
      = "metric"
      | "imperial"
      | "bits"
      | "bytes";

    export interface UnitDetails {
      abbr: Unit,
      measure: Measure,
      system: System,
      singular: string,
      plural: string
    }

    class Convert {
        constructor(numerator: number, denominator: number);
        from(from: Unit): this;
        to(to: Unit): number;
        toBest(options?: { exclude?: Unit[], cutOffNumber?: number }): { val: number, unit: string, singular: string, plural: string };
        getUnit(abbr: Unit): { abbr: Unit, measure: Measure, system: System, unit: { name: { singular: string, plural: string }, to_anchor: number } };
        describe(abbr: Unit): UnitDetails;
        list(measure?: Measure): UnitDetails[];
        private throwUnsupportedUnitError(what: string): void;
        possibilities(measure?: Measure): Unit[];
        measures(): Measure[];
    }

    function convert(value?: number): Convert;

    export default convert;
  }
