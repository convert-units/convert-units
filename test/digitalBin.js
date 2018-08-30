var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');


tests['b to b'] = function () {
  assert.strictEqual( convert(1).from('ib').to('ib') , 1);
};

tests['Kb to b'] = function () {
  assert.strictEqual( convert(1).from('Kib').to('ib') , 1024);
};

tests['Mb to b'] = function () {
  assert.strictEqual( convert(1).from('Mib').to('ib') , 1048576);
};

tests['Gb to b'] = function () {
  assert.strictEqual( convert(1).from('Gib').to('ib') , 1073741824);
};

tests['Tb to b'] = function () {
  assert.strictEqual( convert(1).from('Tib').to('ib') , 1099511627776);
};

tests['B to B'] = function () {
  assert.strictEqual( convert(1).from('iB').to('iB') , 1);
};

tests['KB to B'] = function () {
  assert.strictEqual( convert(1).from('KiB').to('iB') , 1024);
};

tests['MB to B'] = function () {
  assert.strictEqual( convert(1).from('MiB').to('iB') , 1048576);
};

tests['GB to B'] = function () {
  assert.strictEqual( convert(1).from('GiB').to('iB') , 1073741824);
};

tests['TB to B'] = function () {
  assert.strictEqual( convert(1).from('TiB').to('iB') , 1099511627776);
};

// When converting between systems, expect < 0.1% error
tests['B to b'] = function () {
  var expected = 8
    , actual = convert(1).from('iB').to('ib');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['b to B'] = function () {
  var expected = 0.125
    , actual = convert(1).from('ib').to('iB');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
