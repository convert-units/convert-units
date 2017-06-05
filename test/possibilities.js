var convert = require('../lib')
  , assert = require('assert-diff')
  , tests = {};

assert.options.strict = true;

tests['l possibilities'] = function () {
  var actual = convert().from('l').possibilities()
    , expected = [ 'mm3', 'cm3', 'ml', 'cl', 'dl', 'l', 'kl', 'm3', 'km3', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['kg possibilities'] = function () {
  var actual = convert().from('kg').possibilities()
    , expected = [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['m possibilities'] = function () {
  var actual = convert().from('m').possibilities()
    , expected = [ 'mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'mi' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['each possibilities'] = function () {
  var actual = convert().possibilities('each')
    , expected = [ 'ea', 'dz' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['mass possibilities'] = function () {
  var actual = convert().possibilities('mass')
    , expected = [ 'mcg', 'mg', 'g', 'kg', 'oz', 'lb' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['volume possibilities'] = function () {
  var actual = convert().possibilities('volume')
    , expected = [ 'mm3', 'cm3', 'ml', 'cl', 'dl', 'l', 'kl', 'm3', 'km3', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['volume flow rate possibilities'] = function () {
  var actual = convert().possibilities('volumeFlowRate')
    , expected = [ 'mm3/s', 'cm3/s', 'ml/s', 'cl/s', 'dl/s', 'l/s', 'l/min', 'l/h', 'kl/s', 'kl/min', 'kl/h', 'm3/s', 'm3/min', 'm3/h', 'km3/s', 'tsp/s', 'Tbs/s', 'in3/s', 'in3/min', 'in3/h', 'fl-oz/s', 'fl-oz/min', 'fl-oz/h', 'cup/s', 'pnt/s', 'pnt/min', 'pnt/h', 'qt/s', 'gal/s', 'gal/min', 'gal/h', 'ft3/s', 'ft3/min', 'ft3/h', 'yd3/s', 'yd3/min', 'yd3/h' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['length possibilities'] = function () {
  var actual = convert().possibilities('length')
    , expected = [ 'mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'mi' ];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['temperature possibilities'] = function () {
  var actual = convert().possibilities('temperature')
    , expected = ['C', 'K', 'F', 'R'];
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

tests['current possibilities'] = function() {
  var actual = convert().possibilities('current')
    , expected = [ 'A', 'mA', 'kA'];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['voltage possibilities'] = function() {
  var actual = convert().possibilities('voltage')
    , expected = [ 'V', 'mV', 'kV'];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['power possibilities'] = function() {
  var actual = convert().possibilities('power')
    , expected = [ 'W', 'mW', 'kW', 'MW', 'GW'];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['reactive power possibilities'] = function() {
  var actual = convert().possibilities('reactivePower')
    , expected = [ 'VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR'];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['apparent power possibilities'] = function() {
  var actual = convert().possibilities('apparentPower')
    , expected = [ 'VA', 'mVA', 'kVA', 'MVA', 'GVA'];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['energy possibilities'] = function() {
  var actual = convert().possibilities('energy')
    , expected = [ 'Wh', 'mWh', 'kWh', 'MWh', 'GWh', 'J', 'kJ'];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['reactive energy possibilities'] = function() {
  var actual = convert().possibilities('reactiveEnergy')
    , expected = [ 'VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh'];
  assert.deepEqual(actual.sort(), expected.sort())
};

tests['all possibilities'] = function () {
  var actual = convert().possibilities()
    // Please keep these sorted for maintainability
    , expected = [
        'A'
      , 'B'
      , 'C'
      , 'F'
      , 'R'
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
      , 'ac'
      , 'b'
      , 'bar'
      , 'cl'
      , 'cl/s'
      , 'cm'
      , 'cm2'
      , 'cm3'
      , 'cm3/s'
      , 'cup'
      , 'cup/s'
      , 'd'
      , 'dl'
      , 'dl/s'
      , 'ea'
      , 'dz'
      , 'fl-oz'
      , 'fl-oz/h'
      , 'fl-oz/min'
      , 'fl-oz/s'
      , 'ft-us'
      , 'ft'
      , 'ft/s'
      , 'ft2'
      , 'ft3'
      , 'ft3/h'
      , 'ft3/min'
      , 'ft3/s'
      , 'g'
      , 'gal'
      , 'gal/h'
      , 'gal/min'
      , 'gal/s'
      , 'glas'
      , 'GVA'
      , 'GVAR'
      , 'GVARh'
      , 'GW'
      , 'GWh'
      , 'h'
      , 'hPa'
      , 'ha'
      , 'in'
      , 'in2'
      , 'in3'
      , 'in3/h'
      , 'in3/min'
      , 'in3/s'
      , 'J'
      , 'kA'
      , 'kPa'
      , 'kanna'
      , 'kg'
      , 'kkp'
      , 'kJ'
      , 'kl'
      , 'kl/h'
      , 'kl/min'
      , 'kl/s'
      , 'km'
      , 'km/h'
      , 'km2'
      , 'km3'
      , 'km3/s'
      , 'knot'
      , 'krm'
      , 'ksi'
      , 'kV'
      , 'kVA'
      , 'kVAR'
      , 'kVARh'
      , 'kW'
      , 'kWh'
      , 'l'
      , 'l/h'
      , 'l/min'
      , 'l/s'
      , 'lb'
      , 'm'
      , 'm/h'
      , 'm/s'
      , 'm2'
      , 'm3'
      , 'm3/h'
      , 'm3/min'
      , 'm3/s'
      , 'mA'
      , 'mcg'
      , 'mg'
      , 'mi'
      , 'mi2'
      , 'min'
      , 'ml'
      , 'ml/s'
      , 'mm'
      , 'mm2'
      , 'mm3'
      , 'mm3/s'
      , 'month'
      , 'ms'
      , 'msk'
      , 'mu'
      , 'mV'
      , 'mVA'
      , 'MVA'
      , 'mVAR'
      , 'MVAR'
      , 'mVARh'
      , 'MVARh'
      , 'mW'
      , 'MW'
      , 'mWh'
      , 'MWh'
      , 'ns'
      , 'oz'
      , 'pnt'
      , 'pnt/h'
      , 'pnt/min'
      , 'pnt/s'
      , 'ppb'
      , 'ppm'
      , 'ppq'
      , 'ppt'
      , 'psi'
      , 'qt'
      , 'qt/s'
      , 's'
      , 'Tbs'
      , 'Tbs/s'
      , 'torr'
      , 'tsk'
      , 'tsp'
      , 'tsp/s'
      , 'V'
      , 'VA'
      , 'VAR'
      , 'VARh'
      , 'W'
      , 'week'
      , 'Wh'
      , 'yd'
      , 'yd2'
      , 'yd3'
      , 'yd3/h'
      , 'yd3/min'
      , 'yd3/s'
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
