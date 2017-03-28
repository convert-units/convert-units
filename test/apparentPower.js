var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['VA to VA'] = function () {
  assert.strictEqual( convert(1).from('VA').to('VA') , 1);
};

tests['mVA to mVA'] = function () {
  assert.strictEqual( convert(1).from('mVA').to('mVA') , 1);
};

tests['kVA to kVA'] = function () {
  assert.strictEqual( convert(1).from('kVA').to('kVA') , 1);
};

tests['MVA to MVA'] = function () {
  assert.strictEqual( convert(1).from('MVA').to('MVA') , 1);
};

tests['GVA to GVA'] = function () {
  assert.strictEqual( convert(1).from('GVA').to('GVA') , 1);
};

tests['VA to mVA'] = function () {
  assert.strictEqual( convert(1).from('VA').to('mVA') , 1000);
};

tests['VA to kVA'] = function () {
  assert.strictEqual( convert(1).from('VA').to('kVA') , 0.001);
};

tests['VA to MVA'] = function () {
  assert.strictEqual( convert(1).from('VA').to('MVA') , 0.000001);
};

tests['VA to GVA'] = function () {
  assert.strictEqual( convert(1).from('VA').to('GVA') , 0.000000001);
};

tests['GVA to mVA'] = function () {
  assert.strictEqual( convert(1).from('GVA').to('mVA'), 1000000000000);
}

tests['MVA to mVA'] = function () {
  assert.strictEqual( convert(1).from('MVA').to('mVA'), 1000000000);
}

tests['kVA to mVA'] = function () {
  assert.strictEqual( convert(1).from('kVA').to('mVA'), 1000000);
}

tests['mVA to kVA'] = function () {
  assert.strictEqual( convert(1).from('mVA').to('kVA'), 0.000001);
}

tests['mVA to VA'] = function () {
  assert.strictEqual( convert(1).from('mVA').to('VA'), 0.001);
}

tests['kVA to VA'] = function () {
  assert.strictEqual( convert(1).from('kVA').to('VA'), 1000);
}

module.exports = tests;
