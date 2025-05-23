import configureMeasurements from '../..';
import digital, { DigitalSystems, DigitalUnits } from '../digital';

test('kb to Mb', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1000).from('kb').to('Mb')).toBe(1);
});

test('kb to bit', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('kb').to('bit')).toBe(8000);
});

test('kb to KiB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('kb').to('KiB')).toBe(0.9765625);
});

test('kb to byte', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('kb').to('byte')).toBe(1000);
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

test('KiB to kb', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('KiB').to('kb')).toBe(1.024);
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

test('bit to kb', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(8000).from('bit').to('kb')).toBe(1);
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

test('byte to kb', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1000).from('byte').to('kb')).toBe(1);
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
