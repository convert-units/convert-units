var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

var EPSILON = 0.000001

tests['Co to Co'] = function () {
  assert.strictEqual( convert(1).from('Co').to('Co') , 1);
};

tests['Co to mC'] = function () {
  assert.strictEqual( convert(1).from('Co').to('mC') , 1000);
};

tests['mC to Co'] = function () {
  assert.strictEqual( convert(1).from('mC').to('Co') , 1/1000);
};

tests['Co to μC'] = function () {
  assert.strictEqual( convert(1).from('Co').to('μC') , 1000000);
};

tests['μC to Co'] = function () {
  assert.strictEqual( convert(1).from('μC').to('Co') , 1/1000000);
};

tests['Co to nC'] = function () {
  assert.strictEqual(true, Math.abs(convert(1).from('Co').to('nC') - 1e9) < EPSILON);
};

tests['nC to Co'] = function () {
  assert.strictEqual( convert(1).from('nC').to('Co') , 1e-9);
};

tests['Co to pC'] = function () {
  assert.strictEqual( convert(1).from('Co').to('pC') , 1e12);
};

tests['pC to Co'] = function () {
  assert.strictEqual( convert(1).from('pC').to('Co') , 1e-12);
};

module.exports = tests;
