var convert = require('../lib')
  , assert = require('assert')
  , ACCURACY = 1/1000
  , tests = {}
  , percentError = require('../lib/percentError');

///////////////////
// Metric to Metric
///////////////////
tests['mps to kph'] = function () {
  assert.strictEqual( convert(2).from('mps').to('kph'), 7.2);
};

tests['kph to mps'] = function () {
  assert.strictEqual( convert(3.6).from('kph').to('mps'), 1);
};

///////////////////
// Imperial to Imperial
///////////////////
tests['fps to mph'] = function () {
  assert.strictEqual( convert(1).from('fps').to('mph'), 0.681818);
};

tests['mph to fps'] = function () {
  var expected = 1.46667
    , actual = convert(1).from('mph').to('fps');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['fps to kn'] = function () {
  var expected = 0.592484
    , actual = convert(1).from('fps').to('kn');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['kn to fps'] = function () {
  var expected = 1.68781
    , actual = convert(1).from('kn').to('fps');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mph to kn'] = function () {
  var expected = 0.868976
    , actual = convert(1).from('mph').to('kn');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['kn to mph'] = function () {
  var expected = 1.15078
    , actual = convert(1).from('kn').to('mph');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

///////////////////
// Metric to Imperial
///////////////////
tests['mps to fps'] = function () {
  var expected = 3.28084
    , actual = convert(1).from('mps').to('fps');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mps to mph'] = function () {
  var expected = 2.23697
    , actual = convert(1).from('mps').to('mph');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mps to kn'] = function () {
  var expected = 1.94384
    , actual = convert(1).from('mps').to('kn');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['kph to fps'] = function () {
  var expected = 0.911344
    , actual = convert(1).from('kph').to('fps');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['kph to mph'] = function () {
  var expected = 0.621371
    , actual = convert(1).from('kph').to('mph');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['kph to kn'] = function () {
  var expected = 0.539957
    , actual = convert(1).from('kph').to('kn');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

///////////////////
// Imperial to Metric
///////////////////
tests['fps to mps'] = function () {
  var expected = 0.3048
    , actual = convert(1).from('fps').to('mps');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['fps to kph'] = function () {
  var expected = 1.09728
    , actual = convert(1).from('fps').to('kph');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mph to mps'] = function () {
  var expected = 0.44704
    , actual = convert(1).from('mph').to('mps');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['mph to kph'] = function () {
  var expected = 1.60934
    , actual = convert(1).from('mph').to('kph');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['kn to mps'] = function () {
  var expected = 0.514444
    , actual = convert(1).from('kn').to('mps');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['kn to kph'] = function () {
  var expected = 1.852
    , actual = convert(1).from('kn').to('kph');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
