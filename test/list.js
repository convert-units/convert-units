const assert = require('assert');
const convert = require('../src/originalConvert');

const tests = {};

tests.list = function () {
  const list = convert().list();
  const firstItem = list[0];

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
  const full = convert().list();
  const measures = convert().measures();

  measures.map(function (measure) {
    const list = convert().list(measure);

    assert(list.length > 0);
    assert(list.length < full.length);
  });
};

module.exports = tests;
