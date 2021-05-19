const assert = require('assert');
const convert = require('../src/originalConvert');

const tests = {};

tests['best mm'] = function () {
  const actual = convert(1200).from('mm').toBest();
  const expected = {
    val: 1.2,
    unit: 'm',
    singular: 'Meter',
    plural: 'Meters',
  };

  assert.deepEqual(actual, expected);
};

tests['excludes measurements'] = function () {
  const actual = convert(1200000)
    .from('mm')
    .toBest({ exclude: ['km', 'm'] });
  const expected = {
    val: 120000,
    unit: 'cm',
    singular: 'Centimeter',
    plural: 'Centimeters',
  };

  assert.deepEqual(actual, expected);
};

tests['does not break when excluding from measurement'] = function () {
  const actual = convert(10)
    .from('km')
    .toBest({ exclude: ['km'] });
  const expected = {
    val: 10000,
    unit: 'm',
    singular: 'Meter',
    plural: 'Meters',
  };

  assert.deepEqual(actual, expected);
};

tests['if all measurements are excluded return from'] = function () {
  const actual = convert(10)
    .from('km')
    .toBest({ exclude: ['mm, cm, m, km'] });
  const expected = {
    val: 10,
    unit: 'km',
    singular: 'Kilometer',
    plural: 'Kilometers',
  };

  assert.deepEqual(actual, expected);
};

tests['pre-cut off number'] = function () {
  const actual = convert(9000).from('mm').toBest({ cutOffNumber: 10 });
  const expected = {
    val: 900,
    unit: 'cm',
    singular: 'Centimeter',
    plural: 'Centimeters',
  };

  assert.deepEqual(actual, expected);
};

tests['post-cut off number'] = function () {
  const actual = convert(10000).from('mm').toBest({ cutOffNumber: 10 });
  const expected = {
    val: 10,
    unit: 'm',
    singular: 'Meter',
    plural: 'Meters',
  };

  assert.deepEqual(actual, expected);
};

module.exports = tests;
