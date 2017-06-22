var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');


tests['ft to ft'] = function () {
  assert.strictEqual( convert(1).from('ft').to('ft') , 1);
};

tests['ft to ft-us'] = function () {
  assert.strictEqual( convert(1).from('ft').to('ft-us') , 0.999998000004);
};

tests['ft-us to ft'] = function () {
  assert.strictEqual( convert(1).from('ft-us').to('ft') , 1.000002);
};

tests['in to in'] = function () {
  assert.strictEqual( convert(7).from('in').to('in') , 7);
};

tests['ft to in'] = function () {
  assert.strictEqual( convert(1).from('ft').to('in') , 12);
};

tests['in to ft'] = function () {
  assert.strictEqual( convert(1).from('in').to('ft') , 1/12);
};

tests['ft to mi'] = function () {
  assert.strictEqual( convert(1).from('ft').to('mi') , 1/5280);
};

tests['mi to ft'] = function () {
  assert.strictEqual( convert(1).from('mi').to('ft') , 5280);
};

tests['m to m'] = function () {
  assert.strictEqual( convert(1).from('m').to('m') , 1);
};

tests['m to cm'] = function () {
  assert.strictEqual( convert(1).from('m').to('cm') , 100);
};

tests['cm to m'] = function () {
  assert.strictEqual( convert(1).from('cm').to('m') , 1/100);
};

tests['m to mm'] = function () {
  assert.strictEqual( convert(1).from('m').to('mm') , 1000);
};

tests['km to m'] = function () {
  assert.strictEqual( convert(1).from('km').to('m'), 1000);
};

// When converting between systems, expect < 0.1% error
tests['m to ft'] = function () {
  var expected = 3.28084
    , actual = convert(1).from('m').to('ft');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

// When converting between systems, expect < 0.1% error
tests['m to ft-us'] = function () {
  var expected = 3.28084
    , actual = convert(1).from('m').to('ft-us');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mm to ft'] = function () {
  var expected = 0.00328084
    , actual = convert(1).from('mm').to('ft');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
