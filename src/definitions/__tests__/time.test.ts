import convert from '../..';

test('s to ns', () => {
  expect(convert(1).from('s').to('ns')).toBeCloseTo(1000000000);
});

test('s to mu', () => {
  expect(convert(1).from('s').to('mu')).toBe(1000000);
});

test('s to ms', () => {
  expect(convert(1).from('s').to('ms')).toBe(1000);
});

test('s to m', () => {
  expect(convert(60).from('s').to('min')).toBe(1);
});

test('s to s', () => {
  expect(convert(1).from('s').to('s')).toBe(1);
});

test('s to h', () => {
  expect(convert(3600).from('s').to('h')).toBe(1);
});

test('s to d', () => {
  expect(convert(86400).from('s').to('d')).toBe(1);
});

test('d to week', () => {
  expect(convert(7).from('d').to('week')).toBe(1);
});

test('d to month', () => {
  expect(convert(30.4375).from('d').to('month')).toBe(1);
});

test('d to year', () => {
  expect(convert(365.25).from('d').to('year')).toBe(1);
});

test('week to month', () => {
  expect(convert(4.34821).from('week').to('month')).toBeCloseTo(1);
});

test('week to year', () => {
  expect(convert(52.17857).from('week').to('year')).toBeCloseTo(1);
});

test('month to year', () => {
  expect(convert(12).from('month').to('year')).toBe(1);
});
