import { Measure, Unit } from './../index.js';
export type CurrentUnits = CurrentSIUnits;
export type CurrentSystems = 'SI';

export type CurrentSIUnits = 'A' | 'μA' | 'mA' | 'kA' | 'MA';

const SI: Record<CurrentSIUnits, Unit> = {
  A: {
    name: {
      singular: 'Ampere',
      plural: 'Amperes',
    },
    to_anchor: 1,
  },
  μA: {
    name: {
      singular: 'Microampere',
      plural: 'Microamperes',
    },
    to_anchor: 1e-6,
  },
  mA: {
    name: {
      singular: 'Milliampere',
      plural: 'Milliamperes',
    },
    to_anchor: 0.001,
  },
  kA: {
    name: {
      singular: 'Kiloampere',
      plural: 'Kiloamperes',
    },
    to_anchor: 1000,
  },
  MA: {
    name: {
      singular: 'Megaampere',
      plural: 'Megaamperes',
    },
    to_anchor: 1e6,
  },
};

const measure: Measure<CurrentSystems, CurrentUnits> = {
  systems: {
    SI,
  },
};
export default measure;
