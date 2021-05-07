const convert = require('../..');

test('m/s to m/s', () => {
  expect(convert(1).from('m/s').to('m/s')).toBe(1);
});

test('m/s to km/h', () => {
  expect(convert(1).from('m/s').to('km/h')).toBe(3.6);
});

test('m/h to m/h', () => {
  expect(convert(6).from('m/h').to('m/h')).toBe(6);
});

test('m/h to knot', () => {
  expect(convert(2).from('m/h').to('knot')).toBeCloseTo(1.73795);
});

test('m/h to ft/s', () => {
  expect(convert(3).from('m/h').to('ft/s')).toBeCloseTo(4.4);
});

test('m/s to knot', () => {
  expect(convert(8).from('m/s').to('knot')).toBeCloseTo(15.5508);
});

test('m/h to km/h', () => {
  expect(convert(12).from('m/h').to('km/h')).toBeCloseTo(19.3121);
});
