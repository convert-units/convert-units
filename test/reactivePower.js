var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['VAR to VAR'] = function () {
  assert.strictEqual( convert(1).from('VAR').to('VAR') , 1);
};

tests['mVAR to mVAR'] = function () {
  assert.strictEqual( convert(1).from('mVAR').to('mVAR') , 1);
};

tests['kVAR to kVAR'] = function () {
  assert.strictEqual( convert(1).from('kVAR').to('kVAR') , 1);
};

tests['MVAR to MVAR'] = function () {
  assert.strictEqual( convert(1).from('MVAR').to('MVAR') , 1);
};

tests['GVAR to GVAR'] = function () {
  assert.strictEqual( convert(1).from('GVAR').to('GVAR') , 1);
};

tests['VAR to mVAR'] = function () {
  assert.strictEqual( convert(1).from('VAR').to('mVAR') , 1000);
};

tests['VAR to kVAR'] = function () {
  assert.strictEqual( convert(1).from('VAR').to('kVAR') , 0.001);
};

tests['VAR to MVAR'] = function () {
  assert.strictEqual( convert(1).from('VAR').to('MVAR') , 0.000001);
};

tests['VAR to GVAR'] = function () {
  assert.strictEqual( convert(1).from('VAR').to('GVAR') , 0.000000001);
};

tests['GVAR to mVAR'] = function () {
  assert.strictEqual( convert(1).from('GVAR').to('mVAR'), 1000000000000);
}

tests['MVAR to mVAR'] = function () {
  assert.strictEqual( convert(1).from('MVAR').to('mVAR'), 1000000000);
}

tests['kVAR to mVAR'] = function () {
  assert.strictEqual( convert(1).from('kVAR').to('mVAR'), 1000000);
}

tests['mVAR to kVAR'] = function () {
  assert.strictEqual( convert(1).from('mVAR').to('kVAR'), 0.000001);
}

tests['mVAR to VAR'] = function () {
  assert.strictEqual( convert(1).from('mVAR').to('VAR'), 0.001);
}

tests['kVAR to VAR'] = function () {
  assert.strictEqual( convert(1).from('kVAR').to('VAR'), 1000);
}

module.exports = tests;
