import convert from '../..';

test('ppm to ppm', () => {
  expect(convert(1).from('ppm').to('ppm')).toBe(1);
});

test('ppb to ppb', () => {
  expect(convert(1).from('ppb').to('ppb')).toBe(1);
});

test('ppm to ppb', () => {
  expect(convert(1).from('ppm').to('ppb')).toBe(1000);
});

test('ppb to ppm', () => {
  expect(convert(1).from('ppb').to('ppm')).toBe(0.001);
});

test('ppt to ppt', () => {
  expect(convert(1).from('ppt').to('ppt')).toBe(1);
});

test('ppm to ppt', () => {
  expect(convert(1).from('ppm').to('ppt')).toBe(1000000);
});

test('ppt to ppb', () => {
  expect(convert(1).from('ppt').to('ppb')).toBe(0.001);
});

test('ppt to ppm', () => {
  expect(convert(1).from('ppt').to('ppm')).toBe(0.000001);
});

test('ppq to ppq', () => {
  expect(convert(1).from('ppq').to('ppq')).toBe(1);
});

test('ppq to ppt', () => {
  expect(convert(1).from('ppq').to('ppt')).toBe(0.001);
});

test('ppq to ppm', () => {
  expect(convert(1).from('ppq').to('ppm')).toBe(0.000000001);
});
