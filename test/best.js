var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['best mm'] = function () {
  var actual = convert(1200).from('mm').toBest()
    , expected = {
        val: 1.2
      , unit: 'm'
      , singular: 'Meter'
      , plural: 'Meters'
      };

  assert.deepEqual(actual, expected);
};

tests['excludes measurements'] = function () {
  var actual = convert(1200000).from('mm').toBest({ exclude: ['km', 'm'] })
    , expected = {
        val: 120000
      , unit: 'cm'
      , singular: 'Centimeter'
      , plural: 'Centimeters'
      };

  assert.deepEqual(actual, expected);
}

module.exports = tests;
