import configureMeasurements from '../..';
import pressure, { PressureSystems, PressureUnits } from '../pressure';

test('Pa to Pa', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(1).from('Pa').to('Pa')).toBe(1);
});

test('Pa to kPa', () => {
  const convert = configureMeasurements({
    pressure,
  });
  expect(convert(2000).from('Pa').to('kPa')).toBe(2);
});

test('kPa to Pa', () => {
  const convert = configureMeasurements({
    pressure,
  });
  expect(convert(1).from('kPa').to('Pa')).toBe(1000);
});

test('kPa to hPa', () => {
  const convert = configureMeasurements({
    pressure,
  });
  expect(convert(20).from('kPa').to('hPa')).toBe(200);
});

test('kPa to MPa', () => {
  const convert = configureMeasurements({
    pressure,
  });
  expect(convert(8000).from('kPa').to('MPa')).toBe(8);
});

test('kPa to bar', () => {
  const convert = configureMeasurements({
    pressure,
  });
  expect(convert(6000).from('kPa').to('bar')).toBe(60);
});

test('kPa to torr', () => {
  const convert = configureMeasurements({
    pressure,
  });
  expect(convert(532).from('kPa').to('torr')).toBeCloseTo(3990.33);
});

test('psi to psi', () => {
  const convert = configureMeasurements({
    pressure,
  });
  expect(convert(10).from('psi').to('psi')).toBe(10);
});

test('psi to ksi', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(10000).from('psi').to('ksi')).toBe(10);
});

test('Pa to psi', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(10000).from('Pa').to('psi')).toBeCloseTo(1.450377);
});

test('torr to ksi', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(51714.931860168974).from('torr').to('ksi')).toBeCloseTo(1);
});

test('psi to hPa', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(10).from('psi').to('hPa')).toBeCloseTo(689.47573);
});

test('psi to inHg', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(1).from('psi').to('inHg')).toBeCloseTo(2.03602);
});

test('inHg to psi', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(1).from('inHg').to('psi')).toBeCloseTo(0.491154);
});

test('inHg to Pa', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(1).from('inHg').to('Pa')).toBeCloseTo(3386.389);
});

test('Pa to inHg', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(1013.25).from('hPa').to('inHg')).toBeCloseTo(29.92);
});

test('mH2O to kPa', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(1).from('mH2O').to('kPa')).toBe(9.80665);
});

test('kPa to mH2O', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(1).from('kPa').to('mH2O')).toBeCloseTo(0.102, 3);
});

test('mmHg to kPa', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(1).from('mmHg').to('kPa')).toBeCloseTo(0.13332, 5);
});

test('kPa to mmHg', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  expect(convert(1).from('kPa').to('mmHg')).toBeCloseTo(7.5);
});
