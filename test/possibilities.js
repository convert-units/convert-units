var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['ltr possibilities'] = function () {
  var actual = convert().from('ltr').possibilities()
    , expected = [ 'ml', 'ltr', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal' ];
  assert.deepEqual(actual, expected);
};

tests['kg possibilities'] = function () {
  var actual = convert().from('kg').possibilities()
    , expected = [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ];
  assert.deepEqual(actual, expected);
};

tests['m possibilities'] = function () {
  var actual = convert().from('m').possibilities()
    , expected = [ 'mm', 'cm', 'm', 'in', 'ft' ];
  assert.deepEqual(actual, expected);
};

tests['each possibilities'] = function () {
  var actual = convert().possibilities('each')
    , expected = [ 'ea' ];
  assert.deepEqual(actual, expected);
};

tests['mass possibilities'] = function () {
  var actual = convert().possibilities('mass')
    , expected = [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ];
  assert.deepEqual(actual, expected);
};

tests['volume possibilities'] = function () {
  var actual = convert().possibilities('volume')
    , expected = [ 'ml', 'ltr', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal' ];
  assert.deepEqual(actual, expected);
};

tests['length possibilities'] = function () {
  var actual = convert().possibilities('length')
    , expected = [ 'mm', 'cm', 'm', 'in', 'ft' ];
  assert.deepEqual(actual, expected);
};

tests['all possibilities'] = function () {
  var actual = convert().possibilities()
    , expected = [ 'mm', 'cm', 'm', 'in', 'ft', 'mcg', 'mg', 'g', 'kg', 'oz', 'lb', 'ml', 'ltr', 'tsp', 'Tbs', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ea' ];
  assert.deepEqual(actual, expected);
};

module.exports = tests;
