import configureMeasurements from '../..';
import each from '../each';

test('ea to ea', () => {
  const convert = configureMeasurements({
    each,
  });
  expect(convert(1).from('ea').to('ea')).toBe(1);
});

test('dz to ea', () => {
  const convert = configureMeasurements({
    each,
  });
  expect(convert(1).from('dz').to('ea')).toBe(12);
});

test('ea to dz', () => {
  const convert = configureMeasurements({
    each,
  });
  expect(convert(12).from('ea').to('dz')).toBe(1);
});
