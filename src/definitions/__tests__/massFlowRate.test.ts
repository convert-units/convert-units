import configureMeasurements from '../../index';

import massFlowRate, {
  MassFlowRateSystems,
  MassFlowRateUnits,
} from '../massFlowRate';

type TestType = [MassFlowRateUnits, MassFlowRateUnits, number, number, boolean];

// prettier-ignore
const unitTests: TestType[] = [
  ['kg/h',  'lb/h',   1,  2.204623,      false],
  ['kg/h',  't/h',    1,  0.001,         true],
  ['kg/s',  'kg/h',   1,  3600,          true],
  ['kg/s',  'lb/s',   1,  2.204623,      false],
  ['lb/h',  'kg/h',   1,  0.453592,      false],
  ['lb/h',  't/h',    1,  0.0004535924,  false],
  ['lb/s',  'kg/s',   1,  0.453592,      false],
  ['lb/s',  'lb/h',   1,  3600,          true],
  ['t/h',   'kg/h',   1,  1000,          true],
  ['t/h',   'lb/h',   1,  2204.622622,   false],
];

const convert = configureMeasurements<
  'massFlowRate',
  MassFlowRateSystems,
  MassFlowRateUnits
>({
  massFlowRate,
});

unitTests.map((val) =>
  test(val[0] + ' to ' + val[1], () => {
    const actual = convert(val[2]).from(val[0]).to(val[1]);
    const exact = val[4];
    const result = val[3];
    return exact
      ? expect(actual).toBe(result)
      : expect(actual).toBeCloseTo(result);
  })
);
