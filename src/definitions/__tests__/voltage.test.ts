import convert from '../..';

test('V to V', () => {
  expect(convert(1).from('V').to('V')).toBe(1);
});

test('mV to mV', () => {
  expect(convert(1).from('mV').to('mV')).toBe(1);
});

test('kV to kV', () => {
  expect(convert(1).from('kV').to('kV')).toBe(1);
});

test('V to mV', () => {
  expect(convert(1).from('V').to('mV')).toBe(1000);
});

test('V to kV', () => {
  expect(convert(1).from('V').to('kV')).toBe(0.001);
});

test('kV to mV', () => {
  expect(convert(1).from('kV').to('mV')).toBe(1000000);
});

test('mV to kV', () => {
  expect(convert(1).from('mV').to('kV')).toBe(0.000001);
});

test('mV to V', () => {
  expect(convert(1).from('mV').to('V')).toBe(0.001);
});

test('kV to V', () => {
  expect(convert(1).from('kV').to('V')).toBe(1000);
});
