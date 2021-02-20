var convert = require('../lib'),
  assert = require('assert'),
  tests = {};

tests['list'] = function () {
  var list = convert().list(),
    firstItem = list[0];

  assert(list.length > 0);
  assert('abbr' in firstItem);
  assert(typeof firstItem.abbr === 'string');
  assert('measure' in firstItem);
  assert(typeof firstItem.measure === 'string');
  assert('system' in firstItem);
  assert(typeof firstItem.system === 'string');
  assert('singular' in firstItem);
  assert(typeof firstItem.singular === 'string');
  assert('plural' in firstItem);
  assert(typeof firstItem.plural === 'string');
};

tests['list by measure'] = function () {
  var full = convert().list(),
    measures = convert().measures();

  measures.map(function (measure) {
    var list = convert().list(measure);

    assert(list.length > 0);
    assert(list.length < full.length);
  });
};

module.exports = tests;
