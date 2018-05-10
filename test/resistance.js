var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['Ohm to kOhm'] = function () {
  assert.strictEqual(convert(1).from('Ohm').to('kOhm') , 1/1000);
};

tests['Ohm to MOhm'] = function () {
  assert.strictEqual(convert(1).from('Ohm').to('MOhm') ,1/ 1000000);
};

tests['kOhm to MOhm'] = function () {
  assert.strictEqual(convert(1).from('kOhm').to('MOhm') , 1/1000);
};

tests['kOhm to Ohm'] = function () {
  assert.strictEqual(convert(1).from('kOhm').to('Ohm') , 1000);
};

tests['MOhm to Ohm'] = function () {
  assert.strictEqual(convert(1).from('MOhm').to('Ohm') , 1000000);
};

tests['MOhm to kOhm'] = function () {
  assert.strictEqual(convert(1).from('MOhm').to('kOhm') , 1000);
};

module.exports = tests;
