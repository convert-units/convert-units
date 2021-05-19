const assert = require('assert');
const convert = require('../src/originalConvert');
const { UC, UCWithNewRule } = require('../src/index');
const numeral = require('numeral');
const tests = {};

tests['test Convertor'] = function () {
  //   assert.strictEqual(convert(1).from('g-force').to('m/s2'), 9.80665);
  const convertor = UC();
  let actual = convertor.getUnit('b');
  let expected = convert().getUnit('b');
  assert.deepEqual(actual, expected);

  actual = convertor.getUnit('b');
  expected = convert().getUnit('b');
  assert.deepEqual(actual, expected);

  actual = convertor.list();
  expected = convert().list();
  assert.deepEqual(actual, expected);

  actual = convertor.possibilities();
  expected = convert().possibilities();
  assert.deepEqual(actual, expected);

  actual = convertor.measures();
  expected = convert().measures();
  assert.deepEqual(actual, expected);
};

tests["'format' and 'formatWithUnit' works correctly"] = function () {
  //   assert.strictEqual(convert(1).from('g-force').to('m/s2'), 9.80665);
  // const convertor = UC();
  let expected = numeral(UC(10001).from('b').to('Kb').toNumber()).format(0.0);
  let actual = UC(10001).from('b').to('Kb').format(0.0).toString();
  assert.deepEqual(actual, expected);

  expected =
    numeral(UC(10001).from('b').to('Kb').toNumber()).format(0.0) + ' Kb';
  actual = UC(10001).from('b').to('Kb').formatWithUnit(0.0).toString();
  assert.deepEqual(actual, expected);
};

module.exports = tests;
