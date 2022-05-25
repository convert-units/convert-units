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
