import configureMeasurements from '../..';
import length, { LengthSystems, LengthUnits } from '../length';

test('ft to ft', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('ft').to('ft')).toBe(1);
});

test('ft to ft-us', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('ft').to('ft-us')).toBe(0.999998000004);
});

test('ft-us to ft', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('ft-us').to('ft')).toBe(1.000002);
});

test('in to in', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(7).from('in').to('in')).toBe(7);
});

test('ft to in', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('ft').to('in')).toBe(12);
});

test('in to ft', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('in').to('ft')).toBe(1 / 12);
});

test('ft to mi', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('ft').to('mi')).toBe(1 / 5280);
});

test('mi to ft', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('mi').to('ft')).toBe(5280);
});

test('nMi to mi', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('nMi').to('mi')).toBe(1.150780303030303);
});

test('m to m', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('m').to('m')).toBe(1);
});

test('m to cm', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('m').to('cm')).toBe(1e2);
});

test('cm to m', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('cm').to('m')).toBe(1e-2);
});

test('m to mm', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('m').to('mm')).toBe(1e3);
});

test('km to m', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('km').to('m')).toBe(1e3);
});

test('m to ft', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('m').to('ft')).toBeCloseTo(3.28084);
});

test('m to ft-us', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('m').to('ft-us')).toBeCloseTo(3.28084);
});

test('mm to ft', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('mm').to('ft')).toBeCloseTo(0.00328084);
});

test('nMi to m', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('nMi').to('m')).toBeCloseTo(1852);
});

test('km to nMi', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('km').to('nMi')).toBeCloseTo(0.539956803);
});

test('fathom to m', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('fathom').to('m')).toBeCloseTo(1.8288);
});

test('nm to nm', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('nm').to('nm')).toBe(1);
});

test('nm to m', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('nm').to('m')).toBe(1e-9);
});

test('μm to μm', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('μm').to('μm')).toBe(1);
});

test('μm to m', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('μm').to('m')).toBe(1e-6);
});

test('m to µm', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('m').to('μm')).toEqual(1e6);
});

test('m to nm', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('m').to('nm')).toBeCloseTo(1e9);
});

test('in to mils', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('in').to('mil')).toBe(1e3);
});

test('mils to in', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('mil').to('in')).toBe(1e-3);
});

test('mils to m', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('mil').to('m')).toBeCloseTo(2.54e-5);
});

test('cm to mils', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('cm').to('mil')).toBeCloseTo(393.701);
});

test('dm to m', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('dm').to('m')).toBe(1e-1);
});

test('m to dm', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  expect(convert(1).from('m').to('dm')).toBe(1e1);
});
