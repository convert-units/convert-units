const assert = require('assert');
const convert = require('../src/originalConvert');

const tests = {};

tests['ppm to ppm'] = function () {
  assert.strictEqual(convert(1).from('ppm').to('ppm'), 1);
};

tests['ppb to ppb'] = function () {
  assert.strictEqual(convert(1).from('ppb').to('ppb'), 1);
};

tests['ppm to ppb'] = function () {
  assert.strictEqual(convert(1).from('ppm').to('ppb'), 1000);
};

tests['ppb to ppm'] = function () {
  assert.strictEqual(convert(1).from('ppb').to('ppm'), 0.001);
};

tests['ppt to ppt'] = function () {
  assert.strictEqual(convert(1).from('ppt').to('ppt'), 1);
};

tests['ppm to ppt'] = function () {
  assert.strictEqual(convert(1).from('ppm').to('ppt'), 1000000);
};

tests['ppt to ppb'] = function () {
  assert.strictEqual(convert(1).from('ppt').to('ppb'), 0.001);
};

tests['ppt to ppm'] = function () {
  assert.strictEqual(convert(1).from('ppt').to('ppm'), 0.000001);
};

tests['ppq to ppq'] = function () {
  assert.strictEqual(convert(1).from('ppq').to('ppq'), 1);
};

tests['ppq to ppt'] = function () {
  assert.strictEqual(convert(1).from('ppq').to('ppt'), 0.001);
};

tests['ppq to ppm'] = function () {
  assert.strictEqual(convert(1).from('ppq').to('ppm'), 0.000000001);
};

module.exports = tests;
