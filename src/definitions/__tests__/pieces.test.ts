import convert from '../..';

test('bk-doz to pcs', () => {
  expect(convert(1).from('bk-doz').to('pcs')).toBe(13);
});

test('cp to pcs', () => {
  expect(convert(1).from('cp').to('pcs')).toBe(2);
});

test('doz-doz to pcs', () => {
  expect(convert(1).from('doz-doz').to('pcs')).toBe(144);
});

test('doz to pcs', () => {
  expect(convert(1).from('doz').to('pcs')).toBe(12);
});

test('gr-gr to pcs', () => {
  expect(convert(1).from('gr-gr').to('pcs')).toBe(1728);
});

test('gros to pcs', () => {
  expect(convert(1).from('gros').to('pcs')).toBe(144);
});

test('half-dozen to pcs', () => {
  expect(convert(1).from('half-dozen').to('pcs')).toBe(6);
});

test('long-hundred to pcs', () => {
  expect(convert(1).from('long-hundred').to('pcs')).toBe(120);
});

test('ream to pcs', () => {
  expect(convert(1).from('ream').to('pcs')).toBe(500);
});

test('scores to pcs', () => {
  expect(convert(1).from('scores').to('pcs')).toBe(20);
});

test('sm-gr to pcs', () => {
  expect(convert(1).from('sm-gr').to('pcs')).toBe(120);
});

test('trio to pcs', () => {
  expect(convert(1).from('trio').to('pcs')).toBe(3);
});
