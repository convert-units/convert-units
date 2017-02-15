var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['m/s to m/s'] = function () {
  assert.strictEqual( convert(1).from('m/s').to('m/s') , 1);
};

tests['m/s to km/h'] = function () {
  assert.strictEqual( convert(1).from('m/s').to('km/h') , 3.6);
};

tests['mph to mph'] = function () {
  assert.strictEqual( convert(6).from('mph').to('mph') , 6);
};

tests['mph to knot'] = function () {
  var expected = 1.73795
  var actual = convert(2).from('mph').to('knot');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mph to ft/s'] = function () {
    var expected = 4.4
    var actual = convert(3).from('mph').to('ft/s')
    assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['m/s to mph'] = function () {
    var expected = 22.3694
    var actual = convert(10).from('m/s').to('mph');
    assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
}

tests['m/s to knot'] = function () {
    var expected = 15.5508
    var actual = convert(8).from('m/s').to('knot');
    assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
}

tests['mph to km/h'] = function () {
    var expected = 19.3121
    var actual = convert(12).from('mph').to('km/h');
    assert.ok( percentError(expected, actual) < ACCURACY
      , 'Expected: ' + expected +', Actual: ' + actual);
}

module.exports = tests;
