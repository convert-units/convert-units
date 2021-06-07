import configureMeasurements from '..';
import allMeausures from '../definitions';
import acceleration from '../definitions/acceleration';
import angle from '../definitions/angle';
import apparentPower from '../definitions/apparentPower';
import charge from '../definitions/charge';
import current from '../definitions/current';
import digital from '../definitions/digital';
import each from '../definitions/each';
import energy from '../definitions/energy';
import force from '../definitions/force';
import frequency from '../definitions/frequency';
import illuminance from '../definitions/illuminance';
import length from '../definitions/length';
import mass from '../definitions/mass';
import pace from '../definitions/pace';
import partsPer from '../definitions/partsPer';
import pieces from '../definitions/pieces';
import power from '../definitions/power';
import pressure from '../definitions/pressure';
import reactiveEnergy from '../definitions/reactiveEnergy';
import reactivePower from '../definitions/reactivePower';
import speed from '../definitions/speed';
import temperature from '../definitions/temperature';
import time from '../definitions/time';
import voltage from '../definitions/voltage';
import volume from '../definitions/volume';
import volumeFlowRate from '../definitions/volumeFlowRate';

test('l possibilities', () => {
  const convert = configureMeasurements({
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
  const convert = configureMeasurements({
    mass,
  });
  const actual = convert().from('kg').possibilities(),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('m possibilities', () => {
  const convert = configureMeasurements({
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
  const convert = configureMeasurements({
    each,
  });
  const actual = convert().possibilities('each'),
    expected = ['ea', 'dz'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('mass possibilities', () => {
  const convert = configureMeasurements({
    mass,
  });
  const actual = convert().possibilities('mass'),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('volume possibilities', () => {
  const convert = configureMeasurements({
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
  const convert = configureMeasurements({
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
  const convert = configureMeasurements({
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
  const convert = configureMeasurements({
    temperature,
  });
  const actual = convert().possibilities('temperature'),
    expected = ['C', 'K', 'F', 'R'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('time possibilities', () => {
  const convert = configureMeasurements({
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
  const convert = configureMeasurements({
    digital,
  });
  const actual = convert().possibilities('digital'),
    expected = ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('partsPer possibilities', () => {
  const convert = configureMeasurements({
    partsPer,
  });
  const actual = convert().possibilities('partsPer'),
    expected = ['ppm', 'ppb', 'ppt', 'ppq'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pressure possibilities', () => {
  const convert = configureMeasurements({
    pressure,
  });
  const actual = convert().possibilities('pressure'),
    expected = ['Pa', 'kPa', 'MPa', 'hPa', 'bar', 'torr', 'psi', 'ksi'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('speed possibilities', () => {
  const convert = configureMeasurements({
    speed,
  });
  const actual = convert().possibilities('speed'),
    expected = ['m/s', 'km/h', 'mph', 'knot', 'ft/s'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pace possibilities', () => {
  const convert = configureMeasurements({
    pace,
  });
  const actual = convert().possibilities('pace'),
    expected = ['min/km', 's/m', 'min/mi', 's/ft'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('current possibilities', () => {
  const convert = configureMeasurements({
    current,
  });
  const actual = convert().possibilities('current'),
    expected = ['A', 'mA', 'kA'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('voltage possibilities', () => {
  const convert = configureMeasurements({
    voltage,
  });
  const actual = convert().possibilities('voltage'),
    expected = ['V', 'mV', 'kV'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('power possibilities', () => {
  const convert = configureMeasurements({
    power,
  });
  const actual = convert().possibilities('power'),
    expected = ['W', 'mW', 'kW', 'MW', 'GW', 'PS', 'Btu/s', 'ft-lb/s', 'hp'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('reactive power possibilities', () => {
  const convert = configureMeasurements({
    reactivePower,
  });
  const actual = convert().possibilities('reactivePower'),
    expected = ['VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('apparent power possibilities', () => {
  const convert = configureMeasurements({
    apparentPower,
  });
  const actual = convert().possibilities('apparentPower'),
    expected = ['VA', 'mVA', 'kVA', 'MVA', 'GVA'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('energy possibilities', () => {
  const convert = configureMeasurements({
    energy,
  });
  const actual = convert().possibilities('energy'),
    expected = ['Wh', 'mWh', 'kWh', 'MWh', 'GWh', 'J', 'kJ'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('reactive energy possibilities', () => {
  const convert = configureMeasurements({
    reactiveEnergy,
  });
  const actual = convert().possibilities('reactiveEnergy'),
    expected = ['VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('frequency possibilities', () => {
  const convert = configureMeasurements({
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
  const convert = configureMeasurements({
    illuminance,
  });
  const actual = convert().possibilities('illuminance'),
    expected = ['lx', 'ft-cd'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('angle possibilities', () => {
  const convert = configureMeasurements({
    angle,
  });
  const actual = convert().possibilities('angle'),
    expected = ['rad', 'deg', 'grad', 'arcmin', 'arcsec'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('charge possibilities', () => {
  const convert = configureMeasurements({
    charge,
  });
  const actual = convert().possibilities('charge'),
    expected = ['c', 'mC', 'μC', 'nC', 'pC'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('force possibilities', () => {
  const convert = configureMeasurements({
    force,
  });
  const actual = convert().possibilities('force'),
    expected = ['N', 'kN', 'lbf'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('acceleration possibilities', () => {
  const convert = configureMeasurements({
    acceleration,
  });
  const actual = convert().possibilities('acceleration'),
    expected = ['g-force', 'm/s2'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('all possibilities', () => {
  const convert = configureMeasurements(allMeausures);
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
      'in2',
      'in3',
      'in3/h',
      'in3/min',
      'in3/s',
      'J',
      'kA',
      'kPa',
      'kanna',
      'kg',
      'kkp',
      'kJ',
      'kN',
      'kl',
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
      'yd3/h',
      'yd3/min',
      'yd3/s',
      'year',
      'μm',
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
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pieces possibilities', () => {
  const convert = configureMeasurements({
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
