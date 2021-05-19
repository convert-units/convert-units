const assert = require('assert');
const convert = require('../src/originalConvert');

const tests = {};

const EPSILON = 0.000001;

tests['N to kN'] = function () {
  assert.strictEqual(convert(1).from('N').to('kN'), 1 / 1000);
};

tests['kN to N'] = function () {
  assert.strictEqual(convert(1).from('kN').to('N'), 1000);
};

tests['N to lbf'] = function () {
  assert.strictEqual(
    true,
    Math.abs(convert(1).from('N').to('lbf') - 0.224809) < EPSILON
  );
};

tests['lbf to N'] = function () {
  assert.strictEqual(convert(1).from('lbf').to('N'), 4.44822);
};

module.exports = tests;
