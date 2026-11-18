import configureMeasurements from '../..';
import torque, { TorqueSystems, TorqueUnits } from '../torque';

test('Nm to Nm', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('Nm')).toBe(1);
});

test('Nm to cNm', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('cNm')).toBe(100);
});

test('Nm to dNm', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('dNm')).toBe(10);
});

test('Nm to kgm', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('kgm')).toBe(1 / 9.80665);
});

test('Nm to kg-cm', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('kg-cm')).toBeCloseTo(100 / 9.80665, 12);
});

test('Nm to lbf.ft', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('lbf-ft')).toBe(1 / 1.3558179483314003);
});

test('Nm to lbf.in', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('lbf-in')).toBeCloseTo(
    12 / 1.3558179483314003,
    12
  );
});

test('Nm to ozf.in', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('ozf-in')).toBeCloseTo(
    192 / 1.3558179483314003,
    12
  );
});

test('kgm to Nm', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('kgm').to('Nm')).toBe(9.80665);
});

test('lbf.ft to ozf.in', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  // 1 lbf = 16 ozf and 1 ft = 12 in
  expect(convert(1).from('lbf-ft').to('ozf-in')).toBe(192);
});

test('lbf.ft to Nm', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  // 4.4482216152605 N × 0.3048 m
  expect(convert(1).from('lbf-ft').to('Nm')).toBeCloseTo(
    1.3558179483314003,
    12
  );
});
