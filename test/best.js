var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['best mm'] = function () {
  var actual = convert(1200).from('mm').best()
    , expected = {
        val: 1.2
      , unit: 'm'
      , singular: 'meter'
      , plural: 'meters'
      };

  assert.deepEqual(actual, expected);
};

module.exports = tests;
