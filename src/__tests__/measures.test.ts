import configureMeasurements from '..';
import allMeausures, {
  AllMeasures,
  AllMeasuresSystems,
  AllMeasuresUnits,
} from '../definitions';

test('measures', () => {
  const convert = configureMeasurements<
    AllMeasures,
    AllMeasuresSystems,
    AllMeasuresUnits
  >(allMeausures);
  const actual = convert().measures(),
    expected = [
      'acceleration',
      'angle',
      'apparentPower',
      'area',
      'charge',
      'current',
      'digital',
      'each',
      'energy',
      'force',
      'frequency',
      'illuminance',
      'length',
      'liquid',
      'mass',
      'milimol',
      'pace',
      'partsPer',
      'pieces',
      'power',
      'pressure',
      'reactiveEnergy',
      'reactivePower',
      'speed',
      'temperature',
      'time',
      'voltage',
      'volume',
      'volumeFlowRate',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});
