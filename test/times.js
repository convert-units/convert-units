var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['s to ns'] = function() {
  var expected = 1000000000
    , actual = convert(1).from('s').to('ns');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
}

tests['s to mu'] = function() {
  assert.strictEqual( convert(1).from('s').to('mu'), 1000000 );
};

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
};

tests ['d to month'] = function () {
  assert.strictEqual( convert(30.4375).from('d').to('month'), 1);
};

tests ['d to year'] = function () {
  assert.strictEqual( convert(365.25).from('d').to('year'), 1);
};

tests['week to month'] = function () {
  var expected = 1
    , actual = convert(4.34821).from('week').to('month');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['week to year'] = function () {
  var expected = 1
    , actual = convert(52.17857).from('week').to('year');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['month to year'] = function () {
  assert.strictEqual( convert(12).from('month').to('year'), 1);
};

module.exports = tests;
