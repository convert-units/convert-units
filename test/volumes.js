var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['l to l'] = function () {
  assert.strictEqual( convert(2).from('l').to('l') , 2);
};

tests['mm3 to l'] = function () {
  assert.strictEqual( convert(1000000).from('mm3').to('l') , 1);
};

tests['cm3 to l'] = function () {
  assert.strictEqual( convert(100).from('cm3').to('l') , 1/10);
};

tests['dl to l'] = function () {
  assert.strictEqual( convert(2).from('dl').to('l') , 0.2);
};

tests['cl to l'] = function () {
  assert.strictEqual( convert(25).from('cl').to('l') , 0.25);
};

tests['ml to l'] = function () {
  assert.strictEqual( convert(100).from('ml').to('l') , 1/10);
};

tests['m3 to l'] = function () {
  assert.strictEqual( convert(1).from('m3').to('l') , 1000);
};

tests['km3 to l'] = function () {
  assert.strictEqual( convert(1).from('km3').to('l') , 1000000000000);
};

tests['l to ml'] = function () {
  assert.strictEqual( convert(1).from('l').to('ml') , 1000);
};

tests['dl to ml'] = function () {
  assert.strictEqual( convert(10).from('dl').to('ml') , 1000);
};

tests['cl to ml'] = function () {
  assert.strictEqual( convert(100).from('cl').to('ml') , 1000);
};

tests['ml to ml'] = function () {
  assert.strictEqual( convert(13).from('ml').to('ml') , 13);
};

tests['msk to ml'] = function () {
  assert.strictEqual( convert(2).from('msk').to('ml') , 30);
};

tests['tsk to ml'] = function () {
  assert.strictEqual( convert(3).from('tsk').to('ml') , 15);
};

tests['krm to ml'] = function () {
  assert.strictEqual( convert(13).from('krm').to('ml') , 13);
};

tests['kanna to l'] = function () {
  assert.strictEqual( convert(2).from('kanna').to('l') , 2 * 2.617);
};

tests['kkp to ml'] = function () {
  assert.strictEqual( convert(2).from('kkp').to('ml') , 300);
};

tests['glas to ml'] = function () {
  assert.strictEqual( convert(2).from('glas').to('ml') , 400);
};

tests['ml to msk'] = function () {
  assert.strictEqual( convert(15).from('ml').to('msk') , 1);
};

tests['ml to tsk'] = function () {
  assert.strictEqual( convert(5).from('ml').to('tsk') , 1);
};

tests['ml to krm'] = function () {
  assert.strictEqual( convert(1).from('ml').to('krm') , 1);
};

tests['l to kanna'] = function () {
  assert.strictEqual( convert(2.617).from('l').to('kanna') , 1);
};

tests['lm to kkp'] = function () {
  assert.strictEqual( convert(150).from('ml').to('kkp') , 1);
};

tests['ml to glas'] = function () {
  assert.strictEqual( convert(200).from('ml').to('glas') , 1);
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
tests['tsp to l'] = function () {
  var expected = 1.75
    , actual = convert(355).from('tsp').to('l');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['in3 to l'] = function () {
  var expected = 0.0163871
    , actual = convert(1).from('in3').to('l');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['in3 to fl-oz'] = function () {
  var expected = 0.554113
    , actual = convert(1).from('in3').to('fl-oz');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['m3 to yd3'] = function () {
  var expected = 1.30795
    , actual = convert(1).from('m3').to('yd3');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['ft3 to cm3'] = function () {
  var expected = 28316.8
    , actual = convert(1).from('ft3').to('cm3');
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

tests['gal to l'] = function () {
  var expected = 37.85
    , actual = convert(10).from('gal').to('l');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

module.exports = tests;
