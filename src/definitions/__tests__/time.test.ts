import configureMeasurements from '../..';
import time, { TimeSystems, TimeUnits } from '../time';

test('s to ns', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(1).from('s').to('ns')).toBeCloseTo(1000000000);
});

test('s to mu', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(1).from('s').to('mu')).toBe(1000000);
});

test('s to ms', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(1).from('s').to('ms')).toBe(1000);
});

test('s to m', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(60).from('s').to('min')).toBe(1);
});

test('s to s', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(1).from('s').to('s')).toBe(1);
});

test('s to h', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(3600).from('s').to('h')).toBe(1);
});

test('s to d', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(86400).from('s').to('d')).toBe(1);
});

test('d to week', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(7).from('d').to('week')).toBe(1);
});

test('d to month', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(30.4375).from('d').to('month')).toBe(1);
});

test('d to year', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(365.25).from('d').to('year')).toBe(1);
});

test('week to month', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(4.34821).from('week').to('month')).toBeCloseTo(1);
});

test('week to year', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(52.17857).from('week').to('year')).toBeCloseTo(1);
});

test('month to year', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  expect(convert(12).from('month').to('year')).toBe(1);
});
