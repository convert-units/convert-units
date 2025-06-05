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
  expect(convert(1).from('Nm').to('kgm')).toBe(0.1019716213);
});

test('Nm to kg-cm', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('kg-cm')).toBe(10.19716213);
});

test('Nm to lbf.ft', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('lbf-ft')).toBe(1 / 1.355818);
});

test('Nm to lbf.in', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('lbf-in')).toBeCloseTo(
    12 * (1 / 1.355818),
    0.0001
  );
});

test('Nm to ozf.in', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('ozf-in')).toBeCloseTo(
    192.00000227 * (1 / 1.355818),
    0.0001
  );
});
