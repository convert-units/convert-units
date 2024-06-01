import configureMeasurements from '../..';
import mass, { MassSystems, MassUnits } from '../mass';

test('lb to lb', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(1).from('lb').to('lb')).toBe(1);
});

test('lb to oz', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(1).from('lb').to('oz')).toBe(16);
});

test('oz to lb', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(1).from('oz').to('lb')).toBe(1 / 16);
});

test('oz to oz', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(6).from('oz').to('oz')).toBe(6);
});

test('kg to kg', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(1).from('kg').to('kg')).toBe(1);
});

test('kg to g', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(1).from('kg').to('g')).toBe(1000);
});

test('g to kg', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(1).from('g').to('kg')).toBe(1 / 1000);
});

test('g to g', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(100).from('g').to('g')).toBe(100);
});

test('lb to kg', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(1).from('lb').to('kg')).toBeCloseTo(0.453592);
});

test('g to lb', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(1).from('g').to('lb')).toBeCloseTo(0.00220462);
});

test('lb to g', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(3).from('lb').to('g')).toBeCloseTo(1360.78);
});

test('st to st', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(100).from('st').to('st')).toBe(100);
});

test('st to kg', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(1).from('st').to('kg')).toBeCloseTo(6.35029);
});

test('g to st', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(1).from('g').to('st')).toBeCloseTo(0.000157473);
});

test('st to g', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(3).from('st').to('g')).toBeCloseTo(19050.87954);
});

test('kg to lb', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  expect(convert(4677.6713).from('kg').to('lb')).toBeCloseTo(10312.49996555277);
});
