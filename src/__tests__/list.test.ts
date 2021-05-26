import configureMeasurements from '..';
import length from '../definitions/length';
import area from '../definitions/area';
import mass from '../definitions/mass';
import volume from '../definitions/volume';
import each from '../definitions/each';
import temperature from '../definitions/temperature';
import time from '../definitions/time';
import digital from '../definitions/digital';
import partsPer from '../definitions/partsPer';
import speed from '../definitions/speed';
import pace from '../definitions/pace';
import pressure from '../definitions/pressure';
import current from '../definitions/current';
import voltage from '../definitions/voltage';
import power from '../definitions/power';
import reactivePower from '../definitions/reactivePower';
import apparentPower from '../definitions/apparentPower';
import energy from '../definitions/energy';
import reactiveEnergy from '../definitions/reactiveEnergy';
import volumeFlowRate from '../definitions/volumeFlowRate';
import illuminance from '../definitions/illuminance';
import frequency from '../definitions/frequency';
import angle from '../definitions/angle';
import charge from '../definitions/charge';
import force from '../definitions/force';
import acceleration from '../definitions/acceleration';
import pieces from '../definitions/pieces';

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
