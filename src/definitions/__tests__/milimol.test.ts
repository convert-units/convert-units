import configureMeasurements from '../..';
import milimol, { MilimolSystems, MilimolUnits } from '../milimol';

test('mg/dL to µmol/L', () => {
  const convert = configureMeasurements<
    'milimol',
    MilimolSystems,
    MilimolUnits
  >({
    milimol,
  });
  expect(Math.round(convert(1.36).from('mg/dL').to('µmol/L'))).toBe(120);
});

test('µmol/L to mg/dL', () => {
  const convert = configureMeasurements<
    'milimol',
    MilimolSystems,
    MilimolUnits
  >({
    milimol,
  });
  expect(Math.round(convert(120).from('µmol/L').to('mg/dL') * 100) / 100).toBe(
    1.36
  );
});
