var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

var EPSILON = 0.00001

tests['Nm to Ncm'] = function () {
  assert.strictEqual(convert(1).from('Nm').to('Ncm') , 100);
};

tests['Ncm to Nm'] = function () {
  assert.strictEqual(convert(1).from('Ncm').to('Nm') , 1/100);
};

tests['lb-in to lb-ft'] = function () {
  assert.strictEqual(convert(1).from('lb-in').to('lb-ft') , 1/12);
};

tests['lb-ft to lb-in'] = function () {
  assert.strictEqual(convert(1).from('lb-ft').to('lb-in') , 12);
};

tests['Nm to lb-ft'] = function () {
  assert.strictEqual(convert(1).from('Nm').to('lb-ft') , 0.737562);
};

tests['lb-ft to Nm'] = function () {
  assert.strictEqual(true, Math.abs(convert(1).from('lb-ft').to('Nm') - 1.35582) < EPSILON);
};

module.exports = tests;
