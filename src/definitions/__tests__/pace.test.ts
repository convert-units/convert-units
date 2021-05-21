import convert from '../..';

test('s/m to s/m', () => {
  expect(convert(1).from('s/m').to('s/m')).toBe(1);
});

test('s/ft to s/ft', () => {
  expect(convert(1).from('s/ft').to('s/ft')).toBe(1);
});

test('min/mi to s/ft', () => {
  expect(convert(1).from('min/mi').to('s/ft')).toBe(0.0113636);
});

test('s/m to min/km', () => {
  expect(convert(1).from('s/m').to('min/km')).toBeCloseTo(16.6667);
});

test('min/mi to min/km', () => {
  expect(convert(1).from('min/mi').to('min/km')).toBeCloseTo(0.621371);
});

test('min/km to min/mi', () => {
  expect(convert(1).from('min/km').to('min/mi')).toBeCloseTo(1.60934);
});
