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

test('list length not 0', () => {
  const convert = configureMeasurements({
    length,
  });
  const list = convert().list();
  expect(list.length).not.toBe(0);
});

test('list length should be 0', () => {
  const convert = configureMeasurements({});
  const list = convert().list();
  expect(list.length).toBe(0);
});

test('list has abbr key', () => {
  const convert = configureMeasurements({
    length,
  });
  const list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('abbr');
});

test('list abbr key is string', () => {
  const convert = configureMeasurements({
    length,
  });
  const list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.abbr).toBe('string');
});

test('list has measure key', () => {
  const convert = configureMeasurements({
    length,
  });
  const list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('measure');
});

test('list measure key is string', () => {
  const convert = configureMeasurements({
    length,
  });
  const list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.measure).toBe('string');
});

test('list has system key', () => {
  const convert = configureMeasurements({
    length,
  });
  const list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('system');
});

test('list system key is string', () => {
  const convert = configureMeasurements({
    length,
  });
  const list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.system).toBe('string');
});

test('list has singular key', () => {
  const convert = configureMeasurements({
    length,
  });
  const list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('singular');
});

test('list singular key is string', () => {
  const convert = configureMeasurements({
    length,
  });
  const list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.singular).toBe('string');
});

test('list has plural key', () => {
  const convert = configureMeasurements({
    length,
  });
  const list = convert().list(),
    firstItem = list[0];
  expect(Object.keys(firstItem)).toContain('plural');
});

test('list plural key is string', () => {
  const convert = configureMeasurements({
    length,
  });
  const list = convert().list(),
    firstItem = list[0];
  expect(typeof firstItem.plural).toBe('string');
});

test('list by measure', () => {
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
  const full = convert().list();
  const measures = convert().measures();

  measures.map(function (measure) {
    const list = convert().list(measure);

    expect(list.length > 0).toBeTruthy();
    expect(list.length < full.length).toBeTruthy();
  });
});

test('unsupported measure should throw', () => {
  const convert = configureMeasurements({});
  expect(() => {
    convert().list('BadMeasure');
  }).toThrow();
});
