import convert from '../..';

test('VA to VA', () => {
  expect(convert(1).from('VA').to('VA')).toBe(1);
});

test('mVA to mVA', () => {
  expect(convert(1).from('mVA').to('mVA')).toBe(1);
});

test('kVA to kVA', () => {
  expect(convert(1).from('kVA').to('kVA')).toBe(1);
});

test('MVA to MVA', () => {
  expect(convert(1).from('MVA').to('MVA')).toBe(1);
});

test('GVA to GVA', () => {
  expect(convert(1).from('GVA').to('GVA')).toBe(1);
});

test('VA to mVA', () => {
  expect(convert(1).from('VA').to('mVA')).toBe(1000);
});

test('VA to kVA', () => {
  expect(convert(1).from('VA').to('kVA')).toBe(0.001);
});

test('VA to MVA', () => {
  expect(convert(1).from('VA').to('MVA')).toBe(0.000001);
});

test('VA to GVA', () => {
  expect(convert(1).from('VA').to('GVA')).toBe(0.000000001);
});

test('GVA to mVA', () => {
  expect(convert(1).from('GVA').to('mVA')).toBe(1000000000000);
});

test('MVA to mVA', () => {
  expect(convert(1).from('MVA').to('mVA')).toBe(1000000000);
});

test('kVA to mVA', () => {
  expect(convert(1).from('kVA').to('mVA')).toBe(1000000);
});

test('mVA to kVA', () => {
  expect(convert(1).from('mVA').to('kVA')).toBe(0.000001);
});

test('mVA to VA', () => {
  expect(convert(1).from('mVA').to('VA')).toBe(0.001);
});

test('kVA to VA', () => {
  expect(convert(1).from('kVA').to('VA')).toBe(1000);
});
