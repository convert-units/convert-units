import configureMeasurements from '..';
import length from '../definitions/length';
import mass from '../definitions/mass';
import volume from '../definitions/volume';

test('l to kg throws', () => {
  const convert = configureMeasurements({
    volume,
    mass,
  });
  expect(() => {
    convert(2).from('ltr').to('kg');
  }).toThrow();
});

test('fl-oz to oz throws', () => {
  const convert = configureMeasurements({
    volume,
    mass,
  });
  expect(() => {
    convert(4).from('fl-oz').to('oz');
  }).toThrow();
});

test('kg to fl-oz throws', () => {
  const convert = configureMeasurements({
    volume,
    mass,
  });
  expect(() => {
    convert(4).from('kg').to('fl-oz');
  }).toThrow();
});

test('kg to ft throws', () => {
  const convert = configureMeasurements({
    length,
    mass,
  });
  expect(() => {
    convert(4).from('kg').to('ft');
  }).toThrow();
});

test('kg to nonexistant unit throws', () => {
  const convert = configureMeasurements({
    mass,
  });
  expect(() => {
    convert(4).from('kg').to('garbage');
  }).toThrow();
});

test('nonexistant unit to kg throws', () => {
  const convert = configureMeasurements({
    mass,
  });
  expect(() => {
    convert(4).from('garbage').to('kg');
  }).toThrow();
});

test('.to before .from throws', () => {
  const convert = configureMeasurements({
    mass,
  });
  expect(() => {
    convert(4).to('kg');
  }).toThrow();
});

test('.toBest before .from throws', () => {
  const convert = configureMeasurements({});
  expect(() => {
    convert(4).toBest();
  }).toThrow();
});

test('.describe throws is unit abbr is not found', () => {
  const convert = configureMeasurements({});
  expect(() => {
    convert().describe('no-a-unit');
  }).toThrow();
});
