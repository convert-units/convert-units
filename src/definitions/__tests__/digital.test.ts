import configureMeasurements from '../..';
import digital, { DigitalSystems, DigitalUnits } from '../digital';

test('b to b', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('b').to('b')).toBe(1);
});

test('Kb to b', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Kb').to('b')).toBe(1e3);
});

test('Mb to b', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Mb').to('b')).toBe(1e6);
});

test('Gb to b', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Gb').to('b')).toBe(1e9);
});

test('Tb to b', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Tb').to('b')).toBe(1e12);
});

test('B to B', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('B').to('B')).toBe(1);
});

test('KB to B', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('KB').to('B')).toBe(1e3);
});

test('MB to B', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('MB').to('B')).toBe(1e6);
});

test('GB to B', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('GB').to('B')).toBe(1e9);
});

test('TB to B', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('TB').to('B')).toBe(1e12);
});

test('B to b', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('B').to('b')).toBe(8);
});

test('b to B', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('b').to('B')).toBeCloseTo(0.125);
});

test('KB to Kb', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('KB').to('Kb')).toBe(8);
});
