var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['get kg'] = function () {
  var actual = convert().describe('kg')
    , expected = {
        measure: 'mass'
      , system: 'metric'
      , singular: 'Kilogram'
      , plural: 'Kilograms'
      };

  assert.deepEqual(actual, expected);
};

module.exports = tests;
