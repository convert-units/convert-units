import configureMeasurements from '../..';
import power, { PowerSystems, PowerUnits } from '../power';

test('W to W', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('W').to('W')).toBe(1);
});

test('mW to mW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('mW').to('mW')).toBe(1);
});

test('kW to kW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('kW').to('kW')).toBe(1);
});

test('MW to MW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('MW').to('MW')).toBe(1);
});

test('GW to GW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('GW').to('GW')).toBe(1);
});

test('PS to PS', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('PS').to('PS')).toBe(1);
});

test('Btu/s to Btu/s', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('Btu/s').to('Btu/s')).toBe(1);
});

test('ft-lb/s to ft-lb/s', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('ft-lb/s').to('ft-lb/s')).toBe(1);
});

test('hp to hp', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('hp').to('hp')).toBe(1);
});

test('W to mW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('W').to('mW')).toBe(1000);
});

test('W to kW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('W').to('kW')).toBe(0.001);
});

test('W to MW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('W').to('MW')).toBe(0.000001);
});

test('W to GW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('W').to('GW')).toBe(0.000000001);
});

test('GW to mW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('GW').to('mW')).toBe(1000000000000);
});

test('MW to mW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('MW').to('mW')).toBe(1000000000);
});

test('kW to mW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('kW').to('mW')).toBe(1000000);
});

test('mW to kW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('mW').to('kW')).toBe(0.000001);
});

test('mW to W', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('mW').to('W')).toBe(0.001);
});

test('kW to W', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('kW').to('W')).toBe(1000);
});

test('PS to W', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('PS').to('W')).toBe(735.49875);
});

test('hp to ft-lb/s', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('hp').to('ft-lb/s')).toBe(550);
});

test('Btu/s to ft-lb/s', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('Btu/s').to('ft-lb/s')).toBe(778.16937);
});
