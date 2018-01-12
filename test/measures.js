var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['measures'] = function () {
  var actual = convert().measures()
    , expected = [ 'length', 'area', 'mass', 'volume', 'each', 'temperature', 'time', 'digital', 'partsPer', 'speed', 'pace', 'pressure', 'current', 'voltage', 'power', 'reactivePower', 'apparentPower', 'energy', 'reactiveEnergy', 'volumeFlowRate', 'illuminance', 'frequency', 'angle' ];
  assert.deepEqual(actual, expected);
};

module.exports = tests;
