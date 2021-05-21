import convert from '..';

test('ltr to kg throws', () => {
  expect(() => {
    convert(2).from('ltr').to('kg');
  }).toThrow();
});

test('fl-oz to oz throws', () => {
  expect(() => {
    convert(4).from('fl-oz').to('oz');
  }).toThrow();
});

test('kg to fl-oz throws', () => {
  expect(() => {
    convert(4).from('kg').to('fl-oz');
  }).toThrow();
});

test('kg to ft throws', () => {
  expect(() => {
    convert(4).from('kg').to('ft');
  }).toThrow();
});

test('kg to nonexistant unit throws', () => {
  expect(() => {
    convert(4).from('kg').to('garbage');
  }).toThrow();
});

test('nonexistant unit to kg throws', () => {
  expect(() => {
    convert(4).from('garbage').to('kg');
  }).toThrow();
});

test('.to before .from throws', () => {
  expect(() => {
    convert(4).to('kg');
  }).toThrow();
});

test('.toBest before .from throws', () => {
  expect(() => {
    convert(4).toBest();
  }).toThrow();
});

test('.describe throws is unit abbr is not found', () => {
  expect(() => {
    convert().describe('no-a-unit');
  }).toThrow();
});
