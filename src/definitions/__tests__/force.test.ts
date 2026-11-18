import configureMeasurements from '../..';
import force, { ForceSystems, ForceUnits } from '../force';

test('N to kN', () => {
  const convert = configureMeasurements<'force', ForceSystems, ForceUnits>({
    force,
  });
  expect(convert(1).from('N').to('kN')).toBe(1 / 1000);
});

test('kN to N', () => {
  const convert = configureMeasurements<'force', ForceSystems, ForceUnits>({
    force,
  });
  expect(convert(1).from('kN').to('N')).toBe(1000);
});

test('N to lbf', () => {
  const convert = configureMeasurements<'force', ForceSystems, ForceUnits>({
    force,
  });
  expect(convert(1).from('N').to('lbf')).toBeCloseTo(0.2224809);
});

test('lbf to N', () => {
  const convert = configureMeasurements<'force', ForceSystems, ForceUnits>({
    force,
  });
  expect(convert(1).from('lbf').to('N')).toBe(4.4482216152605);
});

test('N to kgf', () => {
  const convert = configureMeasurements<'force', ForceSystems, ForceUnits>({
    force,
  });
  expect(convert(1).from('N').to('kgf')).toBeCloseTo(0.102);
});

test('kgf to N', () => {
  const convert = configureMeasurements<'force', ForceSystems, ForceUnits>({
    force,
  });
  expect(convert(1).from('kgf').to('N')).toBe(9.80665);
});

test('kgf to lbf', () => {
  const convert = configureMeasurements<'force', ForceSystems, ForceUnits>({
    force,
  });
  // 1 kgf / 1 lbf = 1 kg / 1 lb = 1 / 0.45359237
  expect(convert(1).from('kgf').to('lbf')).toBeCloseTo(1 / 0.45359237, 12);
});
