import convert from '../..';

test('ea to ea', () => {
  expect(convert(1).from('ea').to('ea')).toBe(1);
});

test('dz to ea', () => {
  expect(convert(1).from('dz').to('ea')).toBe(12);
});

test('ea to dz', () => {
  expect(convert(12).from('ea').to('dz')).toBe(1);
});
