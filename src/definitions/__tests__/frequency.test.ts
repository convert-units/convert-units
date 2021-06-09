import configureMeasurements from '../..';
import frequency, { FrequencySystems, FrequencyUnits } from '../frequency';

test('Hz to Hz', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(1).from('Hz').to('Hz')).toBe(1);
});

test('mHz to mHz', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(1).from('mHz').to('mHz')).toBe(1);
});

test('kHz to kHz', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(1).from('kHz').to('kHz')).toBe(1);
});

test('MHz to MHz', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(1).from('MHz').to('MHz')).toBe(1);
});

test('GHz to GHz', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(1).from('GHz').to('GHz')).toBe(1);
});

test('THz to THz', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(1).from('THz').to('THz')).toBe(1);
});

test('rpm to rpm', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(1).from('rpm').to('rpm')).toBe(1);
});

test('deg/s to deg/s', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(1).from('deg/s').to('deg/s')).toBe(1);
});

test('rad/s to rad/s', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(1).from('rad/s').to('rad/s')).toBe(1);
});

test('rpm to Hz', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(60).from('rpm').to('Hz')).toBe(1);
});

test('deg/s to Hz', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(360).from('deg/s').to('Hz')).toBe(1);
});

test('rad/s to Hz', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(Math.PI).from('rad/s').to('Hz')).toBe(0.5);
});

test('THz to GHz', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(1).from('THz').to('GHz')).toBe(1000);
});

test('mHz to MHz', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  expect(convert(1).from('mHz').to('MHz')).toBe(0.000000001);
});
