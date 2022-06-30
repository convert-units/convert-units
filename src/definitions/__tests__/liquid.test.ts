import configureMeasurements from '../..';
import liquid, { LiquidSystems, LiquidUnits } from '../liquid';

test('g/mL to g/mL', () => {
  const convert = configureMeasurements<'liquid', LiquidSystems, LiquidUnits>({
    liquid,
  });
  expect(convert(120).from('g/mL').to('g/mL')).toBe(120);
});
