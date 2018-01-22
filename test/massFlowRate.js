var convert = require('../lib')
    , assert = require('assert')
    , tests = {}
    , ACCURACY = 1 / 1000
    , percentError = require('../lib/percentError');

tests['g/yr to kg/yr'] = function () {
    assert.strictEqual(convert(1000).from('g/yr').to('kg/yr'), 1);
};

tests['g/yr to t/yr'] = function () {
    assert.strictEqual(convert(1000000).from('g/yr').to('t/yr'), 1);
};

tests['kg/yr to g/yr'] = function () {
    assert.strictEqual(convert(1).from('kg/yr').to('g/yr'), 1000);
};

tests['kg/yr to t/yr'] = function () {
    assert.strictEqual(convert(1000).from('kg/yr').to('t/yr'), 1);
};

tests['t/yr to g/yr'] = function () {
    assert.strictEqual(convert(1).from('t/yr').to('g/yr'), 1000000);
};

tests['t/yr to kg/yr'] = function () {
    assert.strictEqual(convert(1).from('t/yr').to('kg/yr'), 1000);
};

module.exports = tests;