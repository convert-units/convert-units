var convert = require('../lib')
  , assert = require('assert')
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError')
  , tests = {};

tests['Wh to Wh'] = function () {
  assert.strictEqual( convert(1).from('Wh').to('Wh') , 1);
};

tests['mWh to mWh'] = function () {
  assert.strictEqual( convert(1).from('mWh').to('mWh') , 1);
};

tests['kWh to kWh'] = function () {
  assert.strictEqual( convert(1).from('kWh').to('kWh') , 1);
};

tests['MWh to MWh'] = function () {
  assert.strictEqual( convert(1).from('MWh').to('MWh') , 1);
};

tests['GWh to GWh'] = function () {
  assert.strictEqual( convert(1).from('GWh').to('GWh') , 1);
};

tests['J to J'] = function () {
  assert.strictEqual( convert(1).from('J').to('J') , 1);
};

tests['kJ to kJ'] = function () {
  assert.strictEqual( convert(1).from('kJ').to('kJ') , 1);
};

tests['Wh to J'] = function () {
  assert.strictEqual( convert(1).from('Wh').to('J') , 3600);
};

tests['Wh to mWh'] = function () {
  assert.strictEqual( convert(1).from('Wh').to('mWh') , 1000);
};

tests['Wh to kWh'] = function () {
  assert.strictEqual( convert(1).from('Wh').to('kWh') , 0.001);
};

tests['Wh to MWh'] = function () {
  assert.strictEqual( convert(1).from('Wh').to('MWh') , 0.000001);
};

tests['Wh to GWh'] = function () {
  assert.strictEqual( convert(1).from('Wh').to('GWh') , 0.000000001);
};

tests['GWh to mWh'] = function () {
  assert.strictEqual( convert(1).from('GWh').to('mWh'), 1000000000000);
}

tests['GWh to J'] = function () {
  assert.strictEqual( convert(1).from('GWh').to('J'), 3600000000000);
}

tests['MWh to mWh'] = function () {
  assert.strictEqual( convert(1).from('MWh').to('mWh'), 1000000000);
}

tests['kWh to mWh'] = function () {
  assert.strictEqual( convert(1).from('kWh').to('mWh'), 1000000);
}

tests['mWh to kWh'] = function () {
  assert.strictEqual( convert(1).from('mWh').to('kWh'), 0.000001);
}

tests['mWh to Wh'] = function () {
  assert.strictEqual( convert(1).from('mWh').to('Wh'), 0.001);
}

tests['kWh to Wh'] = function () {
  assert.strictEqual( convert(1).from('kWh').to('Wh'), 1000);
}

tests['kWh to kJ'] = function () {
  assert.strictEqual( convert(1).from('kWh').to('kJ'), 3600);
}

tests['cal to btu'] = function () {
  var expected = 0.00396567
    , actual = convert(1).from('cal').to('btu');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
}

tests['lb-ft to J'] = function () {
  var expected = 0.737562
    , actual = convert(1).from('lb-ft').to('J');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
}

tests['J to lb-ft'] = function () {
  var expected = 1/0.737562
    , actual = convert(1).from('J').to('lb-ft');
  assert.ok( percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected +', Actual: ' + actual);
}

module.exports = tests;
