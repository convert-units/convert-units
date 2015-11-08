var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');


tests['s to ms'] = function () {
  assert.strictEqual( convert(1).from('s').to('ms') , 1000);
};

tests['s to m'] = function () {
  assert.strictEqual( convert(60).from('s').to('min'), 1);
}

tests['s to s'] = function () {
  assert.strictEqual( convert(1).from('s').to('s'), 1);
}

tests['s to h'] = function () {
  assert.strictEqual( convert(3600).from('s').to('h'), 1);
};

tests['s to d'] = function () {
  assert.strictEqual( convert(86400).from('s').to('d'), 1);
};

tests['d to week'] = function () {
  assert.strictEqual( convert(7).from('d').to('week'), 1);
}

tests['w to year'] = function () {
  assert.strictEqual( convert(52).from('week').to('year'), 1);
};

module.exports = tests;
