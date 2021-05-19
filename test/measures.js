const assert = require('assert');
const convert = require('../src/originalConvert');

const tests = {};

tests.measures = function () {
  const actual = convert().measures();
  const expected = [
    'length',
    'area',
    'mass',
    'volume',
    'each',
    'temperature',
    'time',
    'digital',
    'partsPer',
    'speed',
    'pace',
    'pressure',
    'current',
    'voltage',
    'power',
    'reactivePower',
    'apparentPower',
    'energy',
    'reactiveEnergy',
    'volumeFlowRate',
    'illuminance',
    'frequency',
    'angle',
    'charge',
    'force',
    'acceleration',
    'count',
    'percent',
  ];
  assert.deepEqual(actual, expected);
};

module.exports = tests;
