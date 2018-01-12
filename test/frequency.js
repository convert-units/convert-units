var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['Hz to Hz'] = function () {
  assert.strictEqual( convert(1).from('Hz').to('Hz') , 1);
};

tests['mHz to mHz'] = function () {
  assert.strictEqual( convert(1).from('mHz').to('mHz') , 1);
};

tests['kHz to kHz'] = function () {
  assert.strictEqual( convert(1).from('kHz').to('kHz') , 1);
};

tests['MHz to MHz'] = function () {
  assert.strictEqual( convert(1).from('MHz').to('MHz') , 1);
};

tests['GHz to GHz'] = function () {
  assert.strictEqual( convert(1).from('GHz').to('GHz') , 1);
};

tests['THz to THz'] = function () {
  assert.strictEqual( convert(1).from('THz').to('THz') , 1);
};

tests['rpm to rpm'] = function () {
  assert.strictEqual( convert(1).from('rpm').to('rpm') , 1);
};

tests['deg/s to deg/s'] = function () {
  assert.strictEqual( convert(1).from('deg/s').to('deg/s') , 1);
};

tests['rad/s to rad/s'] = function () {
  assert.strictEqual( convert(1).from('rad/s').to('rad/s') , 1);
};

tests['rpm to Hz'] = function () {
  assert.strictEqual( convert(60).from('rpm').to('Hz') , 1);
};

tests['deg/s to Hz'] = function () {
  assert.strictEqual( convert(360).from('deg/s').to('Hz') , 1);
};

tests['rad/s to Hz'] = function () {
  assert.strictEqual( convert(Math.PI).from('rad/s').to('Hz') , 0.5);
};

tests['THz to GHz'] = function () {
  assert.strictEqual( convert(1).from('THz').to('GHz') , 1000);
};

tests['mHz to MHz'] = function () {
  assert.strictEqual( convert(1).from('mHz').to('MHz') , 0.000000001);
};



module.exports = tests;
