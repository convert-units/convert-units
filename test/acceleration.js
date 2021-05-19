const assert = require('assert');
const convert = require('../src/originalConvert');

const tests = {};

tests['g to m/s2'] = function () {
  assert.strictEqual(convert(1).from('g-force').to('m/s2'), 9.80665);
};

tests['m/s2 to g'] = function () {
  assert.strictEqual(convert(9.80665).from('m/s2').to('g-force'), 1);
};

module.exports = tests;
