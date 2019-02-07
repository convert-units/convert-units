var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['av-rad/s to av-rad/m'] = function () {
  assert.strictEqual( convert(1).from('av-rad/s').to('av-rad/m') , 60);
};

tests['av-rad/s to av-rad/hr'] = function () {
  assert.strictEqual( convert(1).from('av-rad/s').to('av-rad/hr') , 3600);
};

tests['av-deg/s to av-rad/hr'] = function () {
  var expected = 62.8318531
    , actual = convert(1).from('av-deg/s').to('av-rad/hr')
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['av-deg/s to av-rad/s'] = function () {
  var expected = 0.017452
    , actual = convert(1).from('av-deg/s').to('av-rad/s')
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['av-rpm to av-rad/s'] = function () {
  var expected = 1 / (60 * 2 * Math.PI)
    , actual = convert(1).from('av-rpm').to('av-rad/s')
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
