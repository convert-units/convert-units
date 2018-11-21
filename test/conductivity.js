var convert = require('../lib')
  , assert = require('assert')
  , tests = {}


tests['S/m to mS/m'] = function () {
  assert.strictEqual( convert(1).from('S/m').to('mS/m') , 1e3);
};

tests['S/m to mS/cm'] = function () {
  assert.strictEqual( convert(1).from('S/m').to('mS/cm') , 1e1);
};

tests['S/m to uS/cm'] = function () {
  assert.strictEqual( convert(1).from('S/m').to('uS/cm') , 1e4);
};

tests['mS/m to S/m'] = function () {
  assert.strictEqual( convert(1).from('mS/m').to('S/m') , 1e-3);
};

tests['mS/cm to S/m'] = function () {
  assert.strictEqual( convert(1).from('mS/cm').to('S/m') , 1e-1);
};

tests['uS/cm to S/m'] = function () {
  assert.strictEqual( convert(1).from('uS/cm').to('S/m') , 1e-4);
};


module.exports = tests;
