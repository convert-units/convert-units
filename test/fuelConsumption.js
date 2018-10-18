var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['l/100km to MPG'] = function () {
  assert.strictEqual( convert(1).from('l/100km').to('mpg') , 235.215);
};

tests['MPG to l/100km'] = function () {
  assert.strictEqual( convert(1).from('mpg').to('l/100km') , 235.215);
};

module.exports = tests;
