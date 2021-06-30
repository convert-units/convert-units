import configureMeasurements from '../..';
import reactiveEnergy, {
  ReactiveEnergySystems,
  ReactiveEnergyUnits,
} from '../reactiveEnergy';

test('VARh to VARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('VARh').to('VARh')).toBe(1);
});

test('mVARh to mVARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('mVARh').to('mVARh')).toBe(1);
});

test('kVARh to kVARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('kVARh').to('kVARh')).toBe(1);
});

test('MVARh to MVARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('MVARh').to('MVARh')).toBe(1);
});

test('GVARh to GVARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('GVARh').to('GVARh')).toBe(1);
});

test('VARh to mVARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('VARh').to('mVARh')).toBe(1000);
});

test('VARh to kVARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('VARh').to('kVARh')).toBe(0.001);
});

test('VARh to MVARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('VARh').to('MVARh')).toBe(0.000001);
});

test('VARh to GVARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('VARh').to('GVARh')).toBe(0.000000001);
});

test('GVARh to mVARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('GVARh').to('mVARh')).toBe(1000000000000);
});

test('MVARh to mVARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('MVARh').to('mVARh')).toBe(1000000000);
});

test('kVARh to mVARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('kVARh').to('mVARh')).toBe(1000000);
});

test('mVARh to kVARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('mVARh').to('kVARh')).toBe(0.000001);
});

test('mVARh to VARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('mVARh').to('VARh')).toBe(0.001);
});

test('kVARh to VARh', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  expect(convert(1).from('kVARh').to('VARh')).toBe(1000);
});
