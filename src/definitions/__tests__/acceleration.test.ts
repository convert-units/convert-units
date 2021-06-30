import configureMeasurements from '../..';
import acceleration, {
  AccelerationSystems,
  AccelerationUnits,
} from '../acceleration';

test('g to m/s2', () => {
  const convert = configureMeasurements<
    'acceleration',
    AccelerationSystems,
    AccelerationUnits
  >({
    acceleration,
  });
  expect(convert(1).from('g-force').to('m/s2')).toBe(9.80665);
});

test('m/s2 to g', () => {
  const convert = configureMeasurements<
    'acceleration',
    AccelerationSystems,
    AccelerationUnits
  >({
    acceleration,
  });
  expect(convert(9.80665).from('m/s2').to('g-force')).toBe(1);
});
