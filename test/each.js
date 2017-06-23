var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['ea to ea'] = function () {
  assert.strictEqual( convert(1).from('ea').to('ea') , 1);
};

tests['dz to ea'] = function () {
  assert.strictEqual( convert(1).from('dz').to('ea') , 12);
};

tests['ea to dz'] = function () {
  assert.strictEqual( convert(12).from('ea').to('dz') , 1);
};

module.exports = tests;
