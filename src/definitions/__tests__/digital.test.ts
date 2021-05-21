import convert from '../..';

test('b to b', () => {
  expect(convert(1).from('b').to('b')).toBe(1);
});

test('Kb to b', () => {
  expect(convert(1).from('Kb').to('b')).toBe(1024);
});

test('Mb to b', () => {
  expect(convert(1).from('Mb').to('b')).toBe(1048576);
});

test('Gb to b', () => {
  expect(convert(1).from('Gb').to('b')).toBe(1073741824);
});

test('Tb to b', () => {
  expect(convert(1).from('Tb').to('b')).toBe(1099511627776);
});

test('B to B', () => {
  expect(convert(1).from('B').to('B')).toBe(1);
});

test('KB to B', () => {
  expect(convert(1).from('KB').to('B')).toBe(1024);
});

test('MB to B', () => {
  expect(convert(1).from('MB').to('B')).toBe(1048576);
});

test('GB to B', () => {
  expect(convert(1).from('GB').to('B')).toBe(1073741824);
});

test('TB to B', () => {
  expect(convert(1).from('TB').to('B')).toBe(1099511627776);
});

test('B to b', () => {
  expect(convert(1).from('B').to('b')).toBe(8);
});

test('b to B', () => {
  expect(convert(1).from('b').to('B')).toBeCloseTo(0.125);
});
