const convert = require('..');

test('measures', () => {
  var actual = convert().measures(),
    expected = [
      'length',
      'area',
      'mass',
      'volume',
      'each',
      'temperature',
      'time',
      'digital',
      'partsPer',
      'speed',
      'pace',
      'pressure',
      'current',
      'voltage',
      'power',
      'reactivePower',
      'apparentPower',
      'energy',
      'reactiveEnergy',
      'volumeFlowRate',
      'illuminance',
      'frequency',
      'angle',
      'charge',
      'force',
      'acceleration',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});
