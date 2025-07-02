import configureMeasurements from '../..';
import speed, { SpeedSystems, SpeedUnits } from '../speed';

test('m/s to m/s', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(1).from('m/s').to('m/s')).toBe(1);
});

test('m/s to km/h', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(1).from('m/s').to('km/h')).toBe(3.6);
});

test('mph to mph', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(6).from('mph').to('mph')).toBe(6);
});

test('mph to knot', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(2).from('mph').to('knot')).toBeCloseTo(1.73795);
});

test('mph to ft/s', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(3).from('mph').to('ft/s')).toBeCloseTo(4.4);
});

test('m/s to knot', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(8).from('m/s').to('knot')).toBeCloseTo(15.5508);
});

test('mph to km/h', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(12).from('mph').to('km/h')).toBeCloseTo(19.3121);
});

test('ft/s to ft/min', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(1).from('ft/s').to('ft/min')).toBeCloseTo(60);
});

test('m/s to ft/min', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(1).from('m/s').to('ft/min')).toBeCloseTo(196.85);
});

test('in/s to mm/s', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(1).from('in/h').to('mm/h')).toBeCloseTo(25.4);
});

test('mi/h to mi/h', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(5).from('mi/h').to('mi/h')).toBe(5);
});

test('mi/h to mph', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(10).from('mi/h').to('mph')).toBe(10);
});

test('mph to mi/h', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(15).from('mph').to('mi/h')).toBe(15);
});

test('mi/h to km/h', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(20).from('mi/h').to('km/h')).toBeCloseTo(32.1869);
});

test('mi/h to knot', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(10).from('mi/h').to('knot')).toBeCloseTo(8.68976);
});

test('mi/h to ft/s', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(30).from('mi/h').to('ft/s')).toBeCloseTo(44);
});

test('m/s to mi/h', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  expect(convert(10).from('m/s').to('mi/h')).toBeCloseTo(22.369);
});
