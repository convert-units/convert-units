var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['ltr possibilities'] = function () {
  var actual = convert().from('ltr').possibilities()
    , expected = [ 'ml', 'ltr', 'tsp', 'tbsp', 'fl-oz', 'cup', 'pnt', 'qt', 'gal' ];
  assert.deepEqual(actual, expected);
};

tests['kg possibilities'] = function () {
  var actual = convert().from('kg').possibilities()
    , expected = [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ];
  assert.deepEqual(actual, expected);
};

module.exports = tests;
