import configureMeasurements from '../..';
import reactivePower, {
  ReactivePowerSystems,
  ReactivePowerUnits,
} from '../reactivePower';

test('VAR to VAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('VAR').to('VAR')).toBe(1);
});

test('mVAR to mVAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('mVAR').to('mVAR')).toBe(1);
});

test('kVAR to kVAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('kVAR').to('kVAR')).toBe(1);
});

test('MVAR to MVAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('MVAR').to('MVAR')).toBe(1);
});

test('GVAR to GVAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('GVAR').to('GVAR')).toBe(1);
});

test('VAR to mVAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('VAR').to('mVAR')).toBe(1000);
});

test('VAR to kVAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('VAR').to('kVAR')).toBe(0.001);
});

test('VAR to MVAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('VAR').to('MVAR')).toBe(0.000001);
});

test('VAR to GVAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('VAR').to('GVAR')).toBe(0.000000001);
});

test('GVAR to mVAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('GVAR').to('mVAR')).toBe(1000000000000);
});

test('MVAR to mVAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('MVAR').to('mVAR')).toBe(1000000000);
});

test('kVAR to mVAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('kVAR').to('mVAR')).toBe(1000000);
});

test('mVAR to kVAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('mVAR').to('kVAR')).toBe(0.000001);
});

test('mVAR to VAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('mVAR').to('VAR')).toBe(0.001);
});

test('kVAR to VAR', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  expect(convert(1).from('kVAR').to('VAR')).toBe(1000);
});
