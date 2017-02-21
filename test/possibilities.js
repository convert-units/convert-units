var convert = require('../lib')
  , assert = require('assert-diff')
  , tests = {};

assert.options.strict = true;

tests['l possibilities'] = function () {
  var actual = convert().from('l').possibilities()
    , expected = [ 'mm3', 'cm3', 'ml', 'cl', 'dl', 'l', 'm3', 'km3', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['kg possibilities'] = function () {
  var actual = convert().from('kg').possibilities()
    , expected = [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['m possibilities'] = function () {
  var actual = convert().from('m').possibilities()
    , expected = [ 'mm', 'cm', 'm', 'km', 'in', 'yd', 'ft', 'mi' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['each possibilities'] = function () {
  var actual = convert().possibilities('each')
    , expected = [ 'ea' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['mass possibilities'] = function () {
  var actual = convert().possibilities('mass')
    , expected = [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['volume possibilities'] = function () {
  var actual = convert().possibilities('volume')
    , expected = [ 'mm3', 'cm3', 'ml', 'cl', 'dl', 'l', 'm3', 'km3', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['length possibilities'] = function () {
  var actual = convert().possibilities('length')
    , expected = [ 'mm', 'cm', 'm', 'km', 'in', 'yd', 'ft', 'mi' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['temperature possibilities'] = function () {
  var actual = convert().possibilities('temperature')
    , expected = ['C', 'K', 'F'];
  assert.deepEqual(actual.sort(), expected.sort())
}

tests['time possibilities'] = function () {
  var actual = convert().possibilities('time')
    , expected = ['ns', 'mu', 'ms', 's', 'min', 'h', 'd', 'week', 'month', 'year']
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['digital possibilities'] = function() {
  var actual = convert().possibilities('digital')
    , expected = [ 'b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['partsPer possibilities'] = function() {
  var actual = convert().possibilities('partsPer')
    , expected = [ 'ppm', 'ppb', 'ppt', 'ppq' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['pressure possibilities'] = function() {
  var actual = convert().possibilities('pressure')
    , expected = [ 'Pa', 'kPa', 'MPa', 'hPa', 'bar', 'torr', 'psi', 'ksi'];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['speed possibilities'] = function() {
  var actual = convert().possibilities('speed')
    , expected = [ 'm/s', 'km/h', 'm/h', 'knot', 'ft/s'];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['all possibilities'] = function () {
  var actual = convert().possibilities()
    // Please keep these sorted for maintainability
    , expected = [
        'B'
      , 'C'
      , 'F'
      , 'GB'
      , 'Gb'
      , 'K'
      , 'KB'
      , 'Kb'
      , 'MB'
      , 'MPa'
      , 'Mb'
      , 'Pa'
      , 'TB'
      , 'Tb'
      , 'Tbs'
      , 'ac'
      , 'b'
      , 'bar'
      , 'cl'
      , 'cm'
      , 'cm2'
      , 'cm3'
      , 'cup'
      , 'd'
      , 'dl'
      , 'ea'
      , 'fl-oz'
      , 'ft'
      , 'ft/s'
      , 'ft2'
      , 'ft3'
      , 'g'
      , 'gal'
      , 'glas'
      , 'h'
      , 'hPa'
      , 'ha'
      , 'in'
      , 'in2'
      , 'in3'
      , 'kPa'
      , 'kanna'
      , 'kg'
      , 'kkp'
      , 'km'
      , 'km/h'
      , 'km2'
      , 'km3'
      , 'knot'
      , 'krm'
      , 'ksi'
      , 'l'
      , 'lb'
      , 'm'
      , 'm/h'
      , 'm/s'
      , 'm2'
      , 'm3'
      , 'mcg'
      , 'mg'
      , 'mi'
      , 'mi2'
      , 'min'
      , 'ml'
      , 'mm'
      , 'mm2'
      , 'mm3'
      , 'month'
      , 'ms'
      , 'msk'
      , 'mu'
      , 'ns'
      , 'oz'
      , 'pnt'
      , 'ppb'
      , 'ppm'
      , 'ppq'
      , 'ppt'
      , 'psi'
      , 'qt'
      , 's'
      , 'torr'
      , 'tsk'
      , 'tsp'
      , 'week'
      , 'yd'
      , 'yd2'
      , 'yd3'
      , 'year'
  ];
  try {
    assert.deepEqual(actual.sort(), expected.sort())
  }
  catch (e) {
    // This gets too long, and gets truncated
    process.stderr.write(e + '\n');
    throw e;
  }
};

module.exports = tests;
