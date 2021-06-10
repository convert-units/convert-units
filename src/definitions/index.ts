import { Measure } from '../convert';
import acceleration, {
  AccelerationSystems,
  AccelerationUnits,
} from './acceleration';
import angle, { AngleSystems, AngleUnits } from './angle';
import apparentPower, {
  ApparentPowerSystems,
  ApparentPowerUnits,
} from './apparentPower';
import area, { AreaSystems, AreaUnits } from './area';
import charge, { ChargeSystems, ChargeUnits } from './charge';
import current, { CurrentSystems, CurrentUnits } from './current';
import digital, { DigitalSystems, DigitalUnits } from './digital';
import each, { EachSystems, EachUnits } from './each';
import energy, { EnergySystems, EnergyUnits } from './energy';
import force, { ForceSystems, ForceUnits } from './force';
import frequency, { FrequencySystems, FrequencyUnits } from './frequency';
import illuminance, {
  IlluminanceSystems,
  IlluminanceUnits,
} from './illuminance';
import length, { LengthSystems, LengthUnits } from './length';
import mass, { MassSystems, MassUnits } from './mass';
import pace, { PaceSystems, PaceUnits } from './pace';
import partsPer, { PartsPerSystems, PartsPerUnits } from './partsPer';
import pieces, { PiecesSystems, PiecesUnits } from './pieces';
import power, { PowerSystems, PowerUnits } from './power';
import pressure, { PressureSystems, PressureUnits } from './pressure';
import reactiveEnergy, {
  ReactiveEnergySystems,
  ReactiveEnergyUnits,
} from './reactiveEnergy';
import reactivePower, {
  ReactivePowerSystems,
  ReactivePowerUnits,
} from './reactivePower';
import speed, { SpeedSystems, SpeedUnits } from './speed';
import temperature, {
  TemperatureSystems,
  TemperatureUnits,
} from './temperature';
import time, { TimeSystems, TimeUnits } from './time';
import voltage, { VoltageSystems, VoltageUnits } from './voltage';
import volume, { VolumeSystems, VolumeUnits } from './volume';
import volumeFlowRate, {
  VolumeFlowRateSystems,
  VolumeFlowRateUnits,
} from './volumeFlowRate';

export type AllMeasuresSystems =
  | AccelerationSystems
  | AngleSystems
  | ApparentPowerSystems
  | AreaSystems
  | ChargeSystems
  | CurrentSystems
  | DigitalSystems
  | EachSystems
  | EnergySystems
  | ForceSystems
  | FrequencySystems
  | IlluminanceSystems
  | LengthSystems
  | MassSystems
  | PaceSystems
  | PartsPerSystems
  | PiecesSystems
  | PowerSystems
  | PressureSystems
  | ReactiveEnergySystems
  | ReactivePowerSystems
  | SpeedSystems
  | TemperatureSystems
  | TimeSystems
  | VoltageSystems
  | VolumeSystems
  | VolumeFlowRateSystems;

export type AllMeasuresUnits =
  | AccelerationUnits
  | AngleUnits
  | ApparentPowerUnits
  | AreaUnits
  | ChargeUnits
  | CurrentUnits
  | DigitalUnits
  | EachUnits
  | EnergyUnits
  | ForceUnits
  | FrequencyUnits
  | IlluminanceUnits
  | LengthUnits
  | MassUnits
  | PaceUnits
  | PartsPerUnits
  | PiecesUnits
  | PowerUnits
  | PressureUnits
  | ReactiveEnergyUnits
  | ReactivePowerUnits
  | SpeedUnits
  | TemperatureUnits
  | TimeUnits
  | VoltageUnits
  | VolumeUnits
  | VolumeFlowRateUnits;

export type AllMeasures =
  | 'acceleration'
  | 'angle'
  | 'apparentPower'
  | 'area'
  | 'charge'
  | 'current'
  | 'digital'
  | 'each'
  | 'energy'
  | 'force'
  | 'frequency'
  | 'illuminance'
  | 'length'
  | 'mass'
  | 'pace'
  | 'partsPer'
  | 'pieces'
  | 'power'
  | 'pressure'
  | 'reactiveEnergy'
  | 'reactivePower'
  | 'speed'
  | 'temperature'
  | 'time'
  | 'voltage'
  | 'volume'
  | 'volumeFlowRate';

const allMeasures: Record<
  AllMeasures,
  Measure<AllMeasuresSystems, AllMeasuresUnits>
> = {
  acceleration,
  angle,
  apparentPower,
  area,
  charge,
  current,
  digital,
  each,
  energy,
  force,
  frequency,
  illuminance,
  length,
  mass,
  pace,
  partsPer,
  pieces,
  power,
  pressure,
  reactiveEnergy,
  reactivePower,
  speed,
  temperature,
  time,
  voltage,
  volume,
  volumeFlowRate,
};

export default allMeasures;
export type {
  AccelerationSystems,
  AngleSystems,
  ApparentPowerSystems,
  AreaSystems,
  ChargeSystems,
  CurrentSystems,
  DigitalSystems,
  EachSystems,
  EnergySystems,
  ForceSystems,
  FrequencySystems,
  IlluminanceSystems,
  LengthSystems,
  MassSystems,
  PaceSystems,
  PartsPerSystems,
  PiecesSystems,
  PowerSystems,
  PressureSystems,
  ReactiveEnergySystems,
  ReactivePowerSystems,
  SpeedSystems,
  TemperatureSystems,
  TimeSystems,
  VoltageSystems,
  VolumeSystems,
  VolumeFlowRateSystems,
  AccelerationUnits,
  AngleUnits,
  ApparentPowerUnits,
  AreaUnits,
  ChargeUnits,
  CurrentUnits,
  DigitalUnits,
  EachUnits,
  EnergyUnits,
  ForceUnits,
  FrequencyUnits,
  IlluminanceUnits,
  LengthUnits,
  MassUnits,
  PaceUnits,
  PartsPerUnits,
  PiecesUnits,
  PowerUnits,
  PressureUnits,
  ReactiveEnergyUnits,
  ReactivePowerUnits,
  SpeedUnits,
  TemperatureUnits,
  TimeUnits,
  VoltageUnits,
  VolumeUnits,
  VolumeFlowRateUnits,
};
export {
  acceleration,
  angle,
  apparentPower,
  area,
  charge,
  current,
  digital,
  each,
  energy,
  force,
  frequency,
  illuminance,
  length,
  mass,
  pace,
  partsPer,
  pieces,
  power,
  pressure,
  reactiveEnergy,
  reactivePower,
  speed,
  temperature,
  time,
  voltage,
  volume,
  volumeFlowRate,
};
