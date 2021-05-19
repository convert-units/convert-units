const assert = require('assert');
const convert = require('../src/originalConvert');

const tests = {};
const ACCURACY = 1 / 1000;
const percentError = require('../lib/percentError');

tests['m/s to m/s'] = function () {
  assert.strictEqual(convert(1).from('m/s').to('m/s'), 1);
};

tests['m/s to km/h'] = function () {
  assert.strictEqual(convert(1).from('m/s').to('km/h'), 3.6);
};

tests['m/h to m/h'] = function () {
  assert.strictEqual(convert(6).from('m/h').to('m/h'), 6);
};

tests['m/h to knot'] = function () {
  const expected = 1.73795;
  const actual = convert(2).from('m/h').to('knot');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

tests['m/h to ft/s'] = function () {
  const expected = 4.4;
  const actual = convert(3).from('m/h').to('ft/s');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

tests['m/s to m/h'] = function () {
  const expected = 22.3694;
  const actual = convert(10).from('m/s').to('m/h');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

tests['m/s to knot'] = function () {
  const expected = 15.5508;
  const actual = convert(8).from('m/s').to('knot');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

tests['m/h to km/h'] = function () {
  const expected = 19.3121;
  const actual = convert(12).from('m/h').to('km/h');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

module.exports = tests;
