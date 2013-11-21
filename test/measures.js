var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['measures'] = function () {
  var actual = convert().measures()
    , expected = [ 'mass', 'volume' ];
  assert.deepEqual(actual, expected);
};

module.exports = tests;
