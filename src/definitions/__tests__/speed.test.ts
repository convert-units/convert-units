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

test('exact imperial speed identities', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  // 1 mi = 5280 ft = 63360 in, 1 in = 25.4 mm, 1 knot = 1852 m/h
  expect(convert(88).from('ft/s').to('mph')).toBeCloseTo(60, 10);
  expect(convert(1).from('mph').to('ft/min')).toBeCloseTo(88, 10);
  expect(convert(1).from('mph').to('in/h')).toBeCloseTo(63360, 8);
  expect(convert(1).from('in/h').to('mm/h')).toBeCloseTo(25.4, 10);
  expect(convert(1).from('knot').to('km/h')).toBeCloseTo(1.852, 12);
});
