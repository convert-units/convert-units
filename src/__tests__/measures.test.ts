import convert from '..';

test('measures', () => {
  const actual = convert().measures(),
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
      'pieces',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});
