var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

var EPSILON = 0.000001

tests['N to kN'] = function () {
  assert.strictEqual(convert(1).from('N').to('kN') , 1/1000);
};

tests['kN to N'] = function () {
  assert.strictEqual(convert(1).from('kN').to('N') , 1000);
};

tests['N to lbf'] = function () {
  assert.strictEqual(true, Math.abs(convert(1).from('N').to('lbf') - 0.224809) < EPSILON);
};

tests['lbf to N'] = function () {
  assert.strictEqual(convert(1).from('lbf').to('N') , 4.44822);
};

tests['ton to N'] = function () {
  var expected = 8896.480552
  , actual = convert(1).from('tf').to('N');
assert.ok( percentError(expected, actual) < ACCURACY
  , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mtf to N'] = function () {
  var expected = 9806.65
  , actual = convert(1).from('mtf').to('N');
assert.ok( percentError(expected, actual) < ACCURACY
  , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ozf to N'] = function () {
  var expected = 0.278014
  , actual = convert(1).from('ozf').to('N');
assert.ok( percentError(expected, actual) < ACCURACY
  , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ozf to mtf'] = function () {
  var expected = 0.028349523
  , actual = convert(1000).from('ozf').to('mtf');
assert.ok( percentError(expected, actual) < ACCURACY
  , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mtf to oz'] = function() {
  var expected = 35273.961943
  , actual = convert(1).from('mtf').to('ozf');
assert.ok( percentError(expected, actual) < ACCURACY
  , 'Expected: ' + expected +', Actual: ' + actual);
}

module.exports = tests;
