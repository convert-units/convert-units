const convert = require('..');

test('best mm', () => {
  var actual = convert(1200).from('mm').toBest(),
    expected = {
      val: 1.2,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});

test('excludes measurements', () => {
  var actual = convert(1200000)
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
  var actual = convert(10)
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
  var actual = convert(10)
      .from('km')
      .toBest({ exclude: ['mm, cm, m, km'] }),
    expected = {
      val: 10,
      unit: 'km',
      singular: 'Kilometer',
      plural: 'Kilometers',
    };
  expect(actual).toEqual(expected);
});

test('pre-cut off number', () => {
  var actual = convert(9000).from('mm').toBest({ cutOffNumber: 10 }),
    expected = {
      val: 900,
      unit: 'cm',
      singular: 'Centimeter',
      plural: 'Centimeters',
    };
  expect(actual).toEqual(expected);
});

test('post-cut off number', () => {
  var actual = convert(10000).from('mm').toBest({ cutOffNumber: 10 }),
    expected = {
      val: 10,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});
