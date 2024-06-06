import configureMeasurements from '../..';
import digital, { DigitalSystems, DigitalUnits } from '../digital';

test('kB to MB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1000).from('kB').to('MB')).toBe(1);
});

test('kB to bit', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('kB').to('bit')).toBe(8000);
});

test('kB to KiB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('kB').to('KiB')).toBe(0.9765625);
});

test('kB to byte', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('kB').to('byte')).toBe(1000);
});

test('KiB to MiB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1024).from('KiB').to('MiB')).toBe(1);
});

test('KiB to kB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('KiB').to('kB')).toBe(1.024);
});

test('KiB to bit', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('KiB').to('bit')).toBe(8192);
});

test('KiB to byte', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('KiB').to('byte')).toBe(1024);
});

test('bit to kB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(8000).from('bit').to('kB')).toBe(1);
});

test('bit to KiB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(8192).from('bit').to('KiB')).toBe(1);
});

test('bit to byte', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(8).from('bit').to('byte')).toBe(1);
});

test('byte to kB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1000).from('byte').to('kB')).toBe(1);
});

test('byte to KiB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1024).from('byte').to('KiB')).toBe(1);
});

test('byte to bit', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('byte').to('bit')).toBe(8);
});
