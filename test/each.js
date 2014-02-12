var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['ea to ea'] = function () {
  assert.strictEqual( convert(1).from('ea').to('ea') , 1);
};

module.exports = tests;
