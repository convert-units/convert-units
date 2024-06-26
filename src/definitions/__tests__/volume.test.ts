import configureMeasurements from '../..';
import volume, { VolumeSystems, VolumeUnits } from '../volume';

test('l to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(2).from('l').to('l')).toBe(2);
});

test('mm3 to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1000000).from('mm3').to('l')).toBe(1);
});

test('cm3 to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(100).from('cm3').to('l')).toBe(1 / 10);
});

test('dm3 to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(100).from('dm3').to('l')).toBe(100);
});

test('dl to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(2).from('dl').to('l')).toBe(0.2);
});

test('cl to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(25).from('cl').to('l')).toBe(0.25);
});

test('ml to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(100).from('ml').to('l')).toBe(1 / 10);
});

test('m3 to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('m3').to('l')).toBe(1000);
});

test('km3 to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('km3').to('l')).toBe(1000000000000);
});

test('l to ml', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('l').to('ml')).toBe(1000);
});

test('dl to ml', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(10).from('dl').to('ml')).toBe(1000);
});

test('cl to ml', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(100).from('cl').to('ml')).toBe(1000);
});

test('ml to ml', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(13).from('ml').to('ml')).toBe(13);
});

test('msk to ml', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(2).from('msk').to('ml')).toBe(30);
});

test('tsk to ml', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(3).from('tsk').to('ml')).toBe(15);
});

test('krm to ml', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(13).from('krm').to('ml')).toBe(13);
});

test('kanna to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(2).from('kanna').to('l')).toBe(2 * 2.617);
});

test('kkp to ml', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(2).from('kkp').to('ml')).toBe(300);
});

test('glas to ml', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(2).from('glas').to('ml')).toBe(400);
});

test('ml to msk', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(15).from('ml').to('msk')).toBe(1);
});

test('ml to tsk', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(5).from('ml').to('tsk')).toBe(1);
});

test('ml to krm', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('ml').to('krm')).toBe(1);
});

test('l to kanna', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(2.617).from('l').to('kanna')).toBe(1);
});

test('lm to kkp', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(150).from('ml').to('kkp')).toBe(1);
});

test('ml to glas', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(200).from('ml').to('glas')).toBe(1);
});

test('fl-oz to fl-oz', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(62).from('fl-oz').to('fl-oz')).toBe(62);
});

test('fl-oz to tbsp', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(4).from('fl-oz').to('Tbs')).toBe(8);
});

test('Tbs to fl-oz', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(2).from('Tbs').to('fl-oz')).toBe(1);
});

test('Tbs to Tbs', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(140).from('Tbs').to('Tbs')).toBe(140);
});

test('tsp to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(355).from('tsp').to('l')).toBeCloseTo(1.74977);
});

test('in3 to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('in3').to('l')).toBeCloseTo(0.0163871);
});

test('in3 to fl-oz', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('in3').to('fl-oz')).toBeCloseTo(0.554113);
});

test('m3 to yd3', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('m3').to('yd3')).toBeCloseTo(1.30795);
});

test('ft3 to cm3', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('ft3').to('cm3')).toBeCloseTo(28316.832);
});

test('pnt to ml', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(5).from('pnt').to('ml')).toBeCloseTo(2365.88);
});

test('ml to gal', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(9876).from('ml').to('gal')).toBeCloseTo(2.609);
});

test('gal to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(10).from('gal').to('l')).toBeCloseTo(37.85);
});

test('Ml to Ml', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('Ml').to('Ml')).toBe(1);
});

test('Gl to Gl', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(2).from('Gl').to('Gl')).toBe(2);
});

test('Ml to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('Ml').to('l')).toBe(1_000_000);
});

test('Gl to l', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('Gl').to('l')).toBe(1_000_000_000);
});

test('Gl to Ml', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('Gl').to('Ml')).toBe(1_000);
});

test('Ml to Gl', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  expect(convert(1).from('Ml').to('Gl')).toBe(0.001);
});
