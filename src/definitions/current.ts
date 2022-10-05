import { Measure, Unit } from './../index.js';
export type CurrentUnits = CurrentSIUnits;
export type CurrentSystems = 'SI';

export type CurrentSIUnits = 'A' | 'mA' | 'kA';

const SI: Record<CurrentSIUnits, Unit> = {
  A: {
    name: {
      singular: 'Ampere',
      plural: 'Amperes',
    },
    to_anchor: 1,
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
};

const measure: Measure<CurrentSystems, CurrentUnits> = {
  systems: {
    SI,
  },
};
export default measure;
