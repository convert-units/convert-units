var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , ACCURACY = 1/1000
  , percentError = require('../lib/percentError');


tests['sec to ms'] = function () {
  assert.strictEqual( convert(1).from('sec').to('ms') , 1000);
};

tests['min to sec'] = function () {
  assert.strictEqual( convert(1).from('min').to('sec') , 60);
};

tests['hour to sec'] = function () {
  assert.strictEqual( convert(1).from('hour').to('sec') , 3600);
};

tests['day to sec'] = function () {
  assert.strictEqual( convert(1).from('day').to('sec') , 86400);
};

module.exports = tests;
