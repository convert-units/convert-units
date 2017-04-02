var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['addUnit'] = function () {
  // var actual = convert().addUnit({
  //   system: 'metric',
  //   measure: 'mass',
  //   abbr: 't',
  //   plural: 'Tonne',
  //   singular: 'Tonnes',
  //   toAnchor: 1000000
  // })
  //
  // var expected = convert().describe('t')
  //
  // assert.deepEqual(actual, expected);
};

module.exports = tests;
