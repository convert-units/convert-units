import configureMeasurements from '../..';
import partsPer, { PartsPerSystems, PartsPerUnits } from '../partsPer';

test('ppm to ppm', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  expect(convert(1).from('ppm').to('ppm')).toBe(1);
});

test('ppb to ppb', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  expect(convert(1).from('ppb').to('ppb')).toBe(1);
});

test('ppm to ppb', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  expect(convert(1).from('ppm').to('ppb')).toBe(1000);
});

test('ppb to ppm', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  expect(convert(1).from('ppb').to('ppm')).toBe(0.001);
});

test('ppt to ppt', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  expect(convert(1).from('ppt').to('ppt')).toBe(1);
});

test('ppm to ppt', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  expect(convert(1).from('ppm').to('ppt')).toBe(1000000);
});

test('ppt to ppb', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  expect(convert(1).from('ppt').to('ppb')).toBe(0.001);
});

test('ppt to ppm', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  expect(convert(1).from('ppt').to('ppm')).toBe(0.000001);
});

test('ppq to ppq', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  expect(convert(1).from('ppq').to('ppq')).toBe(1);
});

test('ppq to ppt', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  expect(convert(1).from('ppq').to('ppt')).toBe(0.001);
});

test('ppq to ppm', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  expect(convert(1).from('ppq').to('ppm')).toBe(0.000000001);
});
