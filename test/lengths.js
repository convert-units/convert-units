const assert = require('assert');
const convert = require('../src/originalConvert');

const tests = {};
const ACCURACY = 1 / 1000;
const percentError = require('../lib/percentError');

tests['ft to ft'] = function () {
  assert.strictEqual(convert(1).from('ft').to('ft'), 1);
};

tests['ft to ft-us'] = function () {
  assert.strictEqual(convert(1).from('ft').to('ft-us'), 0.999998000004);
};

tests['ft-us to ft'] = function () {
  assert.strictEqual(convert(1).from('ft-us').to('ft'), 1.000002);
};

tests['in to in'] = function () {
  assert.strictEqual(convert(7).from('in').to('in'), 7);
};

tests['ft to in'] = function () {
  assert.strictEqual(convert(1).from('ft').to('in'), 12);
};

tests['in to ft'] = function () {
  assert.strictEqual(convert(1).from('in').to('ft'), 1 / 12);
};

tests['ft to mi'] = function () {
  assert.strictEqual(convert(1).from('ft').to('mi'), 1 / 5280);
};

tests['mi to ft'] = function () {
  assert.strictEqual(convert(1).from('mi').to('ft'), 5280);
};

tests['nMi to mi'] = function () {
  assert.strictEqual(convert(1).from('nMi').to('mi'), 1.150780303030303);
};

tests['m to m'] = function () {
  assert.strictEqual(convert(1).from('m').to('m'), 1);
};

tests['m to cm'] = function () {
  assert.strictEqual(convert(1).from('m').to('cm'), 100);
};

tests['cm to m'] = function () {
  assert.strictEqual(convert(1).from('cm').to('m'), 1 / 100);
};

tests['m to mm'] = function () {
  assert.strictEqual(convert(1).from('m').to('mm'), 1000);
};

tests['km to m'] = function () {
  assert.strictEqual(convert(1).from('km').to('m'), 1000);
};

// When converting between systems, expect < 0.1% error
tests['m to ft'] = function () {
  const expected = 3.28084;
  const actual = convert(1).from('m').to('ft');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

// When converting between systems, expect < 0.1% error
tests['m to ft-us'] = function () {
  const expected = 3.28084;
  const actual = convert(1).from('m').to('ft-us');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

tests['mm to ft'] = function () {
  const expected = 0.00328084;
  const actual = convert(1).from('mm').to('ft');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

tests['nMi to m'] = function () {
  const expected = 1852;
  const actual = convert(1).from('nMi').to('m');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

tests['km to nMi'] = function () {
  const expected = 0.539956803;
  const actual = convert(1).from('km').to('nMi');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

tests['fathm to m'] = function () {
  const expected = 1.8288;
  const actual = convert(1).from('fathom').to('m');
  assert.ok(
    percentError(expected, actual) < ACCURACY,
    `Expected: ${expected}, Actual: ${actual}`
  );
};

module.exports = tests;
