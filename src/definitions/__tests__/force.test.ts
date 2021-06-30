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
  expect(convert(1).from('lbf').to('N')).toBe(4.44822);
});
