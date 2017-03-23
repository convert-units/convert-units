var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['measures'] = function () {
  var actual = convert().measures()
    , expected = [ 'length', 'area', 'mass', 'volume', 'each', 'temperature', 'time', 'digital', 'partsPer', 'speed', 'pressure', 'current', 'voltage', 'power', 'reactivePower', 'apparentPower' ];
  assert.deepEqual(actual, expected);
};

module.exports = tests;
