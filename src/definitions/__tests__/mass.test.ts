import convert from '../..';

test('lb to lb', () => {
  expect(convert(1).from('lb').to('lb')).toBe(1);
});

test('lb to oz', () => {
  expect(convert(1).from('lb').to('oz')).toBe(16);
});

test('oz to lb', () => {
  expect(convert(1).from('oz').to('lb')).toBe(1 / 16);
});

test('oz to oz', () => {
  expect(convert(6).from('oz').to('oz')).toBe(6);
});

test('kg to kg', () => {
  expect(convert(1).from('kg').to('kg')).toBe(1);
});

test('kg to g', () => {
  expect(convert(1).from('kg').to('g')).toBe(1000);
});

test('g to kg', () => {
  expect(convert(1).from('g').to('kg')).toBe(1 / 1000);
});

test('g to g', () => {
  expect(convert(100).from('g').to('g')).toBe(100);
});

test('lb to kg', () => {
  expect(convert(1).from('lb').to('kg')).toBeCloseTo(0.453592);
});

test('g to lb', () => {
  expect(convert(1).from('g').to('lb')).toBeCloseTo(0.00220462);
});

test('lb to g', () => {
  expect(convert(3).from('lb').to('g')).toBeCloseTo(1360.78);
});
