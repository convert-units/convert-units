var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['l/s to l/s'] = function () {
  assert.strictEqual( convert(2).from('l/s').to('l/s') , 2);
};

tests['mm3/s to l/s'] = function () {
  assert.strictEqual( convert(1000000).from('mm3/s').to('l/s') , 1);
};

tests['cm3/s to l/s'] = function () {
  assert.strictEqual( convert(100).from('cm3/s').to('l/s') , 1/10);
};

tests['dl/s to l/s'] = function () {
  assert.strictEqual( convert(2).from('dl/s').to('l/s') , 0.2);
};

tests['cl/s to l/s'] = function () {
  assert.strictEqual( convert(25).from('cl/s').to('l/s') , 0.25);
};

tests['ml/s to l/s'] = function () {
  assert.strictEqual( convert(100).from('ml/s').to('l/s') , 1/10);
};

tests['m3/s to l/s'] = function () {
  assert.strictEqual( convert(1).from('m3/s').to('l/s') , 1000);
};

tests['km3/s to l/s'] = function () {
  assert.strictEqual( convert(1).from('km3/s').to('l/s') , 1000000000000);
};

tests['l/s to ml/s'] = function () {
  assert.strictEqual( convert(1).from('l/s').to('ml/s') , 1000);
};

tests['dl/s to ml/s'] = function () {
  assert.strictEqual( convert(10).from('dl/s').to('ml/s') , 1000);
};

tests['cl/s to ml/s'] = function () {
  assert.strictEqual( convert(100).from('cl/s').to('ml/s') , 1000);
};

tests['ml/s to ml/s'] = function () {
  assert.strictEqual( convert(13).from('ml/s').to('ml/s') , 13);
};

tests['fl-oz/s to fl-oz/s'] = function () {
  assert.strictEqual( convert(62).from('fl-oz/s').to('fl-oz/s') , 62);
};

tests['fl-oz/s to Tbs/s'] = function () {
  assert.strictEqual( convert(4).from('fl-oz/s').to('Tbs/s') , 8);
};

tests['Tbs/s to fl-oz/s'] = function () {
  assert.strictEqual( convert(2).from('Tbs/s').to('fl-oz/s') , 1);
};

tests['Tbs/s to Tbs/s'] = function () {
  assert.strictEqual( convert(140).from('Tbs/s').to('Tbs/s') , 140);
};

tests['l/s to l/min'] = function () {
  assert.strictEqual( convert(1).from('l/s').to('l/min') , 60);
};

tests['l/s to l/h'] = function () {
  assert.strictEqual( convert(1).from('l/s').to('l/h') , 3600);
};

tests['kl/s to kl/h'] = function () {
  assert.strictEqual( convert(1).from('kl/s').to('kl/h') , 3600);
};

tests['l/s to kl/h'] = function () {
  assert.strictEqual( convert(1).from('l/s').to('kl/h') , 3.6);
};

tests['l/s to m3/s'] = function () {
  assert.strictEqual( convert(1).from('l/s').to('m3/s') , 0.001);
};

tests['m3/s to m3/h'] = function () {
  assert.strictEqual( convert(1).from('kl/s').to('kl/h') , 3600);
};

// When converting between systems, expect < 0.1% error
tests['tsp/s to l/s'] = function () {
  var expected = 1.75
    , actual = convert(355).from('tsp/s').to('l/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['in3/s to l/s'] = function () {
  var expected = 0.0163871
    , actual = convert(1).from('in3/s').to('l/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['in3/s to fl-oz/s'] = function () {
  var expected = 0.554113
    , actual = convert(1).from('in3/s').to('fl-oz/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['m3/s to yd3/s'] = function () {
  var expected = 1.30795
    , actual = convert(1).from('m3/s').to('yd3/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ft3/s to cm3/s'] = function () {
  var expected = 28316.8
    , actual = convert(1).from('ft3/s').to('cm3/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['pnt/s to ml/s'] = function () {
  var expected = 2366
    , actual = convert(5).from('pnt/s').to('ml/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ml/s to gal/s'] = function () {
  var expected = 2.609
    , actual = convert(9876).from('ml/s').to('gal/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['gal/s to l/s'] = function () {
  var expected = 3.78541178
    , actual = convert(1).from('gal/s').to('l/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['kl/s to kl/min'] = function () {
  var expected = 60
    , actual = convert(1).from('kl/s').to('kl/min');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['l/s to kl/h'] = function () {
  var expected = 3.6
    , actual = convert(1).from('l/s').to('kl/h');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['kl/min to l/h'] = function () {
  var expected = 60000
    , actual = convert(1).from('kl/min').to('l/h');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['l/s to m3/h'] = function () {
  var expected = 3.6
    , actual = convert(1).from('l/s').to('m3/h');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['m3/s to kl/h'] = function () {
  var expected = 3600
    , actual = convert(1).from('m3/s').to('kl/h');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['fl-oz/s to m3/min'] = function () {
  var expected = 0.00177441177
    , actual = convert(1).from('fl-oz/s').to('m3/min');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ft3/min to l/s'] = function () {
  var expected = 0.471947443
    , actual = convert(1).from('ft3/min').to('l/s');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['pnt/min to kl/h'] = function () {
  var expected = 0.0283905884
    , actual = convert(1).from('pnt/min').to('kl/h');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['yd3/h to m3/min'] = function () {
  var expected = 0.012742581
    , actual = convert(1).from('yd3/h').to('m3/min');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
