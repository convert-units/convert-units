import configureMeasurements from '../..';
import massConcentration, {
  MassConcentrationSystems,
  MassConcentrationUnits,
} from '../massConcentration';

test('mg/L to mg/L', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1).from('mg/L').to('mg/L')).toBe(1);
});

test('g/L to mg/L', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1).from('g/L').to('mg/L')).toBe(1000);
});

test('mg/L to g/L', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1000).from('mg/L').to('g/L')).toBe(1);
});

test('µg/L to mg/L', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1).from('µg/L').to('mg/L')).toBe(0.001);
});

test('mg/L to µg/L', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1).from('mg/L').to('µg/L')).toBe(1000);
});

test('kg/m3 to mg/L', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1).from('kg/m3').to('mg/L')).toBe(1000);
});

test('mg/L to kg/m3', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1000).from('mg/L').to('kg/m3')).toBe(1);
});

test('g/mL to mg/L', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1).from('g/mL').to('mg/L')).toBe(1000000);
});

test('mg/L to g/mL', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1000000).from('mg/L').to('g/mL')).toBe(1);
});

test('mg/mL to mg/L', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1).from('mg/mL').to('mg/L')).toBe(1000);
});

test('mg/L to mg/mL', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1000).from('mg/L').to('mg/mL')).toBe(1);
});

test('g/L to µg/L', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1).from('g/L').to('µg/L')).toBe(1000000);
});

test('kg/m3 to g/L', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1).from('kg/m3').to('g/L')).toBe(1);
});

test('g/mL to kg/m3', () => {
  const convert = configureMeasurements<
    'massConcentration',
    MassConcentrationSystems,
    MassConcentrationUnits
  >({
    massConcentration,
  });
  expect(convert(1).from('g/mL').to('kg/m3')).toBe(1000);
});
