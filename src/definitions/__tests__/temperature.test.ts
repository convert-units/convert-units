import convert from '../..';

test('C to K', () => {
  expect(convert(0).from('C').to('K')).toBe(273.15);
});

test('K to C', () => {
  expect(convert(273.15).from('K').to('C')).toBe(0);
});

test('F to C', () => {
  expect(convert(32).from('F').to('C')).toBe(0);
});

test('C to F', () => {
  expect(convert(0).from('C').to('F')).toBe(32);
});

test('F to K', () => {
  expect(convert(32).from('F').to('K')).toBe(273.15);
});

test('F to R', () => {
  expect(convert(100).from('F').to('R')).toBe(559.6700000000001);
});

test('R to F', () => {
  expect(convert(670).from('R').to('F')).toBe(210.32999999999998);
});

test('R to C', () => {
  expect(convert(612).from('R').to('C')).toBe(66.85);
});

test('R to K', () => {
  expect(convert(459.67).from('R').to('K')).toBe(255.3722222222222);
});
