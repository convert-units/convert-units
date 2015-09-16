var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');


tests['b to b'] = function () {
  assert.strictEqual( convert(1).from('b').to('b') , 1);
};

tests['Kb to b'] = function () {
  assert.strictEqual( convert(1).from('Kb').to('b') , 1024);
};

tests['Mb to b'] = function () {
  assert.strictEqual( convert(1).from('Mb').to('b') , 1048576);
};

tests['Gb to b'] = function () {
  assert.strictEqual( convert(1).from('Gb').to('b') , 1073741824);
};

tests['Tb to b'] = function () {
  assert.strictEqual( convert(1).from('Tb').to('b') , 1099511627776);
};

tests['B to B'] = function () {
  assert.strictEqual( convert(1).from('B').to('B') , 1);
};

tests['KB to B'] = function () {
  assert.strictEqual( convert(1).from('KB').to('B') , 1024);
};

tests['MB to B'] = function () {
  assert.strictEqual( convert(1).from('MB').to('B') , 1048576);
};

tests['GB to B'] = function () {
  assert.strictEqual( convert(1).from('GB').to('B') , 1073741824);
};

tests['TB to B'] = function () {
  assert.strictEqual( convert(1).from('TB').to('B') , 1099511627776);
};

// When converting between systems, expect < 0.1% error
tests['B to b'] = function () {
  var expected = 8
    , actual = convert(1).from('B').to('b');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['b to B'] = function () {
  var expected = 0.125
    , actual = convert(1).from('b').to('B');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
