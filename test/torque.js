var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['lbf-ft to n-m'] = function() {
  var expected = 1.355818
  , actual = convert(1).from('lbf-ft').to('n-m');
  assert.ok( percentError(expected, actual) < ACCURACY
  , 'Expected: ' + expected +', Actual: ' + actual);
}

tests['n-m to lbf-ft'] = function() {
  var expected = 0.737562
  , actual = convert(1).from('n-m').to('lbf-ft');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
}

tests['lbf-in to n-m'] = function() {
  var expected = 0.112985
  , actual = convert(1).from('lbf-in').to('n-m');
  assert.ok( percentError(expected, actual) < ACCURACY
  , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['n-m to lbf-in'] = function() {
  var expected = 8.850746
  , actual = convert(1).from('n-m').to('lbf-in');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
}

tests['lbf-in to lbf-ft'] = function () {
  var expected = 1/12
  , actual = convert(1).from('lbf-in').to('lbf-ft');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['lbf-ft to lbf-in'] = function () {
  var expected = 12
  , actual = convert(1).from('lbf-ft').to('lbf-in');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
