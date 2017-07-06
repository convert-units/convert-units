var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['pcs to pcs'] = function () {
  assert.strictEqual( convert(1).from('unknown').to('unknown') , 1);
};

module.exports = tests;
