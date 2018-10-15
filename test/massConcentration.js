var convert = require('../lib')
  , assert = require('assert')
  , tests = {}


tests['g/l to mg/l'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('mg/l') , 1e3);
};

tests['g/l to ug/l'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('ug/l') , 1e6);
};

tests['g/l to ng/l'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('ng/l') , 1e9);
};

tests['g/l to pg/l'] = function () {
  assert.strictEqual( convert(1).from('mg/l').to('pg/l') , 1e12);
};

tests['g/l to kg/m3'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('kg/m3') , 1);
};

tests['g/l to g/m3'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('g/m3') , 1e3);
};

tests['g/l to mg/m3'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('mg/m3') , 1e6);
};

tests['g/l to ug/m3'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('ug/m3') , 1e9);
};

tests['g/l to ng/m3'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('ng/m3') , 1e12);
};

tests['g/l to NTU'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('NTU') , 1e3);
};



module.exports = tests;
