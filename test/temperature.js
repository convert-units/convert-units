var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['C to K'] = function () {
  assert.strictEqual( convert(0).from('C').to('K'), 273.15);
};

tests['K to C'] = function () {
  assert.strictEqual( convert(273.15).from('K').to('C'), 0);
};

tests['F to C'] = function () {
  assert.strictEqual( convert(32).from('F').to('C'), 0);
};

tests['C to F'] = function () {
  assert.strictEqual( convert(0).from('C').to('F'), 32);
};

tests['F to K'] = function () {
  assert.strictEqual( convert(32).from('F').to('K'), 273.15);
};

tests['F to R'] = function () {
  assert.strictEqual( convert(100).from('F').to('R'), 559.6700000000001);
};

tests['R to F'] = function () {
  assert.strictEqual( convert(670).from('R').to('F'), 210.32999999999998);
};

tests['R to C'] = function () {
  assert.strictEqual( convert(612).from('R').to('C'), 66.85);
};

tests['R to K'] = function () {
  assert.strictEqual( convert(459.67).from('R').to('K'), 255.3722222222222);
};

module.exports = tests;
