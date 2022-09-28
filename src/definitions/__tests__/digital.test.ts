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

test('Kib to b', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Kib').to('b')).toBe(1024);
});

test('Mib to b', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Mib').to('b')).toBe(1048576);
});

test('Gib to b', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Gib').to('b')).toBe(1073741824);
});

test('Tib to b', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Tib').to('b')).toBe(1099511627776);
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

test('KiB to B', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('KiB').to('B')).toBe(1024);
});

test('MiB to B', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('MiB').to('B')).toBe(1048576);
});

test('GiB to B', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('GiB').to('B')).toBe(1073741824);
});

test('TiB to B', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('TiB').to('B')).toBe(1099511627776);
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

test('Kb to Kib', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Kb').to('Kib')).toBeCloseTo(0.976563);
});

test('Kb to KiB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Kb').to('KiB')).toBeCloseTo(0.125);
});

test('Kb to KB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Kb').to('KB')).toBeCloseTo(0.125);
});

test('Kib to Kb', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Kib').to('Kb')).toBeCloseTo(1.024);
});

test('Kib to KB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Kib').to('KB')).toBeCloseTo(0.128);
});

test('Kib to KiB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Kib').to('KiB')).toBeCloseTo(0.128);
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

test('KB to Kib', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('KB').to('Kib')).toBeCloseTo(7.8125);
});

test('KB to KiB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('KB').to('KiB')).toBeCloseTo(0.976563);
});

test('KiB to Kb', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('KiB').to('Kb')).toBeCloseTo(8.192);
});

test('KiB to Kib', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('KiB').to('Kib')).toBe(8);
});

test('KiB to KB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('KiB').to('KB')).toBeCloseTo(1.024);
});
