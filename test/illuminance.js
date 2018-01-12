var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['ft-cd to lx'] = function () {
  assert.strictEqual( convert(1).from('ft-cd').to('lx') , 10.76391);
};

tests['lx to ft-cd'] = function () {
  assert.strictEqual( convert(1).from('lx').to('ft-cd') , 0.09290304359661128);
};

module.exports = tests;
