import configureMeasurements from '../..';
import charge, { ChargeSystems, ChargeUnits } from '../charge';

test('Co to Co', () => {
  const convert = configureMeasurements<'charge', ChargeSystems, ChargeUnits>({
    charge,
  });
  expect(convert(1).from('c').to('c')).toBe(1);
});

test('Co to mC', () => {
  const convert = configureMeasurements<'charge', ChargeSystems, ChargeUnits>({
    charge,
  });
  expect(convert(1).from('c').to('mC')).toBe(1000);
});

test('mC to Co', () => {
  const convert = configureMeasurements<'charge', ChargeSystems, ChargeUnits>({
    charge,
  });
  expect(convert(1).from('mC').to('c')).toBe(1 / 1000);
});

test('Co to μC', () => {
  const convert = configureMeasurements<'charge', ChargeSystems, ChargeUnits>({
    charge,
  });
  expect(convert(1).from('c').to('μC')).toBe(1000000);
});

test('μC to Co', () => {
  const convert = configureMeasurements<'charge', ChargeSystems, ChargeUnits>({
    charge,
  });
  expect(convert(1).from('μC').to('c')).toBe(1 / 1000000);
});

test('c to nC', () => {
  const convert = configureMeasurements<'charge', ChargeSystems, ChargeUnits>({
    charge,
  });
  expect(convert(1).from('c').to('nC')).toBeCloseTo(1e9);
});

test('nC to Co', () => {
  const convert = configureMeasurements<'charge', ChargeSystems, ChargeUnits>({
    charge,
  });
  expect(convert(1).from('nC').to('c')).toBe(1e-9);
});

test('Co to pC', () => {
  const convert = configureMeasurements<'charge', ChargeSystems, ChargeUnits>({
    charge,
  });
  expect(convert(1).from('c').to('pC')).toBe(1e12);
});

test('pC to Co', () => {
  const convert = configureMeasurements<'charge', ChargeSystems, ChargeUnits>({
    charge,
  });
  expect(convert(1).from('pC').to('c')).toBe(1e-12);
});
