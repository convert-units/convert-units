import configureMeasurements from '../..';

import massFlowRate, {
  MassFlowRateSystems,
  MassFlowRateUnits,
} from '../massFlowRate';

test('kg/s to kg/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('kg/s').to('kg/h')).toBe(3600);
});

test('lb/s to lb/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('lb/s').to('lb/h')).toBe(3600);
});

test('kg/s to lb/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('kg/s').to('lb/s')).toBeCloseTo(2.204623);
});

test('lb/s to kg/s', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('lb/s').to('kg/s')).toBeCloseTo(0.453592);
});

test('kg/h to lb/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('kg/h').to('lb/h')).toBeCloseTo(2.204623);
});

test('lb/h to kg/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('lb/h').to('kg/h')).toBeCloseTo(0.453592);
});

test('kg/h to t/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('kg/h').to('mt/h')).toBe(0.001);
});

test('mt/h to kg/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('mt/h').to('kg/h')).toBe(1000);
});

test('lb/h to t/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('lb/h').to('mt/h')).toBeCloseTo(0.0004535924);
});

test('mt/h to lb/h', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  expect(convert(1).from('mt/h').to('lb/h')).toBeCloseTo(2204.622622);
});
