import { Measure, Unit } from './../index.js';
export type ReactiveEnergyUnits = ReactiveEnergySIUnits;
export type ReactiveEnergySystems = 'SI';

export type ReactiveEnergySIUnits =
  | 'VARh'
  | 'mVARh'
  | 'kVARh'
  | 'MVARh'
  | 'GVARh';

const SI: Record<ReactiveEnergySIUnits, Unit> = {
  VARh: {
    name: {
      singular: 'Volt-Ampere Reactive Hour',
      plural: 'Volt-Amperes Reactive Hour',
    },
    to_anchor: 1,
  },
  mVARh: {
    name: {
      singular: 'Millivolt-Ampere Reactive Hour',
      plural: 'Millivolt-Amperes Reactive Hour',
    },
    to_anchor: 0.001,
  },
  kVARh: {
    name: {
      singular: 'Kilovolt-Ampere Reactive Hour',
      plural: 'Kilovolt-Amperes Reactive Hour',
    },
    to_anchor: 1000,
  },
  MVARh: {
    name: {
      singular: 'Megavolt-Ampere Reactive Hour',
      plural: 'Megavolt-Amperes Reactive Hour',
    },
    to_anchor: 1000000,
  },
  GVARh: {
    name: {
      singular: 'Gigavolt-Ampere Reactive Hour',
      plural: 'Gigavolt-Amperes Reactive Hour',
    },
    to_anchor: 1000000000,
  },
};

const measure: Measure<ReactiveEnergySystems, ReactiveEnergyUnits> = {
  systems: {
    SI,
  },
};

export default measure;
