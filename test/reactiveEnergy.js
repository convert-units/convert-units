var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['VARh to VARh'] = function () {
  assert.strictEqual( convert(1).from('VARh').to('VARh') , 1);
};

tests['mVARh to mVARh'] = function () {
  assert.strictEqual( convert(1).from('mVARh').to('mVARh') , 1);
};

tests['kVARh to kVARh'] = function () {
  assert.strictEqual( convert(1).from('kVARh').to('kVARh') , 1);
};

tests['MVARh to MVARh'] = function () {
  assert.strictEqual( convert(1).from('MVARh').to('MVARh') , 1);
};

tests['GVARh to GVARh'] = function () {
  assert.strictEqual( convert(1).from('GVARh').to('GVARh') , 1);
};

tests['VARh to mVARh'] = function () {
  assert.strictEqual( convert(1).from('VARh').to('mVARh') , 1000);
};

tests['VARh to kVARh'] = function () {
  assert.strictEqual( convert(1).from('VARh').to('kVARh') , 0.001);
};

tests['VARh to MVARh'] = function () {
  assert.strictEqual( convert(1).from('VARh').to('MVARh') , 0.000001);
};

tests['VARh to GVARh'] = function () {
  assert.strictEqual( convert(1).from('VARh').to('GVARh') , 0.000000001);
};

tests['GVARh to mVARh'] = function () {
  assert.strictEqual( convert(1).from('GVARh').to('mVARh'), 1000000000000);
}

tests['MVARh to mVARh'] = function () {
  assert.strictEqual( convert(1).from('MVARh').to('mVARh'), 1000000000);
}

tests['kVARh to mVARh'] = function () {
  assert.strictEqual( convert(1).from('kVARh').to('mVARh'), 1000000);
}

tests['mVARh to kVARh'] = function () {
  assert.strictEqual( convert(1).from('mVARh').to('kVARh'), 0.000001);
}

tests['mVARh to VARh'] = function () {
  assert.strictEqual( convert(1).from('mVARh').to('VARh'), 0.001);
}

tests['kVARh to VARh'] = function () {
  assert.strictEqual( convert(1).from('kVARh').to('VARh'), 1000);
}

module.exports = tests;
