import { Measure, Unit } from './../index.js';
export type PartsPerUnits = PartsPerSIUnits;
export type PartsPerSystems = 'SI';

export type PartsPerSIUnits = 'ppm' | 'ppb' | 'ppt' | 'ppq';

const SI: Record<PartsPerSIUnits, Unit> = {
  ppm: {
    name: {
      singular: 'Part-per Million',
      plural: 'Parts-per Million',
    },
    to_anchor: 1,
  },
  ppb: {
    name: {
      singular: 'Part-per Billion',
      plural: 'Parts-per Billion',
    },
    to_anchor: 0.001,
  },
  ppt: {
    name: {
      singular: 'Part-per Trillion',
      plural: 'Parts-per Trillion',
    },
    to_anchor: 0.000001,
  },
  ppq: {
    name: {
      singular: 'Part-per Quadrillion',
      plural: 'Parts-per Quadrillion',
    },
    to_anchor: 0.000000001,
  },
};

const measure: Measure<PartsPerSystems, PartsPerUnits> = {
  systems: {
    SI,
  },
};

export default measure;
