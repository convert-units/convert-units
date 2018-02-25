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
};

tests['does not break when excluding from measurement'] = function () {
  var actual = convert(10).from('km').toBest({ exclude: ['km'] })
    , expected = {
        val: 10000
      , unit: 'm'
      , singular: 'Meter'
      , plural: 'Meters'
      };

  assert.deepEqual(actual, expected);
};

tests['if all measurements are excluded return from'] = function () {
  var actual = convert(10).from('km').toBest({ exclude: ['mm, cm, m, km'] })
    , expected = {
        val: 10
      , unit: 'km'
      , singular: 'Kilometer'
      , plural: 'Kilometers'
      };

  assert.deepEqual(actual, expected);
};

tests['pre-cut off number'] = function () {
  var actual = convert(9000).from('mm').toBest({ cutOffNumber: 10 })
    , expected = {
        val: 900
      , unit: 'cm'
      , singular: 'Centimeter'
      , plural: 'Centimeters'
      };

  assert.deepEqual(actual, expected);
};

tests['post-cut off number'] = function () {
  var actual = convert(10000).from('mm').toBest({ cutOffNumber: 10 })
    , expected = {
        val: 10
      , unit: 'm'
      , singular: 'Meter'
      , plural: 'Meters'
      };

  assert.deepEqual(actual, expected);
};

tests['km to yard'] = function () {
    var actual = convert(1).from('km').toBest({ system: "imperial" })
        , expected = {
        val: 1093.6133333333335
        , unit: 'yd'
        , singular: 'Yard'
        , plural: 'Yards'
    };

    assert.deepEqual(actual, expected);
};

tests['km to mile'] = function () {
    var actual = convert(2).from('km').toBest({ system: "imperial" })
        , expected = {
        val: 1.2427424242424243
        , unit: "mi"
        , singular: "Mile"
        , plural: "Miles"
    };

    assert.deepEqual(actual, expected);
};

tests['yard to km'] = function () {
    var actual = convert(1093.6133333333335).from('yd').toBest({ system: "metric" })
        , expected = {
        val: 1
        , unit: "km"
        , singular: "Kilometer"
        , plural: "Kilometers"
    };

    assert.deepEqual(actual, expected);
};

tests['mile to km'] = function () {
    var actual = convert(1.2427424242424243).from('mi').toBest({ system: "metric" })
        , expected = {
        val: 2
        , unit: "km"
        , singular: "Kilometer"
        , plural: "Kilometers"
    };

    assert.deepEqual(actual, expected);
};

module.exports = tests;
