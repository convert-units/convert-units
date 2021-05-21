import convert from '../..';

test('ft2 to ft2', () => {
  expect(convert(1).from('ft2').to('ft2')).toBe(1);
});

test('ft2 to in2', () => {
  expect(convert(1).from('ft2').to('in2')).toBe(144);
});

test('in2 to ft2', () => {
  expect(convert(1).from('in2').to('ft2')).toBe(1 / 144);
});

test('ft2 to ac', () => {
  expect(convert(1).from('ft2').to('ac')).toBe(1 / 43560);
});

test('ac to ft2', () => {
  expect(convert(1).from('ac').to('ft2')).toBe(43560);
});

test('ft2 to mi2', () => {
  expect(convert(1).from('ft2').to('mi2')).toBe(1 / 27878400);
});

test('mi2 to ft2', () => {
  expect(convert(1).from('mi2').to('ft2')).toBe(27878400);
});

test('m2 to m2', () => {
  expect(convert(1).from('m2').to('m2')).toBe(1);
});

test('m2 to cm2', () => {
  expect(convert(1).from('m2').to('cm2')).toBe(10000);
});

test('cm2 to m2', () => {
  expect(convert(1).from('cm2').to('m2')).toBe(1 / 10000);
});

test('m2 to mm2', () => {
  expect(convert(1).from('m2').to('mm2')).toBe(1000000);
});

test('ha to m2', () => {
  expect(convert(1).from('ha').to('m2')).toBe(10000);
});

test('km2 to m2', () => {
  expect(convert(1).from('km2').to('m2')).toBe(1000000);
});

test('m2 to ft2', () => {
  expect(convert(1).from('m2').to('ft2')).toBeCloseTo(10.7639);
});

test('mm2 to ft2', () => {
  expect(convert(1).from('mm2').to('ft2')).toBeCloseTo(1.07639e-5);
});
