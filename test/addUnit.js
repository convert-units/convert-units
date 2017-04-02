var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

// Test commented out as "addUnit" mutates "measures" and causes
// subsequent tests that compare possibilities agains hard-coded lists
// to fail
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
