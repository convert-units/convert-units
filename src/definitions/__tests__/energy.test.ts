import configureMeasurements from '../..';
import energy, { EnergySystems, EnergyUnits } from '../energy';

test('Ws to Ws', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Ws').to('Ws')).toBe(1);
});

test('Ws to Wm', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Ws').to('Wm')).toBeCloseTo(0.016_667);
});

test('Ws to Wh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Ws').to('Wh')).toBeCloseTo(0.000_277_778);
});

test('Ws to mWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Ws').to('mWh')).toBeCloseTo(0.277_778);
});

test('Ws to kWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Ws').to('kWh')).toBeCloseTo(0.000_277_778);
});

test('Ws to MWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Ws').to('MWh')).toBeCloseTo(0.000_000_277_778);
});

test('Ws to GWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Ws').to('GWh')).toBeCloseTo(0.000_000_000_277_778);
});

test('Ws to J', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Ws').to('J')).toBe(1);
});

test('Ws to kJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Ws').to('kJ')).toBe(0.001);
});

test('Ws to MJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Ws').to('MJ')).toBe(0.000_001);
});

test('Ws to GJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Ws').to('GJ')).toBe(0.000_000_001);
});

test('Wm to Wm', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wm').to('Wm')).toBe(1);
});

test('Wm to Ws', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wm').to('Ws')).toBe(60);
});

test('Wm to Wh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wm').to('Wh')).toBeCloseTo(0.016667);
});

test('Wm to mWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wm').to('mWh')).toBeCloseTo(16.666_67);
});

test('Wm to kWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wm').to('kWh')).toBeCloseTo(0.000_016_667);
});

test('Wm to MWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wm').to('MWh')).toBeCloseTo(0.000_000_016_667);
});

test('Wm to GWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wm').to('GWh')).toBeCloseTo(0.000_000_000_016_667);
});

test('Wm to J', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wm').to('J')).toBe(60);
});

test('Wm to kJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wm').to('kJ')).toBe(0.06);
});

test('Wm to MJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wm').to('MJ')).toBe(0.000_06);
});

test('Wm to GJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wm').to('GJ')).toBe(0.000_000_06);
});

test('Wh to Wh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wh').to('Wh')).toBe(1);
});

test('mWh to mWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('mWh').to('mWh')).toBe(1);
});

test('kWh to kWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('kWh').to('kWh')).toBe(1);
});

test('MWh to MWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('MWh').to('MWh')).toBe(1);
});

test('GWh to GWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('GWh').to('GWh')).toBe(1);
});

test('J to J', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('J').to('J')).toBe(1);
});

test('kJ to kJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('kJ').to('kJ')).toBe(1);
});

test('MJ to MJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('MJ').to('MJ')).toBe(1);
});

test('GJ to GJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('GJ').to('GJ')).toBe(1);
});

test('Wh to J', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wh').to('J')).toBe(3600);
});

test('Wh to mWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wh').to('mWh')).toBe(1000);
});

test('Wh to kWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wh').to('kWh')).toBe(0.001);
});

test('Wh to MWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wh').to('MWh')).toBe(0.000001);
});

test('Wh to GWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Wh').to('GWh')).toBe(0.000000001);
});

test('GWh to mWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('GWh').to('mWh')).toBe(1000000000000);
});

test('GWh to J', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('GWh').to('J')).toBe(3600000000000);
});

test('MWh to mWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('MWh').to('mWh')).toBe(1000000000);
});

test('kWh to mWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('kWh').to('mWh')).toBe(1000000);
});

test('mWh to kWh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('mWh').to('kWh')).toBe(0.000001);
});

test('mWh to Wh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('mWh').to('Wh')).toBe(0.001);
});

test('kWh to Wh', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('kWh').to('Wh')).toBe(1000);
});

test('kWh to kJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('kWh').to('kJ')).toBe(3600);
});

test('MJ to J', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('MJ').to('J')).toBe(1_000_000);
});

test('GJ to J', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('GJ').to('J')).toBe(1_000_000_000);
});

test('GJ to MJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('GJ').to('MJ')).toBe(1_000);
});

test('MJ to kJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('MJ').to('kJ')).toBe(1_000);
});

test('MWh to MJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('MWh').to('MJ')).toBe(3_600);
});

test('MWh to GJ', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('MWh').to('GJ')).toBe(3.6);
});

test('J to cal', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('J').to('cal')).toBe(1 / 4.184);
});

test('cal to J', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('cal').to('J')).toBe(4.184);
});

test('cal to kcal', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('cal').to('kcal')).toBe(0.001);
});

test('kcal to cal', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('kcal').to('cal')).toBe(1000);
});

test('cal to Ws', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('cal').to('Ws')).toBe(4.184);
});

test('Ws to cal', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('Ws').to('cal')).toBe(1 / 4.184);
});

test('kcal to J', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  expect(convert(1).from('kcal').to('J')).toBe(4184);
});
