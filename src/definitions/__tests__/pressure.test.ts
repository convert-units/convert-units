import convert from '../..';

test('Pa to Pa', () => {
  expect(convert(1).from('Pa').to('Pa')).toBe(1);
});

test('Pa to kPa', () => {
  expect(convert(2000).from('Pa').to('kPa')).toBe(2);
});

test('kPa to Pa', () => {
  expect(convert(1).from('kPa').to('Pa')).toBe(1000);
});

test('kPa to hPa', () => {
  expect(convert(20).from('kPa').to('hPa')).toBe(200);
});

test('kPa to MPa', () => {
  expect(convert(8000).from('kPa').to('MPa')).toBe(8);
});

test('kPa to bar', () => {
  expect(convert(6000).from('kPa').to('bar')).toBe(60);
});

test('kPa to torr', () => {
  expect(convert(532).from('kPa').to('torr')).toBeCloseTo(3990.33);
});

test('psi to psi', () => {
  expect(convert(10).from('psi').to('psi')).toBe(10);
});

test('psi to ksi', () => {
  expect(convert(10000).from('psi').to('ksi')).toBe(10);
});

test('Pa to psi', () => {
  expect(convert(10000).from('Pa').to('psi')).toBeCloseTo(1.450377);
});

test('torr to ksi', () => {
  expect(convert(51714.931860168974).from('torr').to('ksi')).toBeCloseTo(1);
});

test('psi to hPa', () => {
  expect(convert(10).from('psi').to('hPa')).toBeCloseTo(689.47573);
});
