const assert = require('assert');
const convert = require('../src/originalConvert');

const tests = {};
const ACCURACY = 1 / 1000;
const percentError = require('../lib/percentError');

tests['Pa to Pa'] = function () {
  assert.strictEqual(convert(1).from('Pa').to('Pa'), 1);
};

tests['Pa to kPa'] = function () {
  assert.strictEqual(convert(2000).from('Pa').to('kPa'), 2);
};

tests['kPa to Pa'] = function () {
  assert.strictEqual(convert(1).from('kPa').to('Pa'), 1000);
};

tests['kPa to hPa'] = function () {
  assert.strictEqual(convert(20).from('kPa').to('hPa'), 200);
};

tests['kPa to MPa'] = function () {
  assert.strictEqual(convert(8000).from('kPa').to('MPa'), 8);
};

tests['kPa to bar'] = function () {
  assert.strictEqual(convert(6000).from('kPa').to('bar'), 60);
};

tests['kPa to torr'] = function () {
  const expected = 3990.33;
  const actual = convert(532).from('kPa').to('torr');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

tests['psi to psi'] = function () {
  assert.strictEqual(convert(10).from('psi').to('psi'), 10);
};

tests['psi to ksi'] = function () {
  assert.strictEqual(convert(10000).from('psi').to('ksi'), 10);
};

tests['Pa to psi'] = function () {
  const expected = 1.450377;
  const actual = convert(10000).from('Pa').to('psi');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
  assert.strictEqual(convert(1).from('GB').to('B'), 1073741824);
};

tests['torr to ksi'] = function () {
  const expected = 1;
  const actual = convert(51714.931860168974).from('torr').to('ksi');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

tests['psi to hPa'] = function () {
  const expected = 689.47573;
  const actual = convert(10).from('psi').to('hPa');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

module.exports = tests;
