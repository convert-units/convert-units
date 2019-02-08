var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

var EPSILON = 0.000001

tests['f to pF'] = function () {
  assert.strictEqual( convert(1).from('f').to('pF') , 1);
};

tests['f to mC'] = function () {
  assert.strictEqual( convert(1).from('f').to('mF') , 1000);
};

tests['mC to f'] = function () {
  assert.strictEqual( convert(1).from('mF').to('f') , 1/1000);
};

tests['f to μC'] = function () {
  assert.strictEqual( convert(1).from('f').to('μF') , 1000000);
};

tests['μC to f'] = function () {
  assert.strictEqual( convert(1).from('μF').to('f') , 1/1000000);
};

tests['f to nC'] = function () {
  assert.strictEqual(true, Math.abs(convert(1).from('f').to('nF') - 1e9) < EPSILON);
};

tests['nC to f'] = function () {
  assert.strictEqual( convert(1).from('nF').to('f') , 1e-9);
};

tests['f to pF'] = function () {
  assert.strictEqual( convert(1).from('f').to('pF') , 1e12);
};

tests['pF to f'] = function () {
  assert.strictEqual( convert(1).from('pF').to('f') , 1e-12);
};

module.exports = tests;
