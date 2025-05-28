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
  expect(convert(1).from('kb').to('bit')).toBe(1000);
});

test('kb to Kib', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('kb').to('Kib')).toBeCloseTo(0.9765625, 6);
});

test('kb to byte', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('kb').to('byte')).toBe(125);
});

test('Kib to Mib', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1024).from('Kib').to('Mib')).toBe(1);
});

test('Kib to kb', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Kib').to('kb')).toBe(1.024);
});

test('Kib to bit', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Kib').to('bit')).toBe(1024);
});

test('Kib to byte', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Kib').to('byte')).toBe(128);
});

test('bit to kb', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1000).from('bit').to('kb')).toBe(1);
});

test('bit to Kib', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1024).from('bit').to('Kib')).toBe(1);
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
  expect(convert(125).from('byte').to('kb')).toBe(1);
});

test('byte to Kib', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(128).from('byte').to('Kib')).toBe(1);
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

test('MB to kB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('MB').to('kB')).toBe(1000);
});

test('MB to byte', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('MB').to('byte')).toBe(1_000_000);
});

test('GB to MB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('GB').to('MB')).toBe(1000);
});

test('GB to byte', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('GB').to('byte')).toBe(1_000_000_000);
});

test('TB to GB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('TB').to('GB')).toBe(1000);
});

test('Mb to kb', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Mb').to('kb')).toBe(1000);
});

test('Mb to bit', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Mb').to('bit')).toBe(1_000_000);
});

test('Gb to Mb', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Gb').to('Mb')).toBe(1000);
});

test('Gb to bit', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Gb').to('bit')).toBe(1_000_000_000);
});

test('Tb to Gb', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Tb').to('Gb')).toBe(1000);
});

test('MB to MiB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('MB').to('MiB')).toBeCloseTo(0.953674, 6);
});

test('GB to GiB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('GB').to('GiB')).toBeCloseTo(0.931323, 6);
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

test('TiB to TB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('TiB').to('TB')).toBeCloseTo(1.099511627776, 6);
});

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

test('Mib to bit', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Mib').to('bit')).toBe(1048576);
});

test('MiB to byte', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('MiB').to('byte')).toBe(1048576);
});

test('GiB to byte', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('GiB').to('byte')).toBe(1073741824);
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

test('GiB to TiB', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1024).from('GiB').to('TiB')).toBe(1);
});

test('Gib to bit', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Gib').to('bit')).toBe(1073741824);
});

test('Mb to Gib', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1073.741824).from('Mb').to('Gib')).toBeCloseTo(1, 6);
});

test('Tib to bit', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1).from('Tib').to('bit')).toBe(1099511627776);
});

test('Gb to Tib', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  expect(convert(1099.511628).from('Gb').to('Tib')).toBeCloseTo(1, 6);
});
