import convert from '../..';

test('g to m/s2', () => {
  expect(convert(1).from('g-force').to('m/s2')).toBe(9.80665);
});

test('m/s2 to g', () => {
  expect(convert(9.80665).from('m/s2').to('g-force')).toBe(1);
});
