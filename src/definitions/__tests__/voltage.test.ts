import configureMeasurements from '../..';
import voltage, { VoltageSystems, VoltageUnits } from '../voltage';

test('V to V', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('V').to('V')).toBe(1);
});

test('V to μV', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('V').to('μV')).toBe(1000000);
});

test('mV to mV', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('mV').to('mV')).toBe(1);
});

test('kV to kV', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('kV').to('kV')).toBe(1);
});

test('V to mV', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('V').to('mV')).toBe(1000);
});

test('V to kV', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('V').to('kV')).toBe(0.001);
});

test('V to MV', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('V').to('MV')).toBe(0.000001);
});

test('kV to mV', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('kV').to('mV')).toBe(1000000);
});

test('mV to kV', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('mV').to('kV')).toBe(0.000001);
});

test('μV to V', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('μV').to('V')).toBe(0.000001);
});

test('mV to V', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('mV').to('V')).toBe(0.001);
});

test('kV to V', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('kV').to('V')).toBe(1000);
});

test('MV to V', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  expect(convert(1).from('MV').to('V')).toBe(1000000);
});
