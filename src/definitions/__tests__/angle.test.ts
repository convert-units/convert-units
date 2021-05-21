import convert from '../..';

test('rad to rad', () => {
  expect(convert(1).from('rad').to('rad')).toBe(1);
});

test('deg to deg', () => {
  expect(convert(1).from('deg').to('deg')).toBe(1);
});

test('grad to grad', () => {
  expect(convert(1).from('grad').to('grad')).toBe(1);
});

test('arcmin to arcmin', () => {
  expect(convert(1).from('arcmin').to('arcmin')).toBe(1);
});

test('arcsec to arcsec', () => {
  expect(convert(1).from('arcsec').to('arcsec')).toBe(1);
});

test('deg to rad', () => {
  expect(convert(360).from('deg').to('rad')).toBeCloseTo(6.28319);
});

test('deg to grad', () => {
  expect(convert(360).from('deg').to('grad')).toBe(400);
});

test('deg to arcmin', () => {
  expect(convert(360).from('deg').to('arcmin')).toBe(21600);
});

test('deg to arcsec', () => {
  expect(convert(360).from('deg').to('arcsec')).toBe(1.296e6);
});

test('rad to grad', () => {
  expect(convert(10).from('rad').to('grad')).toBeCloseTo(636.62);
});

test('rad to arcsec', () => {
  expect(convert(10).from('rad').to('arcsec')).toBeCloseTo(2062648.06);
});

test('grad to arcmin', () => {
  expect(convert(5).from('grad').to('arcmin')).toBe(270);
});

test('grad to deg', () => {
  expect(convert(5).from('grad').to('deg')).toBe(4.5);
});

test('arcmin to rad', () => {
  expect(convert(10000).from('arcmin').to('rad')).toBeCloseTo(2.908882);
});
