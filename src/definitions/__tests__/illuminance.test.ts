import convert from '../..';

test('ft-cd to lx', () => {
  expect(convert(1).from('ft-cd').to('lx')).toBe(10.76391);
});

test('lx to ft-cd', () => {
  expect(convert(1).from('lx').to('ft-cd')).toBe(0.09290304359661128);
});
