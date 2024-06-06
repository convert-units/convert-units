import configureMeasurements from '../..';
import volumeFlowRate, {
  VolumeFlowRateSystems,
  VolumeFlowRateUnits,
} from '../volumeFlowRate';

test('l/s to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(2).from('l/s').to('l/s')).toBe(2);
});

test('mm3/s to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1000000).from('mm3/s').to('l/s')).toBe(1);
});

test('cm3/s to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(100).from('cm3/s').to('l/s')).toBe(1 / 10);
});

test('dl/s to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(2).from('dl/s').to('l/s')).toBe(0.2);
});

test('cl/s to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(25).from('cl/s').to('l/s')).toBe(0.25);
});

test('ml/s to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(100).from('ml/s').to('l/s')).toBe(1 / 10);
});

test('m3/s to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('m3/s').to('l/s')).toBe(1000);
});

test('km3/s to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('km3/s').to('l/s')).toBe(1000000000000);
});

test('l/s to ml/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('l/s').to('ml/s')).toBe(1000);
});

test('dl/s to ml/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(10).from('dl/s').to('ml/s')).toBe(1000);
});

test('cl/s to ml/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(100).from('cl/s').to('ml/s')).toBe(1000);
});

test('ml/s to ml/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(13).from('ml/s').to('ml/s')).toBe(13);
});

test('fl-oz/s to fl-oz/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(62).from('fl-oz/s').to('fl-oz/s')).toBe(62);
});

test('fl-oz/s to Tbs/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(4).from('fl-oz/s').to('Tbs/s')).toBe(8);
});

test('Tbs/s to fl-oz/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(2).from('Tbs/s').to('fl-oz/s')).toBe(1);
});

test('Tbs/s to Tbs/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(140).from('Tbs/s').to('Tbs/s')).toBe(140);
});

test('l/s to l/min', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('l/s').to('l/min')).toBe(60);
});

test('l/s to l/h', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('l/s').to('l/h')).toBe(3600);
});

test('kl/s to kl/h', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('kl/s').to('kl/h')).toBe(3600);
});

test('l/s to kl/h', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('l/s').to('kl/h')).toBeCloseTo(3.6);
});

test('l/s to m3/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('l/s').to('m3/s')).toBe(0.001);
});

test('m3/s to m3/h', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('kl/s').to('kl/h')).toBe(3600);
});

test('tsp/s to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(355).from('tsp/s').to('l/s')).toBeCloseTo(1.75);
});

test('in3/s to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('in3/s').to('l/s')).toBeCloseTo(0.0163871);
});

test('in3/s to fl-oz/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('in3/s').to('fl-oz/s')).toBeCloseTo(0.554113);
});

test('m3/s to yd3/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('m3/s').to('yd3/s')).toBeCloseTo(1.30795);
});

test('ft3/s to cm3/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('ft3/s').to('cm3/s')).toBeCloseTo(28316.832);
});

test('pnt/s to ml/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(5).from('pnt/s').to('ml/s')).toBeCloseTo(2365.882);
});

test('ml/s to gal/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(9876).from('ml/s').to('gal/s')).toBeCloseTo(2.609);
});

test('gal/s to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('gal/s').to('l/s')).toBeCloseTo(3.78541178);
});

test('kl/s to kl/min', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('kl/s').to('kl/min')).toBeCloseTo(60);
});

test('kl/min to l/h', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('kl/min').to('l/h')).toBeCloseTo(60000);
});

test('l/s to m3/h', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('l/s').to('m3/h')).toBeCloseTo(3.6);
});

test('m3/s to kl/h', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('m3/s').to('kl/h')).toBeCloseTo(3600);
});

test('fl-oz/s to m3/min', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('fl-oz/s').to('m3/min')).toBeCloseTo(0.00177441177);
});

test('ft3/min to l/s', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('ft3/min').to('l/s')).toBeCloseTo(0.471947443);
});

test('pnt/min to kl/h', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('pnt/min').to('kl/h')).toBeCloseTo(0.0283905884);
});

test('yd3/h to m3/min', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  expect(convert(1).from('yd3/h').to('m3/min')).toBeCloseTo(0.012742581);
});
