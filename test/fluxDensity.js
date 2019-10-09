var convert = require('../lib'),
    assert = require('assert'),
    tests = {};

tests['Jy to Jy'] = function () {
    assert.strictEqual( convert(1).from('Jy').to('Jy'), 1);
};

tests['mJy to mJy'] = function () {
    assert.strictEqual( convert(1).from('mJy').to('mJy'), 1);
};

tests['μJy to μJy'] = function () {
    assert.strictEqual( convert(1).from('μJy').to('μJy'), 1);
};

tests['nJy to nJy'] = function () {
    assert.strictEqual( convert(1).from('nJy').to('nJy'), 1);
};

tests['nJy to Jy'] = function () {
    assert.strictEqual( convert(1).from('nJy').to('Jy'), 0.000000001);
};

tests['mJy to nJy'] = function () {
    assert.strictEqual( convert(1).from('mJy').to('nJy'), 1000000);
};

tests['Jy to nJy'] = function () {
    assert.strictEqual( convert(1).from('μJy').to('Jy'), 0.000001);
}

tests['nJy to μJy'] = function () {
    assert.strictEqual( convert(1).from('nJy').to('μJy'), 0.001);
};

module.exports = tests;
