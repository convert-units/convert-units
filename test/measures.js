var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['measures'] = function () {
  var actual = convert().measures()
    , expected = [ 'length', 'mass', 'volume', 'digital', 'time', 'each' ];
  assert.deepEqual(actual, expected);
};

module.exports = tests;
