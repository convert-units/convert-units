import convert from '../..';

test('VAR to VAR', () => {
  expect(convert(1).from('VAR').to('VAR')).toBe(1);
});

test('mVAR to mVAR', () => {
  expect(convert(1).from('mVAR').to('mVAR')).toBe(1);
});

test('kVAR to kVAR', () => {
  expect(convert(1).from('kVAR').to('kVAR')).toBe(1);
});

test('MVAR to MVAR', () => {
  expect(convert(1).from('MVAR').to('MVAR')).toBe(1);
});

test('GVAR to GVAR', () => {
  expect(convert(1).from('GVAR').to('GVAR')).toBe(1);
});

test('VAR to mVAR', () => {
  expect(convert(1).from('VAR').to('mVAR')).toBe(1000);
});

test('VAR to kVAR', () => {
  expect(convert(1).from('VAR').to('kVAR')).toBe(0.001);
});

test('VAR to MVAR', () => {
  expect(convert(1).from('VAR').to('MVAR')).toBe(0.000001);
});

test('VAR to GVAR', () => {
  expect(convert(1).from('VAR').to('GVAR')).toBe(0.000000001);
});

test('GVAR to mVAR', () => {
  expect(convert(1).from('GVAR').to('mVAR')).toBe(1000000000000);
});

test('MVAR to mVAR', () => {
  expect(convert(1).from('MVAR').to('mVAR')).toBe(1000000000);
});

test('kVAR to mVAR', () => {
  expect(convert(1).from('kVAR').to('mVAR')).toBe(1000000);
});

test('mVAR to kVAR', () => {
  expect(convert(1).from('mVAR').to('kVAR')).toBe(0.000001);
});

test('mVAR to VAR', () => {
  expect(convert(1).from('mVAR').to('VAR')).toBe(0.001);
});

test('kVAR to VAR', () => {
  expect(convert(1).from('kVAR').to('VAR')).toBe(1000);
});
