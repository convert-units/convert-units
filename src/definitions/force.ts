import { Measure, Unit } from './../index.js';
export type ForceUnits = ForceSIUnits;
export type ForceSystems = 'SI';

export type ForceSIUnits = 'N' | 'kN' | 'lbf' | 'kgf';

const SI: Record<ForceSIUnits, Unit> = {
  N: {
    name: {
      singular: 'Newton',
      plural: 'Newtons',
    },
    to_anchor: 1,
  },
  kN: {
    name: {
      singular: 'Kilonewton',
      plural: 'Kilonewtons',
    },
    to_anchor: 1000,
  },
  lbf: {
    name: {
      singular: 'Pound-force',
      plural: 'Pound-forces',
    },
    to_anchor: 4.4482216152605, // 0.45359237 kg × 9.80665 m/s²
  },
  kgf: {
    name: {
      singular: 'Kilogram-force',
      plural: 'Kilogram-forces',
    },
    to_anchor: 9.80665,
  },
};

const measure: Measure<ForceSystems, ForceUnits> = {
  systems: {
    SI,
  },
};

export default measure;
