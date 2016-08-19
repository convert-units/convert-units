var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['measures'] = function () {
  var actual = convert().measures()
    , expected = [ 'length', 'area', 'mass', 'volume', 'each', 'temperature', 'time', 'digital', 'partsPer' ];
  assert.deepEqual(actual, expected);
};

module.exports = tests;
