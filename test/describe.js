const assert = require('assert');
const convert = require('../src/originalConvert');

const tests = {};

tests['get kg'] = function () {
  const actual = convert().describe('kg');
  const expected = {
    abbr: 'kg',
    measure: 'mass',
    system: 'metric',
    singular: 'Kilogram',
    plural: 'Kilograms',
  };

  assert.deepEqual(actual, expected);
};

tests['get ac'] = function () {
  const actual = convert().describe('ac');
  const expected = {
    abbr: 'ac',
    measure: 'area',
    system: 'imperial',
    singular: 'Acre',
    plural: 'Acres',
  };

  assert.deepEqual(actual, expected);
};

module.exports = tests;
