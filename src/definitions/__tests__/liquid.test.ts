import configureMeasurements from '../..';
import liquid, { LiquidSystems, LiquidUnits } from '../liquid';

test('g/mL to g/mL', () => {
  const convert = configureMeasurements<'liquid', LiquidSystems, LiquidUnits>({
    liquid,
  });
  expect(convert(120).from('g/mL').to('g/mL')).toBe(120);
});
test('mg/dL to µmol/L', () => {
  const convert = configureMeasurements<'liquid', LiquidSystems, LiquidUnits>({
    liquid,
  });
  expect(Math.round(convert(1.36).from('mg/dL').to('µmol/L'))).toBe(120);
});

test('µmol/L to mg/dL', () => {
  const convert = configureMeasurements<'liquid', LiquidSystems, LiquidUnits>({
    liquid,
  });
  expect(Math.round(convert(120).from('µmol/L').to('mg/dL') * 100) / 100).toBe(
    1.36
  );
});
