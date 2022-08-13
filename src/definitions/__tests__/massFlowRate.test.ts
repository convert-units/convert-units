import configureMeasurements from '../../index';

import { runTests } from './index';

import measure, { MassFlowRateUnits } from '../massFlowRate';

export type TestType = [
  MassFlowRateUnits,
  MassFlowRateUnits,
  number,
  number,
  boolean
];

// prettier-ignore
const unitTests: TestType[] = [
  ['kg/h',  'lb/h',   1,  2.204623,     false],
  ['kg/h',  't/h',    1,  0.001,        true],
  ['kg/s',  'kg/h',   1,  3600,         true],
  ['kg/s',  'lb/s',   1,  2.204623,     false],
  ['lb/h',  'kg/h',   1,  0.453592,     false],
  ['lb/h',  't/h',    1,  0.0004535924, false],
  ['lb/s',  'kg/s',   1,  0.453592,     false],
  ['lb/s',  'lb/h',   1,  3600,         true],
  ['t/h',   'kg/h',   1,  1000,         true],
  ['t/h',   'lb/h',   1,  2204.622622,  false],
];

runTests(
  unitTests,
  configureMeasurements({
    measure,
  })
);