
var convert = require('../lib')
, assert = require('assert')
, tests = {}
, ACCURACY = 1/1000
, percentError = require('../lib/percentError');

tests['g to m/s2'] = function () {
  assert.strictEqual(convert(1).from('g-force').to('m/s2') , 9.80665);
};

tests['m/s2 to g'] = function () {
  assert.strictEqual(convert(9.80665).from('m/s2').to('g-force') , 1);
};

tests['ft/s2 to g'] = function () {
  var expected = .031081
    , actual = convert(1).from('ft/s2').to('g-force');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['g to ft/s2'] = function () {
  var expected = 32.174049
    , actual = convert(1).from('g-force').to('ft/s2');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
