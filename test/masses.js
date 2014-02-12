var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['lb to lb'] = function () {
  assert.strictEqual( convert(1).from('lb').to('lb') , 1);
};

tests['lb to oz'] = function () {
  assert.strictEqual( convert(1).from('lb').to('oz') , 16);
};

tests['oz to lb'] = function () {
  assert.strictEqual( convert(1).from('oz').to('lb') , 1/16);
};

tests['oz to oz'] = function () {
  assert.strictEqual( convert(6).from('oz').to('oz') , 6);
};

tests['kg to kg'] = function () {
  assert.strictEqual( convert(1).from('kg').to('kg') , 1);
};

tests['kg to g'] = function () {
  assert.strictEqual( convert(1).from('kg').to('g') , 1000);
};

tests['g to kg'] = function () {
  assert.strictEqual( convert(1).from('g').to('kg') , 1/1000);
};

tests['g to g'] = function () {
  assert.strictEqual( convert(100).from('g').to('g') , 100);
};

// When converting between systems, expect < 0.1% error
tests['kg to lb'] = function () {
  var expected = 0.453592
    , actual = convert(1).from('lb').to('kg');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['g to lb'] = function () {
  var expected = 0.00220462
    , actual = convert(1).from('g').to('lb');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['lb to g'] = function () {
  var expected = 1360.78
    , actual = convert(3).from('lb').to('g');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['g to lb'] = function () {
  var expected = 3
    , actual = convert(1360.78).from('g').to('lb');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
