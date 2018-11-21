var convert = require('../lib')
  , assert = require('assert')
  , tests = {}


tests['g/l to mg/l'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('mg/l') , 1e3);
};

tests['ppm to mg/l'] = function () {
  assert.strictEqual( convert(1).from('ppm').to('mg/l') , 1);
};

tests['g/l to ug/l'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('ug/l') , 1e6);
};

tests['g/l to ng/l'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('ng/l') , 1e9);
};

tests['g/l to pg/l'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('pg/l') , 1e12);
};

tests['pg/l to g/l'] = function () {
  assert.strictEqual( convert(1).from('pg/l').to('g/l') , 1e-12);
};

tests['g/l to kg/m3'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('kg/m3') , 1);
};

tests['g/l to g/m3'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('g/m3') , 1e3);
};

tests['g/l to mg/m3'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('mg/m3') , 1e6);
};

tests['g/l to ug/m3'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('ug/m3') , 1e9);
};

tests['g/l to ng/m3'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('ng/m3') , 1e12);
};

tests['g/l to NTU'] = function () {
  assert.strictEqual( convert(1).from('g/l').to('NTU') , 1e3);
};

// partsPer
tests['ppm to ppm'] = function () {
  assert.strictEqual( convert(1).from('ppm').to('ppm') , 1);
};

tests['ppb to ppb'] = function () {
  assert.strictEqual( convert(1).from('ppb').to('ppb') , 1);
};

/*tests['ppm to ppb'] = function () {
  assert.strictEqual( convert(1).from('ppm').to('ppb') , 1000);
};*/

tests['ppb to ppm'] = function () {
  assert.strictEqual( convert(1).from('ppb').to('ppm') , .001);
};

tests['ppt to ppt'] = function () {
  assert.strictEqual( convert(1).from('ppt').to('ppt'), 1);
}

tests['ppm to ppt'] = function () {
  assert.strictEqual( convert(1).from('ppm').to('ppt'), 1000000);
}

tests['ppt to ppb'] = function () {
  assert.strictEqual( convert(1).from('ppt').to('ppb'), .001);
}

tests['ppt to ppm'] = function () {
  assert.strictEqual( convert(1).from('ppt').to('ppm'), .000001);
}

tests['ppq to ppq'] = function () {
  assert.strictEqual( convert(1).from('ppq').to('ppq'), 1);
}

tests['ppq to ppt'] = function () {
  assert.strictEqual( convert(1).from('ppq').to('ppt'), .001);
}

tests['ppq to ppm'] = function () {
  assert.strictEqual( convert(1).from('ppq').to('ppm'), .000000001);
}

module.exports = tests;
