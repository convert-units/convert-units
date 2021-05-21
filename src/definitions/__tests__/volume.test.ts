import convert from '../..';

test('l to l', () => {
  expect(convert(2).from('l').to('l')).toBe(2);
});

test('mm3 to l', () => {
  expect(convert(1000000).from('mm3').to('l')).toBe(1);
});

test('cm3 to l', () => {
  expect(convert(100).from('cm3').to('l')).toBe(1 / 10);
});

test('dl to l', () => {
  expect(convert(2).from('dl').to('l')).toBe(0.2);
});

test('cl to l', () => {
  expect(convert(25).from('cl').to('l')).toBe(0.25);
});

test('ml to l', () => {
  expect(convert(100).from('ml').to('l')).toBe(1 / 10);
});

test('m3 to l', () => {
  expect(convert(1).from('m3').to('l')).toBe(1000);
});

test('km3 to l', () => {
  expect(convert(1).from('km3').to('l')).toBe(1000000000000);
});

test('l to ml', () => {
  expect(convert(1).from('l').to('ml')).toBe(1000);
});

test('dl to ml', () => {
  expect(convert(10).from('dl').to('ml')).toBe(1000);
});

test('cl to ml', () => {
  expect(convert(100).from('cl').to('ml')).toBe(1000);
});

test('ml to ml', () => {
  expect(convert(13).from('ml').to('ml')).toBe(13);
});

test('msk to ml', () => {
  expect(convert(2).from('msk').to('ml')).toBe(30);
});

test('tsk to ml', () => {
  expect(convert(3).from('tsk').to('ml')).toBe(15);
});

test('krm to ml', () => {
  expect(convert(13).from('krm').to('ml')).toBe(13);
});

test('kanna to l', () => {
  expect(convert(2).from('kanna').to('l')).toBe(2 * 2.617);
});

test('kkp to ml', () => {
  expect(convert(2).from('kkp').to('ml')).toBe(300);
});

test('glas to ml', () => {
  expect(convert(2).from('glas').to('ml')).toBe(400);
});

test('ml to msk', () => {
  expect(convert(15).from('ml').to('msk')).toBe(1);
});

test('ml to tsk', () => {
  expect(convert(5).from('ml').to('tsk')).toBe(1);
});

test('ml to krm', () => {
  expect(convert(1).from('ml').to('krm')).toBe(1);
});

test('l to kanna', () => {
  expect(convert(2.617).from('l').to('kanna')).toBe(1);
});

test('lm to kkp', () => {
  expect(convert(150).from('ml').to('kkp')).toBe(1);
});

test('ml to glas', () => {
  expect(convert(200).from('ml').to('glas')).toBe(1);
});

test('fl-oz to fl-oz', () => {
  expect(convert(62).from('fl-oz').to('fl-oz')).toBe(62);
});

test('fl-oz to tbsp', () => {
  expect(convert(4).from('fl-oz').to('Tbs')).toBe(8);
});

test('Tbs to fl-oz', () => {
  expect(convert(2).from('Tbs').to('fl-oz')).toBe(1);
});

test('Tbs to Tbs', () => {
  expect(convert(140).from('Tbs').to('Tbs')).toBe(140);
});

test('tsp to l', () => {
  expect(convert(355).from('tsp').to('l')).toBeCloseTo(1.74977);
});

test('in3 to l', () => {
  expect(convert(1).from('in3').to('l')).toBeCloseTo(0.0163871);
});

test('in3 to fl-oz', () => {
  expect(convert(1).from('in3').to('fl-oz')).toBeCloseTo(0.554113);
});

test('m3 to yd3', () => {
  expect(convert(1).from('m3').to('yd3')).toBeCloseTo(1.30795);
});

test('ft3 to cm3', () => {
  expect(convert(1).from('ft3').to('cm3')).toBeCloseTo(28316.832);
});

test('pnt to ml', () => {
  expect(convert(5).from('pnt').to('ml')).toBeCloseTo(2365.88);
});

test('ml to gal', () => {
  expect(convert(9876).from('ml').to('gal')).toBeCloseTo(2.609);
});

test('gal to l', () => {
  expect(convert(10).from('gal').to('l')).toBeCloseTo(37.85);
});
