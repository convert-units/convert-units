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
};

// Incorrect, shoud be either 30.4167 or 30.4375 days in a month
tests ['d to month'] = function () {
  assert.strictEqual( convert(28).from('d').to('month'), 1);
};

// Incorrect, should be 365 or 365.25 days in 1 year
tests ['d to year'] = function () {
  assert.strictEqual( convert(364).from('d').to('year'), 1);
};

// Incorrect, should be 4.34524 or 4.34821 weeks in 1 month
tests['week to month'] = function () {
  assert.strictEqual( convert(4).from('week').to('month'), 1);
};

tests['week to year'] = function () {
  assert.strictEqual( convert(52).from('week').to('year'), 1);
};

// Incorrect, should be 12 months in 1 year
tests['month to year'] = function () {
  var expected = .923
    , actual = convert(12).from('month').to('year');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
