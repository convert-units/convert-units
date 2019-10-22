var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

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

tests['does not break when excluding from measurement'] = function () {
  var actual = convert(10).from('km').toBest({ exclude: ['km'] })
    , expected = {
        val: 10000
      , unit: 'm'
      , singular: 'Meter'
      , plural: 'Meters'
      };

  assert.deepEqual(actual, expected);
}

tests['if all measurements are excluded return from'] = function () {
  var actual = convert(10).from('km').toBest({ exclude: ['mm, cm, m, km'] })
    , expected = {
        val: 10
      , unit: 'km'
      , singular: 'Kilometer'
      , plural: 'Kilometers'
      };

  assert.deepEqual(actual, expected);
}

tests['pre-cut off number'] = function () {
  var actual = convert(9000).from('mm').toBest({ cutOffNumber: 10 })
    , expected = {
        val: 900
      , unit: 'cm'
      , singular: 'Centimeter'
      , plural: 'Centimeters'
      };

  assert.deepEqual(actual, expected);
}

tests['post-cut off number'] = function () {
  var actual = convert(10000).from('mm').toBest({ cutOffNumber: 10 })
    , expected = {
        val: 10
      , unit: 'm'
      , singular: 'Meter'
      , plural: 'Meters'
      };

  assert.deepEqual(actual, expected);
}

tests['test K to mK'] = function () {
  var actual = convert(0.001001).from('K').toBest({exclude: ['C', 'F', 'R']})
    , expected = {
        val: 1.001
      , unit: 'mK'
      , singular: 'milliKelvin'
      , plural: 'milliKelvins'
      };
    // assert.deepEqual(actual, expected);
        assert.ok( percentError(expected.val, actual.val) < ACCURACY
            , 'Expected: ' + expected.val +', Actual: ' + actual.val);
}

tests['test K to K'] = function () {
  var actual = convert(6000.0).from('K').toBest({exclude: ['C', 'F', 'R']})
    , expected = {
        val: 6000.0
      , unit: 'K'
      , singular: 'Kelvin'
      , plural: 'Kelvins'
      };
    // assert.deepEqual(actual, expected);
        assert.ok( percentError(expected.val, actual.val) < ACCURACY
            , 'Expected: ' + expected.val +', Actual: ' + actual.val);
}

tests['test arcsec to milliarcsec'] = function () {
    var actual = convert(0.0014).from('arcsec').toBest({exclude: ['deg', 'rad', 'grad', 'arcmin']})
        , expected = {
        val: 1.4
        , unit: 'mas'
        , singular: 'milliarcsecond'
        , plural: 'milliarcseconds'
    };
    //assert.deepEqual(actual, expected);
    assert.ok( percentError(expected.val, actual.val) < ACCURACY
        , 'Expected: ' + expected.val +', Actual: ' + actual.val);
}

module.exports = tests;
