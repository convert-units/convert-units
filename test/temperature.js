var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['C to K'] = function () {
  assert.strictEqual( convert(0).from('C').to('K'), 273.15);
};

tests['K to C'] = function () {
  assert.strictEqual( convert(273.15).from('K').to('C'), 0);
};

tests['F to C'] = function () {
  assert.strictEqual( convert(32).from('F').to('C'), 0);
};

tests['C to F'] = function () {
  assert.strictEqual( convert(0).from('C').to('F'), 32);
};

module.exports = tests;
