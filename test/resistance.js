var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['Ω to kΩ'] = function () {
  assert.strictEqual(convert(1).from('Ω').to('kΩ') , 1/1000);
};

tests['Ω to MΩ'] = function () {
  assert.strictEqual(convert(1).from('Ω').to('MΩ') ,1/ 1000000);
};

tests['kΩ to MΩ'] = function () {
  assert.strictEqual(convert(1).from('kΩ').to('MΩ') , 1/1000);
};

tests['kΩ to Ω'] = function () {
  assert.strictEqual(convert(1).from('kΩ').to('Ω') , 1000);
};

tests['MΩ to Ω'] = function () {
  assert.strictEqual(convert(1).from('MΩ').to('Ω') , 1000000);
};

tests['MΩ to kΩ'] = function () {
  assert.strictEqual(convert(1).from('MΩ').to('kΩ') , 1000);
};

module.exports = tests;
