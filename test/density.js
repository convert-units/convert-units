var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');


tests['kg/m3 to kg/m3'] = function () {
  assert.strictEqual( convert(1).from('kg/m3').to('kg/m3') , 1);
};

tests['kg/m3 to kg/l'] = function () {
  assert.strictEqual( convert(1).from('kg/m3').to('kg/l') , 1000);
};

// When converting between systems, expect < 0.1% error
tests['kg/m3 to kg/l'] = function () {
  var expected = 1/1000
    , actual = convert(1).from('kg/m3').to('kg/l');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};
module.exports = tests;
