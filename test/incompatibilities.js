var convert = require('../lib')
  , assert = require('assert')
  , tests = {};

tests['ltr to kg throws'] = function () {
  assert.throws(function () {
    convert(2).from('ltr').to('kg');
  });
};

tests['fl-oz to oz throws'] = function () {
  assert.throws(function () {
    convert(4).from('fl-oz').to('oz');
  });
};

tests['kg to fl-oz throws'] = function () {
  assert.throws(function () {
    convert(4).from('kg').to('fl-oz');
  });
};

tests['kg to ft throws'] = function () {
  assert.throws(function () {
    convert(4).from('kg').to('fl-oz');
  });
};

tests['kg to nonexistant unit throws'] = function () {
  assert.throws(function () {
    convert(4).from('kg').to('garbage');
  });
};

tests['nonexistant unit to kg throws'] = function () {
  assert.throws(function () {
    convert(4).from('nonexistant unit');
  });
};

tests['.to before .from throws'] = function () {
  assert.throws(function () {
    convert(4).to('kg').from('fl-oz');
  });
};

module.exports = tests;
