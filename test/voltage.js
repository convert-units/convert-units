var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['V to V'] = function () {
  assert.strictEqual( convert(1).from('V').to('V') , 1);
};

tests['mV to mV'] = function () {
  assert.strictEqual( convert(1).from('mV').to('mV') , 1);
};

tests['kV to kV'] = function () {
  assert.strictEqual( convert(1).from('kV').to('kV') , 1);
};

tests['V to mV'] = function () {
  assert.strictEqual( convert(1).from('V').to('mV') , 1000);
};

tests['V to kV'] = function () {
  assert.strictEqual( convert(1).from('V').to('kV') , 0.001);
};

tests['kV to mV'] = function () {
  assert.strictEqual( convert(1).from('kV').to('mV'), 1000000);
}

tests['mV to kV'] = function () {
  assert.strictEqual( convert(1).from('mV').to('kV'), 0.000001);
}

tests['mV to V'] = function () {
  assert.strictEqual( convert(1).from('mV').to('V'), 0.001);
}

tests['kV to V'] = function () {
  assert.strictEqual( convert(1).from('kV').to('V'), 1000);
}

module.exports = tests;
