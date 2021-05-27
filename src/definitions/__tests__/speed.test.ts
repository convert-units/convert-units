import configureMeasurements from '../..';
import speed from '../speed';

test('m/s to m/s', () => {
  const convert = configureMeasurements({
    speed,
  });
  expect(convert(1).from('m/s').to('m/s')).toBe(1);
});

test('m/s to km/h', () => {
  const convert = configureMeasurements({
    speed,
  });
  expect(convert(1).from('m/s').to('km/h')).toBe(3.6);
});

test('mph to mph', () => {
  const convert = configureMeasurements({
    speed,
  });
  expect(convert(6).from('mph').to('mph')).toBe(6);
});

test('mph to knot', () => {
  const convert = configureMeasurements({
    speed,
  });
  expect(convert(2).from('mph').to('knot')).toBeCloseTo(1.73795);
});

test('mph to ft/s', () => {
  const convert = configureMeasurements({
    speed,
  });
  expect(convert(3).from('mph').to('ft/s')).toBeCloseTo(4.4);
});

test('m/s to knot', () => {
  const convert = configureMeasurements({
    speed,
  });
  expect(convert(8).from('m/s').to('knot')).toBeCloseTo(15.5508);
});

test('mph to km/h', () => {
  const convert = configureMeasurements({
    speed,
  });
  expect(convert(12).from('mph').to('km/h')).toBeCloseTo(19.3121);
});
