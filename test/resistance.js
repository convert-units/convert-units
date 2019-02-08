var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['Ω to Ω'] = function () {
  assert.strictEqual( convert(1).from('Ω').to('Ω') , 1);
};

tests['mΩ to mΩ'] = function () {
  assert.strictEqual( convert(1).from('mΩ').to('mΩ') , 1);
};

tests['kΩ to kΩ'] = function () {
  assert.strictEqual( convert(1).from('kΩ').to('kΩ') , 1);
};

tests['Ω to mΩ'] = function () {
  assert.strictEqual( convert(1).from('Ω').to('mΩ') , 1000);
};

tests['Ω to kΩ'] = function () {
  assert.strictEqual( convert(1).from('Ω').to('kΩ') , 0.001);
};

tests['kΩ to mΩ'] = function () {
  assert.strictEqual( convert(1).from('kΩ').to('mΩ'), 1000000);
}

tests['mΩ to kΩ'] = function () {
  assert.strictEqual( convert(1).from('mΩ').to('kΩ'), 0.000001);
}

tests['mΩ to Ω'] = function () {
  assert.strictEqual( convert(1).from('mΩ').to('Ω'), 0.001);
}

tests['kΩ to Ω'] = function () {
  assert.strictEqual( convert(1).from('kΩ').to('Ω'), 1000);
}

tests['μΩ to Ω'] = function () {
  assert.strictEqual( convert(1).from('μΩ').to('Ω'), 1E-6);
}

tests['kΩ to μΩ'] = function () {
  assert.strictEqual( convert(1).from('kΩ').to('μΩ'), 1E9);
}

module.exports = tests;
