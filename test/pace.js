const assert = require('assert');
const convert = require('../src/originalConvert');

const tests = {};
const ACCURACY = 1 / 1000;
const percentError = require('../lib/percentError');

tests['s/m to s/m'] = function () {
  assert.strictEqual(convert(1).from('s/m').to('s/m'), 1);
};

tests['s/m to min/km'] = function () {
  const expected = 16.6667;
  const actual = convert(1).from('s/m').to('min/km');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

tests['s/ft to s/ft'] = function () {
  assert.strictEqual(convert(1).from('s/ft').to('s/ft'), 1);
};

tests['min/mi to s/ft'] = function () {
  assert.strictEqual(convert(1).from('min/mi').to('s/ft'), 0.0113636);
};

tests['min/mi to min/km'] = function () {
  const expected = 0.621371;
  const actual = convert(1).from('min/mi').to('min/km');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

tests['min/km to min/mi'] = function () {
  const expected = 1.60934;
  const actual = convert(1).from('min/km').to('min/mi');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

module.exports = tests;
