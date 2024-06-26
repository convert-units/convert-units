import configureMeasurements from '..';
import acceleration, {
  AccelerationSystems,
  AccelerationUnits,
} from '../definitions/acceleration';
import allMeasures, {
  AllMeasures,
  AllMeasuresSystems,
  AllMeasuresUnits,
} from '../definitions/all';
import angle, { AngleSystems, AngleUnits } from '../definitions/angle';
import apparentPower, {
  ApparentPowerSystems,
  ApparentPowerUnits,
} from '../definitions/apparentPower';
import area, { AreaSystems, AreaUnits } from '../definitions/area';
import charge, { ChargeSystems, ChargeUnits } from '../definitions/charge';
import current, { CurrentSystems, CurrentUnits } from '../definitions/current';
import digital, { DigitalSystems, DigitalUnits } from '../definitions/digital';
import each, { EachSystems, EachUnits } from '../definitions/each';
import energy, { EnergySystems, EnergyUnits } from '../definitions/energy';
import force, { ForceSystems, ForceUnits } from '../definitions/force';
import frequency, {
  FrequencySystems,
  FrequencyUnits,
} from '../definitions/frequency';
import illuminance, {
  IlluminanceSystems,
  IlluminanceUnits,
} from '../definitions/illuminance';
import length, { LengthSystems, LengthUnits } from '../definitions/length';
import mass, { MassSystems, MassUnits } from '../definitions/mass';
import massFlowRate, {
  MassFlowRateSystems,
  MassFlowRateUnits,
} from '../definitions/massFlowRate';
import pace, { PaceSystems, PaceUnits } from '../definitions/pace';
import partsPer, {
  PartsPerSystems,
  PartsPerUnits,
} from '../definitions/partsPer';
import pieces, { PiecesSystems, PiecesUnits } from '../definitions/pieces';
import power, { PowerSystems, PowerUnits } from '../definitions/power';
import pressure, {
  PressureSystems,
  PressureUnits,
} from '../definitions/pressure';
import reactiveEnergy, {
  ReactiveEnergySystems,
  ReactiveEnergyUnits,
} from '../definitions/reactiveEnergy';
import reactivePower, {
  ReactivePowerSystems,
  ReactivePowerUnits,
} from '../definitions/reactivePower';
import speed, { SpeedSystems, SpeedUnits } from '../definitions/speed';
import temperature, {
  TemperatureSystems,
  TemperatureUnits,
} from '../definitions/temperature';
import time, { TimeSystems, TimeUnits } from '../definitions/time';
import torque, { TorqueSystems, TorqueUnits } from '../definitions/torque';
import voltage, { VoltageSystems, VoltageUnits } from '../definitions/voltage';
import volume, { VolumeSystems, VolumeUnits } from '../definitions/volume';
import volumeFlowRate, {
  VolumeFlowRateSystems,
  VolumeFlowRateUnits,
} from '../definitions/volumeFlowRate';

test('l possibilities', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  const actual = convert().from('l').possibilities(),
    expected = [
      'mm3',
      'cm3',
      'dm3',
      'ml',
      'cl',
      'dl',
      'l',
      'kl',
      'Ml',
      'Gl',
      'm3',
      'km3',
      'krm',
      'tsk',
      'msk',
      'kkp',
      'glas',
      'kanna',
      'tsp',
      'Tbs',
      'in3',
      'fl-oz',
      'cup',
      'pnt',
      'qt',
      'gal',
      'ft3',
      'yd3',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('kg possibilities', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  const actual = convert().from('kg').possibilities(),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 'st', 't'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('m possibilities', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert().from('m').possibilities(),
    expected = [
      'nm',
      'μm',
      'mm',
      'cm',
      'dm',
      'm',
      'km',
      'mil',
      'in',
      'yd',
      'ft-us',
      'ft',
      'fathom',
      'mi',
      'nMi',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('each possibilities', () => {
  const convert = configureMeasurements<'each', EachSystems, EachUnits>({
    each,
  });
  const actual = convert().possibilities('each'),
    expected = ['ea', 'dz'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('mass possibilities', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  const actual = convert().possibilities('mass'),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 'st', 't'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('mass flow rate possibilities', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  const actual = convert().possibilities('massFlowRate'),
    expected = ['kg/h', 'kg/min', 'kg/s', 'lb/h', 'lb/s', 'mt/h'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('volume possibilities', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  const actual = convert().possibilities('volume'),
    expected = [
      'mm3',
      'cm3',
      'dm3',
      'ml',
      'cl',
      'dl',
      'l',
      'kl',
      'Ml',
      'Gl',
      'm3',
      'km3',
      'krm',
      'tsk',
      'msk',
      'kkp',
      'glas',
      'kanna',
      'tsp',
      'Tbs',
      'in3',
      'fl-oz',
      'cup',
      'pnt',
      'qt',
      'gal',
      'ft3',
      'yd3',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('volume flow rate possibilities', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  const actual = convert().possibilities('volumeFlowRate'),
    expected = [
      'mm3/s',
      'cm3/s',
      'dm3/s',
      'dm3/min',
      'dm3/h',
      'dm3/d',
      'dm3/a',
      'ml/s',
      'cl/s',
      'dl/s',
      'l/s',
      'l/min',
      'l/h',
      'l/d',
      'l/a',
      'kl/s',
      'kl/min',
      'kl/h',
      'm3/s',
      'm3/min',
      'm3/h',
      'm3/d',
      'm3/a',
      'km3/s',
      'tsp/s',
      'Tbs/s',
      'in3/s',
      'in3/min',
      'in3/h',
      'fl-oz/s',
      'fl-oz/min',
      'fl-oz/h',
      'cup/s',
      'pnt/s',
      'pnt/min',
      'pnt/h',
      'qt/s',
      'gal/s',
      'gal/min',
      'gal/h',
      'ft3/s',
      'ft3/min',
      'ft3/h',
      'yd3/s',
      'yd3/min',
      'yd3/h',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('length possibilities', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert().possibilities('length'),
    expected = [
      'nm',
      'μm',
      'mm',
      'cm',
      'dm',
      'm',
      'km',
      'mil',
      'in',
      'yd',
      'ft-us',
      'ft',
      'fathom',
      'mi',
      'nMi',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('area possibilities', () => {
  const convert = configureMeasurements<'area', AreaSystems, AreaUnits>({
    area,
  });
  const actual = convert().possibilities('area'),
    expected = [
      'nm2',
      'μm2',
      'mm2',
      'cm2',
      'dm2',
      'm2',
      'a',
      'ha',
      'km2',
      'in2',
      'yd2',
      'ft2',
      'ac',
      'mi2',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('temperature possibilities', () => {
  const convert = configureMeasurements<
    'temperature',
    TemperatureSystems,
    TemperatureUnits
  >({
    temperature,
  });
  const actual = convert().possibilities('temperature'),
    expected = ['C', 'K', 'F', 'R'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('time possibilities', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  const actual = convert().possibilities('time'),
    expected = [
      'ns',
      'mu',
      'ms',
      's',
      'min',
      'h',
      'd',
      'week',
      'month',
      'year',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('digital possibilities', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  const actual = convert().possibilities('digital'),
    expected = [
      'bit',
      'byte',
      'kB',
      'MB',
      'GB',
      'TB',
      'KiB',
      'MiB',
      'GiB',
      'TiB',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('partsPer possibilities', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  const actual = convert().possibilities('partsPer'),
    expected = ['ppm', 'ppb', 'ppt', 'ppq'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pressure possibilities', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  const actual = convert().possibilities('pressure'),
    expected = [
      'Pa',
      'kPa',
      'MPa',
      'hPa',
      'mbar',
      'bar',
      'torr',
      'mH2O',
      'mmHg',
      'psi',
      'ksi',
      'inHg',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('speed possibilities', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  const actual = convert().possibilities('speed'),
    expected = ['m/s', 'km/h', 'mph', 'knot', 'ft/s', 'ft/min', 'in/h', 'mm/h'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('torque possibilities', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  const actual = convert().possibilities('torque'),
    expected = ['Nm', 'lbf-ft'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pace possibilities', () => {
  const convert = configureMeasurements<'pace', PaceSystems, PaceUnits>({
    pace,
  });
  const actual = convert().possibilities('pace'),
    expected = ['min/km', 's/m', 'min/mi', 's/ft'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('current possibilities', () => {
  const convert = configureMeasurements<
    'current',
    CurrentSystems,
    CurrentUnits
  >({
    current,
  });
  const actual = convert().possibilities('current'),
    expected = ['A', 'μA', 'mA', 'kA', 'MA'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('voltage possibilities', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  const actual = convert().possibilities('voltage'),
    expected = ['V', 'μV', 'mV', 'kV', 'MV'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('power possibilities', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  const actual = convert().possibilities('power'),
    expected = ['W', 'mW', 'kW', 'MW', 'GW', 'PS', 'Btu/s', 'ft-lb/s', 'hp'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('reactive power possibilities', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  const actual = convert().possibilities('reactivePower'),
    expected = ['VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('apparent power possibilities', () => {
  const convert = configureMeasurements<
    'apparentPower',
    ApparentPowerSystems,
    ApparentPowerUnits
  >({
    apparentPower,
  });
  const actual = convert().possibilities('apparentPower'),
    expected = ['VA', 'mVA', 'kVA', 'MVA', 'GVA'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('energy possibilities', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  const actual = convert().possibilities('energy'),
    expected = [
      'Ws',
      'Wm',
      'Wh',
      'mWh',
      'kWh',
      'MWh',
      'GWh',
      'J',
      'kJ',
      'MJ',
      'GJ',
      'cal',
      'kcal',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('reactive energy possibilities', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  const actual = convert().possibilities('reactiveEnergy'),
    expected = ['VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('frequency possibilities', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  const actual = convert().possibilities('frequency'),
    expected = [
      'mHz',
      'Hz',
      'kHz',
      'MHz',
      'GHz',
      'THz',
      'rpm',
      'deg/s',
      'rad/s',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('illuminance possibilities', () => {
  const convert = configureMeasurements<
    'illuminance',
    IlluminanceSystems,
    IlluminanceUnits
  >({
    illuminance,
  });
  const actual = convert().possibilities('illuminance'),
    expected = ['lx', 'ft-cd'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('angle possibilities', () => {
  const convert = configureMeasurements<'angle', AngleSystems, AngleUnits>({
    angle,
  });
  const actual = convert().possibilities('angle'),
    expected = ['rad', 'deg', 'grad', 'arcmin', 'arcsec'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('charge possibilities', () => {
  const convert = configureMeasurements<'charge', ChargeSystems, ChargeUnits>({
    charge,
  });
  const actual = convert().possibilities('charge'),
    expected = ['c', 'mC', 'μC', 'nC', 'pC'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('force possibilities', () => {
  const convert = configureMeasurements<'force', ForceSystems, ForceUnits>({
    force,
  });
  const actual = convert().possibilities('force'),
    expected = ['N', 'kN', 'lbf', 'kgf'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('acceleration possibilities', () => {
  const convert = configureMeasurements<
    'acceleration',
    AccelerationSystems,
    AccelerationUnits
  >({
    acceleration,
  });
  const actual = convert().possibilities('acceleration'),
    expected = ['g-force', 'm/s2'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('all possibilities', () => {
  const convert = configureMeasurements<
    AllMeasures,
    AllMeasuresSystems,
    AllMeasuresUnits
  >(allMeasures);
  const actual = convert().possibilities(),
    // Please keep these sorted for maintainability
    expected = [
      'A',
      'a',
      'arcmin',
      'arcsec',
      'Btu/s',
      'bit',
      'byte',
      'C',
      'F',
      'R',
      'GB',
      'GiB',
      'K',
      'kB',
      'KiB',
      'MB',
      'MPa',
      'MiB',
      'N',
      'Pa',
      'TB',
      'TiB',
      'ac',
      'bar',
      'c',
      'cal',
      'cl',
      'cl/s',
      'cm',
      'cm2',
      'cm3',
      'cm3/s',
      'cup',
      'cup/s',
      'd',
      'deg',
      'deg/s',
      'dl',
      'dl/s',
      'dm',
      'dm2',
      'dm3',
      'dm3/a',
      'dm3/d',
      'dm3/h',
      'dm3/min',
      'dm3/s',
      'ea',
      'dz',
      'fl-oz',
      'fl-oz/h',
      'fl-oz/min',
      'fl-oz/s',
      'ft-us',
      'ft',
      'fathom',
      'ft-cd',
      'ft-lb/s',
      'ft/min',
      'ft/s',
      'ft2',
      'ft3',
      'ft3/h',
      'ft3/min',
      'ft3/s',
      'g',
      'g-force',
      'gal',
      'gal/h',
      'gal/min',
      'gal/s',
      'glas',
      'grad',
      'GHz',
      'GVA',
      'GVAR',
      'GVARh',
      'GW',
      'GWh',
      'h',
      'hPa',
      'ha',
      'hp',
      'Hz',
      'in',
      'in/h',
      'in2',
      'in3',
      'in3/h',
      'in3/min',
      'in3/s',
      'inHg',
      'J',
      'kA',
      'kPa',
      'kanna',
      'kcal',
      'kg',
      'kgf',
      'kkp',
      'kJ',
      'lb/h',
      'lb/s',
      'MJ',
      'GJ',
      'kN',
      'kl',
      'Ml',
      'Gl',
      'kg/h',
      'kg/min',
      'kg/s',
      'kl/h',
      'kl/min',
      'kl/s',
      'km',
      'km/h',
      'km2',
      'km3',
      'km3/s',
      'knot',
      'krm',
      'ksi',
      'kHz',
      'kV',
      'kVA',
      'kVAR',
      'kVARh',
      'kW',
      'kWh',
      'l',
      'lbf-ft',
      'l/a',
      'l/d',
      'l/h',
      'l/min',
      'l/s',
      'lb',
      'lbf',
      'lx',
      'MA',
      'm',
      'm/s',
      'm/s2',
      'm2',
      'm3',
      'm3/a',
      'm3/d',
      'm3/h',
      'm3/min',
      'm3/s',
      'mA',
      'mbar',
      'mC',
      'mcg',
      'mg',
      'mH2O',
      'mi',
      'mi2',
      'mil',
      'min',
      'min/km',
      'min/mi',
      'ml',
      'ml/s',
      'mm',
      'mm/h',
      'mm2',
      'mm3',
      'mm3/s',
      'mmHg',
      'month',
      'mph',
      'ms',
      'msk',
      'mt',
      'mt/h',
      'mu',
      'nC',
      'nm',
      'Nm',
      'nm2',
      'mHz',
      'MHz',
      'mV',
      'mVA',
      'MV',
      'MVA',
      'mVAR',
      'MVAR',
      'mVARh',
      'MVARh',
      'mW',
      'MW',
      'mWh',
      'MWh',
      'nMi',
      'ns',
      'oz',
      'pC',
      'pnt',
      'pnt/h',
      'pnt/min',
      'pnt/s',
      'ppb',
      'ppm',
      'ppq',
      'ppt',
      'psi',
      'PS',
      'qt',
      'qt/s',
      'rad',
      'rad/s',
      'rpm',
      's',
      's/m',
      's/ft',
      't',
      'Tbs',
      'Tbs/s',
      'THz',
      'torr',
      'tsk',
      'tsp',
      'tsp/s',
      'V',
      'VA',
      'VAR',
      'VARh',
      'W',
      'week',
      'Ws',
      'Wm',
      'Wh',
      'yd',
      'yd2',
      'yd3',
      'yd3/h',
      'yd3/min',
      'yd3/s',
      'year',
      'μm',
      'μm2',
      'μC',
      'μA',
      'μV',
      'pcs',
      'bk-doz',
      'cp',
      'doz-doz',
      'doz',
      'gr-gr',
      'gros',
      'half-dozen',
      'long-hundred',
      'ream',
      'scores',
      'sm-gr',
      'st',
      'trio',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pieces possibilities', () => {
  const convert = configureMeasurements<'pieces', PiecesSystems, PiecesUnits>({
    pieces,
  });
  const actual = convert().possibilities('pieces'),
    expected = [
      'pcs',
      'bk-doz',
      'cp',
      'doz-doz',
      'doz',
      'gr-gr',
      'gros',
      'half-dozen',
      'long-hundred',
      'ream',
      'scores',
      'sm-gr',
      'trio',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});
