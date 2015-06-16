var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['C to C'] = function () {
  assert.strictEqual( convert(100).from('C').to('C') , 100);
};

// When converting between systems, expect < 0.1% error
tests['C to F'] = function () {
  var expected = 212
    , actual = convert(100).from('C').to('F');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual);
};

tests['C to K'] = function () {
  var expected = 373.15
    , actual = convert(100).from('C').to('K');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual);
};

tests['F to K'] = function () {
  var expected = 273.15
    , actual = convert(32).from('F').to('K');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual);
};

module.exports = tests;
