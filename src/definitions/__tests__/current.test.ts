import configureMeasurements from '../..';
import current, { CurrentSystems, CurrentUnits } from '../current';

test('A to A', () => {
  const convert = configureMeasurements<
    'current',
    CurrentSystems,
    CurrentUnits
  >({
    current,
  });
  expect(convert(1).from('A').to('A')).toBe(1);
});

test('mA to mA', () => {
  const convert = configureMeasurements<
    'current',
    CurrentSystems,
    CurrentUnits
  >({
    current,
  });
  expect(convert(1).from('mA').to('mA')).toBe(1);
});

test('kA to kA', () => {
  const convert = configureMeasurements<
    'current',
    CurrentSystems,
    CurrentUnits
  >({
    current,
  });
  expect(convert(1).from('kA').to('kA')).toBe(1);
});

test('A to mA', () => {
  const convert = configureMeasurements<
    'current',
    CurrentSystems,
    CurrentUnits
  >({
    current,
  });
  expect(convert(1).from('A').to('mA')).toBe(1000);
});

test('A to kA', () => {
  const convert = configureMeasurements<
    'current',
    CurrentSystems,
    CurrentUnits
  >({
    current,
  });
  expect(convert(1).from('A').to('kA')).toBe(0.001);
});

test('kA to mA', () => {
  const convert = configureMeasurements<
    'current',
    CurrentSystems,
    CurrentUnits
  >({
    current,
  });
  expect(convert(1).from('kA').to('mA')).toBe(1000000);
});

test('mA to kA', () => {
  const convert = configureMeasurements<
    'current',
    CurrentSystems,
    CurrentUnits
  >({
    current,
  });
  expect(convert(1).from('mA').to('kA')).toBe(0.000001);
});

test('mA to A', () => {
  const convert = configureMeasurements<
    'current',
    CurrentSystems,
    CurrentUnits
  >({
    current,
  });
  expect(convert(1).from('mA').to('A')).toBe(0.001);
});

test('kA to A', () => {
  const convert = configureMeasurements<
    'current',
    CurrentSystems,
    CurrentUnits
  >({
    current,
  });
  expect(convert(1).from('kA').to('A')).toBe(1000);
});
