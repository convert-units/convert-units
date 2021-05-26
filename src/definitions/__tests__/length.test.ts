import convert from '../..';

test('ft to ft', () => {
  expect(convert(1).from('ft').to('ft')).toBe(1);
});

test('ft to ft-us', () => {
  expect(convert(1).from('ft').to('ft-us')).toBe(0.999998000004);
});

test('ft-us to ft', () => {
  expect(convert(1).from('ft-us').to('ft')).toBe(1.000002);
});

test('in to in', () => {
  expect(convert(7).from('in').to('in')).toBe(7);
});

test('ft to in', () => {
  expect(convert(1).from('ft').to('in')).toBe(12);
});

test('in to ft', () => {
  expect(convert(1).from('in').to('ft')).toBe(1 / 12);
});

test('ft to mi', () => {
  expect(convert(1).from('ft').to('mi')).toBe(1 / 5280);
});

test('mi to ft', () => {
  expect(convert(1).from('mi').to('ft')).toBe(5280);
});

test('nMi to mi', () => {
  expect(convert(1).from('nMi').to('mi')).toBe(1.150780303030303);
});

test('m to m', () => {
  expect(convert(1).from('m').to('m')).toBe(1);
});

test('m to cm', () => {
  expect(convert(1).from('m').to('cm')).toBe(1e2);
});

test('cm to m', () => {
  expect(convert(1).from('cm').to('m')).toBe(1e-2);
});

test('m to mm', () => {
  expect(convert(1).from('m').to('mm')).toBe(1e3);
});

test('km to m', () => {
  expect(convert(1).from('km').to('m')).toBe(1e3);
});

test('m to ft', () => {
  expect(convert(1).from('m').to('ft')).toBeCloseTo(3.28084);
});

test('m to ft-us', () => {
  expect(convert(1).from('m').to('ft-us')).toBeCloseTo(3.28084);
});

test('mm to ft', () => {
  expect(convert(1).from('mm').to('ft')).toBeCloseTo(0.00328084);
});

test('nMi to m', () => {
  expect(convert(1).from('nMi').to('m')).toBeCloseTo(1852);
});

test('km to nMi', () => {
  expect(convert(1).from('km').to('nMi')).toBeCloseTo(0.539956803);
});

test('fathom to m', () => {
  expect(convert(1).from('fathom').to('m')).toBeCloseTo(1.8288);
});

test('nm to nm', () => {
  expect(convert(1).from('nm').to('nm')).toBe(1);
});

test('nm to m', () => {
  expect(convert(1).from('nm').to('m')).toBe(1e-9);
});

test('μm to μm', () => {
  expect(convert(1).from('μm').to('μm')).toBe(1);
});

test('μm to m', () => {
  expect(convert(1).from('μm').to('m')).toBe(1e-6);
});
