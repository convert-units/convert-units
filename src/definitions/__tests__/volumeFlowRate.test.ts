import configureMeasurements from '../../index';
import measure, { VolumeFlowRateUnits } from '../volumeFlowRate';
import { runTests } from './index';

type TestType = [
  VolumeFlowRateUnits,
  VolumeFlowRateUnits,
  number,
  number,
  boolean
];

// prettier-ignore
const unitTests: TestType[] = [
  ['cl/s',    'l/s',      25,         0.25,               true],
  ['cl/s',    'ml/s',     100,        1000,               true],
  ['cm3/s',   'l/s',      100,        0.1,                true],
  ['dl/s',    'l/s',      2,          0.2,                true],
  ['dl/s',    'ml/s',     10,         1000,               true],
  ['fl-oz/s', 'fl-oz/s',  62,         62,                 true],
  ['fl-oz/s', 'm3/min',   1,          0.00177441177,      false],
  ['fl-oz/s', 'Tbs/s',    4,          8,                  true],
  ['ft3/min', 'l/s',      1,          0.471947443,        false],
  ['ft3/s',   'cm3/s',    1,          28316.832,          false],
  ['gal/s',   'l/s',      1,          3.78541178,         false],
  ['in3/s',   'fl-oz/s',  1,          0.554113,           false],
  ['in3/s',   'l/s',      1,          0.0163871,          false],
  ['kl/min',  'l/h',      1,          60000,              false],
  ['kl/s',    'kl/h',     1,          3600,               true],
  ['kl/s',    'kl/min',   1,          60,                 false],
  ['km3/s',   'l/s',      1,          1_000_000_000_000,  true],
  ['l/s',     'kl/h',     1,          3.6,                false],
  ['l/s',     'kl/h',     1,          3.6,                false],
  ['l/s',     'l/h',      1,          3600,               true],
  ['l/s',     'l/min',    1,          60,                 true],
  ['l/s',     'l/s',      2,          2,                  true],
  ['l/s',     'm3/h',     1,          3.6,                false],
  ['l/s',     'm3/s',     1,          0.001,              true],
  ['l/s',     'ml/s',     1,          1000,               true],
  ['m3/s',    'kl/h',     1,          3600,               false],
  ['m3/s',    'l/s',      1,          1000,               true],
  ['m3/s',    'm3/h',     1,          3600,               true],
  ['m3/s',    'yd3/s',    1,          1.30795,            false],
  ['ml/s',    'gal/s',    9876,       2.609,              false],
  ['ml/s',    'l/s',      100,        0.1,                true],
  ['ml/s',    'ml/s',     13,         13,                 true],
  ['mm3/s',   'l/s',      1_000_000,  1,                  true],
  ['pnt/min', 'kl/h',     1,          0.0283905884,       false],
  ['pnt/s',   'ml/s',     5,          2365.882,           false],
  ['Tbs/s',   'fl-oz/s',  2,          1,                  true],
  ['Tbs/s',   'Tbs/s',    140,        140,                true],
  ['tsp/s',   'l/s',      355,        1.75,               false],
  ['yd3/h',   'm3/min',   1,          0.012742581,        false],
];

runTests(
  unitTests,
  configureMeasurements({
    measure,
  })
);
