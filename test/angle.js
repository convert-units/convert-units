var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');

tests['rad to rad'] = function () {
  assert.strictEqual( convert(1).from('rad').to('rad') , 1);
};

tests['deg to deg'] = function () {
  assert.strictEqual( convert(1).from('deg').to('deg') , 1);
};

tests['grad to grad'] = function () {
  assert.strictEqual( convert(1).from('grad').to('grad') , 1);
};

tests['arcmin to arcmin'] = function () {
  assert.strictEqual( convert(1).from('arcmin').to('arcmin') , 1);
};

tests['arcsec to arcsec'] = function () {
  assert.strictEqual( convert(1).from('arcsec').to('arcsec') , 1);
};

tests['deg to rad'] = function () {
  var expected = 6.28319
    , actual = convert(360).from('deg').to('rad');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['deg to grad'] = function () {
  assert.strictEqual( convert(360).from('deg').to('grad') , 400);
};

tests['deg to arcmin'] = function () {
  assert.strictEqual( convert(360).from('deg').to('arcmin') , 21600);
};

tests['deg to arcsec'] = function () {
  assert.strictEqual( convert(360).from('deg').to('arcsec') , 1.296e+6);
};

tests['rad to grad'] = function () {
  var expected = 636.62
    , actual = convert(10).from('rad').to('grad');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
};

tests['rad to arcsec'] = function () {
  var expected = 2.063e+6
    , actual = convert(10).from('rad').to('arcsec');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
}

tests['grad to arcmin'] = function () {
  assert.strictEqual( convert(5).from('grad').to('arcmin'), 270);
}

tests['grad to deg'] = function () {
  assert.strictEqual( convert(5).from('grad').to('deg'), 4.5);
}

tests['arcmin to rad'] = function () {
  var expected = 2.908882
    , actual = convert(10000).from('arcmin').to('rad');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
}

module.exports = tests;
