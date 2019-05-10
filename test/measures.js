var convert = require('../lib')
	, assert = require('assert')
	, tests = {};

tests['measures'] = function () {
	console.log(convert().measures())
	var actual = convert().measures()
		, expected = [ 'length',
			'area',
			'mass',
			'volume',
			'each',
			'temperature',
			'time',
			'digital',
			'partsPer',
			'speed',
			'pressure',
			'current',
			'voltage',
			'power',
			'reactivePower',
			'apparentPower',
			'energy',
			'reactiveEnergy',
			'volumeFlowRate',
			'cropRate',
			'volumeCropRate',
			'bushelCropRate',
			'metricTonneCropRate',
			'seedRate'
		];
	assert.deepEqual(actual, expected);
};

module.exports = tests;
