import convert from '../..';

test('W to W', () => {
  expect(convert(1).from('W').to('W')).toBe(1);
});

test('mW to mW', () => {
  expect(convert(1).from('mW').to('mW')).toBe(1);
});

test('kW to kW', () => {
  expect(convert(1).from('kW').to('kW')).toBe(1);
});

test('MW to MW', () => {
  expect(convert(1).from('MW').to('MW')).toBe(1);
});

test('GW to GW', () => {
  expect(convert(1).from('GW').to('GW')).toBe(1);
});

test('BTU/s to BTU/s', () => {
  expect(convert(1).from('BTU/s').to('BTU/s')).toBe(1);
});

test('ft-lb/s to ft-lb/s', () => {
  expect(convert(1).from('ft-lb/s').to('ft-lb/s')).toBe(1);
});

test('hp to hp', () => {
  expect(convert(1).from('hp').to('hp')).toBe(1);
});

test('W to mW', () => {
  expect(convert(1).from('W').to('mW')).toBe(1000);
});

test('W to kW', () => {
  expect(convert(1).from('W').to('kW')).toBe(0.001);
});

test('W to MW', () => {
  expect(convert(1).from('W').to('MW')).toBe(0.000001);
});

test('W to GW', () => {
  expect(convert(1).from('W').to('GW')).toBe(0.000000001);
});

test('GW to mW', () => {
  expect(convert(1).from('GW').to('mW')).toBe(1000000000000);
});

test('MW to mW', () => {
  expect(convert(1).from('MW').to('mW')).toBe(1000000000);
});

test('kW to mW', () => {
  expect(convert(1).from('kW').to('mW')).toBe(1000000);
});

test('mW to kW', () => {
  expect(convert(1).from('mW').to('kW')).toBe(0.000001);
});

test('mW to W', () => {
  expect(convert(1).from('mW').to('W')).toBe(0.001);
});

test('kW to W', () => {
  expect(convert(1).from('kW').to('W')).toBe(1000);
});

test('BTU/s to W', () => {
  expect(convert(1).from('BTU/s').to('W')).toBe(1055.05585);
});

test('ft-lb/s to W', () => {
  expect(convert(1).from('ft-lb/s').to('W')).toBe(1.3558);
});

test('hp to W', () => {
  expect(convert(1).from('hp').to('W')).toBe(745.7);
});
