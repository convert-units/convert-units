var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['list'] = function () {
  var list = convert().list()
    , firstItem = list[0];

  assert(list.length > 0);
  assert(firstItem.hasOwnProperty("abbr"));
  assert(firstItem.hasOwnProperty("measure"));
  assert(firstItem.hasOwnProperty("system"));
  assert(firstItem.hasOwnProperty("singular"));
  assert(firstItem.hasOwnProperty("plural"));
};

tests['list by measure'] = function () {
  var full     = convert().list()
    , measures = convert().measures();

  measures.map(function(measure) {
    var list = convert().list(measure);

    assert(list.length > 0);
    assert(list.length < full.length);
  });
};

module.exports = tests;
