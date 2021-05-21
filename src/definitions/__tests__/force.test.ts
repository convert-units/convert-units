import convert from '../..';

test('N to kN', () => {
  expect(convert(1).from('N').to('kN')).toBe(1 / 1000);
});

test('kN to N', () => {
  expect(convert(1).from('kN').to('N')).toBe(1000);
});

test('N to lbf', () => {
  expect(convert(1).from('N').to('lbf')).toBeCloseTo(0.2224809);
});

test('lbf to N', () => {
  expect(convert(1).from('lbf').to('N')).toBe(4.44822);
});
