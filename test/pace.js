var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');


tests['s/m to s/m'] = function () {
  assert.strictEqual( convert(1).from('s/m').to('s/m') , 1);
};

tests['s/m to min/km'] = function () {
  var expected = 16.6667
  var actual = convert(1).from('s/m').to('min/km');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['s/ft to s/ft'] = function () {
  assert.strictEqual( convert(1).from('s/ft').to('s/ft') , 1);
};

tests['min/mi to s/ft'] = function () {
  assert.strictEqual( convert(1).from('min/mi').to('s/ft') , 0.0113636);
};

tests['min/mi to min/km'] = function () {
  var expected = 0.621371
  var actual = convert(1).from('min/mi').to('min/km');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['min/km to min/mi'] = function () {
  var expected = 1.60934
  var actual = convert(1).from('min/km').to('min/mi');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
