var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['ltr to ltr'] = function () {
  assert.strictEqual( convert(2).from('ltr').to('ltr') , 2);
};

tests['ml to ltr'] = function () {
  assert.strictEqual( convert(100).from('ml').to('ltr') , 1/10);
};

tests['ltr to ml'] = function () {
  assert.strictEqual( convert(1).from('ltr').to('ml') , 1000);
};

tests['ml to ml'] = function () {
  assert.strictEqual( convert(13).from('ml').to('ml') , 13);
};

tests['fl-oz to fl-oz'] = function () {
  assert.strictEqual( convert(62).from('fl-oz').to('fl-oz') , 62);
};

tests['fl-oz to tbsp'] = function () {
  assert.strictEqual( convert(4).from('fl-oz').to('Tbs') , 8);
};

tests['Tbs to fl-oz'] = function () {
  assert.strictEqual( convert(2).from('Tbs').to('fl-oz') , 1);
};

tests['Tbs to Tbs'] = function () {
  assert.strictEqual( convert(140).from('Tbs').to('Tbs') , 140);
};

// When converting between systems, expect < 0.1% error
tests['tsp to ltr'] = function () {
  var expected = 1.75
    , actual = convert(355).from('tsp').to('ltr');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['pnt to ml'] = function () {
  var expected = 2366
    , actual = convert(5).from('pnt').to('ml');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ml to gal'] = function () {
  var expected = 2.609
    , actual = convert(9876).from('ml').to('gal');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['gal to ltr'] = function () {
  var expected = 37.85
    , actual = convert(10).from('gal').to('ltr');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
