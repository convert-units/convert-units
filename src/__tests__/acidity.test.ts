import configureMeasurements from '..';
import acidity, { AciditySystems, AcidityUnits } from '../definitions/acidity';

test('pH to pOH conversion', () => {
  const convert = configureMeasurements<
    'acidity',
    AciditySystems,
    AcidityUnits
  >({
    acidity,
  });

  // Test pH + pOH = 14 rule
  expect(convert(7).from('pH').to('pOH')).toBe(7);
  expect(convert(0).from('pH').to('pOH')).toBe(14);
  expect(convert(14).from('pH').to('pOH')).toBe(0);
  expect(convert(3).from('pH').to('pOH')).toBe(11);
  expect(convert(11).from('pH').to('pOH')).toBe(3);
});

test('pOH to pH conversion', () => {
  const convert = configureMeasurements<
    'acidity',
    AciditySystems,
    AcidityUnits
  >({
    acidity,
  });

  // Test pOH + pH = 14 rule
  expect(convert(7).from('pOH').to('pH')).toBe(7);
  expect(convert(0).from('pOH').to('pH')).toBe(14);
  expect(convert(14).from('pOH').to('pH')).toBe(0);
  expect(convert(3).from('pOH').to('pH')).toBe(11);
  expect(convert(11).from('pOH').to('pH')).toBe(3);
});

test('pH to pH conversion (no change)', () => {
  const convert = configureMeasurements<
    'acidity',
    AciditySystems,
    AcidityUnits
  >({
    acidity,
  });

  expect(convert(7).from('pH').to('pH')).toBe(7);
  expect(convert(0).from('pH').to('pH')).toBe(0);
  expect(convert(14).from('pH').to('pH')).toBe(14);
});

test('pOH to pOH conversion (no change)', () => {
  const convert = configureMeasurements<
    'acidity',
    AciditySystems,
    AcidityUnits
  >({
    acidity,
  });

  expect(convert(7).from('pOH').to('pOH')).toBe(7);
  expect(convert(0).from('pOH').to('pOH')).toBe(0);
  expect(convert(14).from('pOH').to('pOH')).toBe(14);
});

test('acidity possibilities', () => {
  const convert = configureMeasurements<
    'acidity',
    AciditySystems,
    AcidityUnits
  >({
    acidity,
  });

  const actual = convert().possibilities('acidity');
  const expected = ['pH', 'pOH'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pH possibilities', () => {
  const convert = configureMeasurements<
    'acidity',
    AciditySystems,
    AcidityUnits
  >({
    acidity,
  });

  const actual = convert().from('pH').possibilities();
  const expected = ['pH', 'pOH'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pOH possibilities', () => {
  const convert = configureMeasurements<
    'acidity',
    AciditySystems,
    AcidityUnits
  >({
    acidity,
  });

  const actual = convert().from('pOH').possibilities();
  const expected = ['pH', 'pOH'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('acidity describe', () => {
  const convert = configureMeasurements<
    'acidity',
    AciditySystems,
    AcidityUnits
  >({
    acidity,
  });

  const pHDescription = convert().describe('pH');
  expect(pHDescription).toEqual({
    abbr: 'pH',
    measure: 'acidity',
    system: 'pH',
    singular: 'pH',
    plural: 'pH',
  });

  const pOHDescription = convert().describe('pOH');
  expect(pOHDescription).toEqual({
    abbr: 'pOH',
    measure: 'acidity',
    system: 'pOH',
    singular: 'pOH',
    plural: 'pOH',
  });
});

test('acidity list', () => {
  const convert = configureMeasurements<
    'acidity',
    AciditySystems,
    AcidityUnits
  >({
    acidity,
  });

  const actual = convert().list('acidity');
  const expected = [
    {
      abbr: 'pH',
      measure: 'acidity',
      system: 'pH',
      singular: 'pH',
      plural: 'pH',
    },
    {
      abbr: 'pOH',
      measure: 'acidity',
      system: 'pOH',
      singular: 'pOH',
      plural: 'pOH',
    },
  ];
  expect(actual.sort((a, b) => a.abbr.localeCompare(b.abbr))).toEqual(
    expected.sort((a, b) => a.abbr.localeCompare(b.abbr))
  );
});
