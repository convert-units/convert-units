var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['list'] = function () {
  var list = convert().list()
    , firstItem = list[0];

  assert(list.length > 0);
  assert(firstItem.hasOwnProperty("abbr"));
  assert(typeof firstItem.abbr === "string");
  assert(firstItem.hasOwnProperty("measure"));
  assert(typeof firstItem.measure === "string");
  assert(firstItem.hasOwnProperty("system"));
  assert(typeof firstItem.system === "string");
  assert(firstItem.hasOwnProperty("singular"));
  assert(typeof firstItem.singular === "string");
  assert(firstItem.hasOwnProperty("plural"));
  assert(typeof firstItem.plural === "string");
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
