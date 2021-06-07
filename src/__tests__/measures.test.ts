import configureMeasurements from '..';
import acceleration from '../definitions/acceleration';
import angle from '../definitions/angle';
import apparentPower from '../definitions/apparentPower';
import area from '../definitions/area';
import charge from '../definitions/charge';
import current from '../definitions/current';
import digital from '../definitions/digital';
import each from '../definitions/each';
import energy from '../definitions/energy';
import force from '../definitions/force';
import frequency from '../definitions/frequency';
import illuminance from '../definitions/illuminance';
import length from '../definitions/length';
import mass from '../definitions/mass';
import pace from '../definitions/pace';
import partsPer from '../definitions/partsPer';
import pieces from '../definitions/pieces';
import power from '../definitions/power';
import pressure from '../definitions/pressure';
import reactiveEnergy from '../definitions/reactiveEnergy';
import reactivePower from '../definitions/reactivePower';
import speed from '../definitions/speed';
import temperature from '../definitions/temperature';
import time from '../definitions/time';
import voltage from '../definitions/voltage';
import volume from '../definitions/volume';
import volumeFlowRate from '../definitions/volumeFlowRate';

test('measures', () => {
  const convert = configureMeasurements({
    length,
    area,
    mass,
    volume,
    each,
    temperature,
    time,
    digital,
    partsPer,
    speed,
    pace,
    pressure,
    current,
    voltage,
    power,
    reactivePower,
    apparentPower,
    energy,
    reactiveEnergy,
    volumeFlowRate,
    illuminance,
    frequency,
    angle,
    charge,
    force,
    acceleration,
    pieces,
  });
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
