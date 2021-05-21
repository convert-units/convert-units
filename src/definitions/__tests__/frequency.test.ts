import convert from '../..';

test('Hz to Hz', () => {
  expect(convert(1).from('Hz').to('Hz')).toBe(1);
});

test('mHz to mHz', () => {
  expect(convert(1).from('mHz').to('mHz')).toBe(1);
});

test('kHz to kHz', () => {
  expect(convert(1).from('kHz').to('kHz')).toBe(1);
});

test('MHz to MHz', () => {
  expect(convert(1).from('MHz').to('MHz')).toBe(1);
});

test('GHz to GHz', () => {
  expect(convert(1).from('GHz').to('GHz')).toBe(1);
});

test('THz to THz', () => {
  expect(convert(1).from('THz').to('THz')).toBe(1);
});

test('rpm to rpm', () => {
  expect(convert(1).from('rpm').to('rpm')).toBe(1);
});

test('deg/s to deg/s', () => {
  expect(convert(1).from('deg/s').to('deg/s')).toBe(1);
});

test('rad/s to rad/s', () => {
  expect(convert(1).from('rad/s').to('rad/s')).toBe(1);
});

test('rpm to Hz', () => {
  expect(convert(60).from('rpm').to('Hz')).toBe(1);
});

test('deg/s to Hz', () => {
  expect(convert(360).from('deg/s').to('Hz')).toBe(1);
});

test('rad/s to Hz', () => {
  expect(convert(Math.PI).from('rad/s').to('Hz')).toBe(0.5);
});

test('THz to GHz', () => {
  expect(convert(1).from('THz').to('GHz')).toBe(1000);
});

test('mHz to MHz', () => {
  expect(convert(1).from('mHz').to('MHz')).toBe(0.000000001);
});
