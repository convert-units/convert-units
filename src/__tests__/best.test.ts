import configureMeasurements from '..';
import length, { LengthSystems, LengthUnits } from '../definitions/length';

test('best mm', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(1200).from('mm').toBest(),
    expected = {
      val: 1.2,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});

test('excludes measurements', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(1200000)
      .from('mm')
      .toBest({ exclude: ['km', 'm'] }),
    expected = {
      val: 120000,
      unit: 'cm',
      singular: 'Centimeter',
      plural: 'Centimeters',
    };
  expect(actual).toEqual(expected);
});

test('does not break when excluding from measurement', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(10)
      .from('km')
      .toBest({ exclude: ['km'] }),
    expected = {
      val: 10000,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});

test('if all measurements are excluded return from', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(10)
    .from('km')
    .toBest({ exclude: ['mm', 'cm', 'm', 'km', 'nm', 'μm'] });
  expect(actual).toEqual(null);
});

test('pre-cut off number', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(9000).from('mm').toBest({ cutOffNumber: 10 }),
    expected = {
      val: 900,
      unit: 'cm',
      singular: 'Centimeter',
      plural: 'Centimeters',
    };
  expect(actual).toEqual(expected);
});

test('post-cut off number', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(10000).from('mm').toBest({ cutOffNumber: 10 }),
    expected = {
      val: 10,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});
