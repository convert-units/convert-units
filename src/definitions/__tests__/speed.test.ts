import convert from '../..';

test('m/s to m/s', () => {
  expect(convert(1).from('m/s').to('m/s')).toBe(1);
});

test('m/s to km/h', () => {
  expect(convert(1).from('m/s').to('km/h')).toBe(3.6);
});

test('mph to mph', () => {
  expect(convert(6).from('mph').to('mph')).toBe(6);
});

test('mph to knot', () => {
  expect(convert(2).from('mph').to('knot')).toBeCloseTo(1.73795);
});

test('mph to ft/s', () => {
  expect(convert(3).from('mph').to('ft/s')).toBeCloseTo(4.4);
});

test('m/s to knot', () => {
  expect(convert(8).from('m/s').to('knot')).toBeCloseTo(15.5508);
});

test('mph to km/h', () => {
  expect(convert(12).from('mph').to('km/h')).toBeCloseTo(19.3121);
});
