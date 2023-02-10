import configureMeasurements from '..';
import allMeausures, {
  AllMeasures,
  AllMeasuresSystems,
  AllMeasuresUnits,
} from '../definitions';
import acceleration, {
  AccelerationSystems,
  AccelerationUnits,
} from '../definitions/acceleration';
import angle, { AngleSystems, AngleUnits } from '../definitions/angle';
import apparentPower, {
  ApparentPowerSystems,
  ApparentPowerUnits,
} from '../definitions/apparentPower';
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
      '× 10³ cells/µL',
      '× 10⁹ cells/L',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('kg possibilities', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  const actual = convert().from('kg').possibilities(),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't'];
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
      'm',
      'km',
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
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't'];
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
      '× 10³ cells/µL',
      '× 10⁹ cells/L',
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
      'ml/s',
      'cl/s',
      'dl/s',
      'l/s',
      'l/min',
      'l/h',
      'kl/s',
      'kl/min',
      'kl/h',
      'm3/s',
      'm3/min',
      'm3/h',
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
      'm',
      'km',
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
    expected = ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB'];
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
      'bar',
      'torr',
      'psi',
      'ksi',
      'inHg',
      'mmHg',
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
    expected = ['A', 'mA', 'kA'];
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
    expected = ['V', 'mV', 'kV'];
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
    expected = ['Wh', 'mWh', 'kWh', 'MWh', 'GWh', 'J', 'kJ', 'MJ', 'GJ'];
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
    expected = ['N', 'kN', 'lbf'];
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
  >(allMeausures);
  const actual = convert().possibilities(),
    // Please keep these sorted for maintainability
    expected = [
      'A',
      'arcmin',
      'arcsec',
      'B',
      'Btu/s',
      'C',
      'F',
      'R',
      'GB',
      'Gb',
      'K',
      'KB',
      'Kb',
      'MB',
      'MPa',
      'Mb',
      'N',
      'Pa',
      'TB',
      'Tb',
      'ac',
      'b',
      'bar',
      'c',
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
      'K/L',
      'K/dL',
      'K/mL',
      'K/uL',
      'g/L',
      'mg/L',
      'mmol/L',
      'ng/L',
      'nmol/L',
      'pg/L',
      'µmol/L',
      'pg/dL',
      'pg/mL',
      'pg/uL',
      'ng/dL',
      'ng/mL',
      'mEq/L',
      'Eq/L',
      'ng/uL',
      'mol/L',
      'mg/dL',
      'mg/mL',
      'mg/uL',
      'g/dL',
      'g/mL',
      'g/uL',
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
      'kg',
      'kkp',
      'kJ',
      'MJ',
      'GJ',
      'kN',
      'kl',
      'Ml',
      'Gl',
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
      'l/h',
      'l/min',
      'l/s',
      'lb',
      'lbf',
      'lx',
      'm',
      'm/s',
      'm/s2',
      'm2',
      'm3',
      'm3/h',
      'm3/min',
      'm3/s',
      'mA',
      'mC',
      'mcg',
      'mg',
      'mi',
      'mi2',
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
      'month',
      'mph',
      'ms',
      'msk',
      'mt',
      'mu',
      'nC',
      'nm',
      'nm2',
      'mHz',
      'MHz',
      'mV',
      'mVA',
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
      'Wh',
      'yd',
      'yd2',
      'yd3',
      '× 10³ cells/µL',
      '× 10⁹ cells/L',
      'yd3/h',
      'yd3/min',
      'yd3/s',
      'year',
      'μm',
      'μm2',
      'μC',
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
      'mmHg',
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
