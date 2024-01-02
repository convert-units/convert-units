import configureMeasurements from '../..';
import torque, { TorqueSystems, TorqueUnits } from '../torque';

test('Nm to Nm', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('Nm')).toBe(1);
});

test('Nm to lbf.ft', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  expect(convert(1).from('Nm').to('lbf-ft')).toBe(1 / 1.355818);
});
