var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');


tests['ft2 to ft2'] = function () {
  assert.strictEqual( convert(1).from('ft2').to('ft2') , 1);
};

tests['ft2 to in2'] = function () {
  assert.strictEqual( convert(1).from('ft2').to('in2') , 144);
};

tests['in2 to ft2'] = function () {
  assert.strictEqual( convert(1).from('in2').to('ft2') , 1/144);
};

tests['ft2 to ac'] = function () {
  assert.strictEqual( convert(1).from('ft2').to('ac') , 1/43560);
};

tests['ac to ft2'] = function () {
  assert.strictEqual( convert(1).from('ac').to('ft2') , 43560);
};

tests['ft2 to mi2'] = function () {
  assert.strictEqual( convert(1).from('ft2').to('mi2') , 1/27878400);
};

tests['mi2 to ft2'] = function () {
  assert.strictEqual( convert(1).from('mi2').to('ft2') , 27878400);
};

tests['m2 to m2'] = function () {
  assert.strictEqual( convert(1).from('m2').to('m2') , 1);
};

tests['m2 to cm2'] = function () {
  assert.strictEqual( convert(1).from('m2').to('cm2') , 10000);
};

tests['cm2 to m2'] = function () {
  assert.strictEqual( convert(1).from('cm2').to('m2') , 1/10000);
};

tests['m2 to mm2'] = function () {
  assert.strictEqual( convert(1).from('m2').to('mm2') , 1000000);
};

tests['ha to m2'] = function () {
  assert.strictEqual( convert(1).from('ha').to('m2'), 10000);
};

tests['km2 to m2'] = function () {
  assert.strictEqual( convert(1).from('km2').to('m2'), 1000000);
};

// When converting between systems, expect < 0.1% error
tests['m2 to ft2'] = function () {
  var expected = 10.7639
    , actual = convert(1).from('m2').to('ft2');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mm2 to ft2'] = function () {
  var expected = 1.07639e-5
    , actual = convert(1).from('mm2').to('ft2');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
