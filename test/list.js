var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['list'] = function () {
  var actual = convert().list();
  var firstItem = actual[0];

  assert(actual.length > 0);
  assert(firstItem.hasOwnProperty("measure"));
  assert(firstItem.hasOwnProperty("system"));
  assert(firstItem.hasOwnProperty("singular"));
  assert(firstItem.hasOwnProperty("plural"));
};

module.exports = tests;
