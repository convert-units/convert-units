import { Measure, Unit } from './../index.js';
export type EachUnits = EachMetricUnits;
export type EachSystems = 'metric';

export type EachMetricUnits = 'ea' | 'dz';

const metric: Record<EachMetricUnits, Unit> = {
  ea: {
    name: {
      singular: 'Each',
      plural: 'Each',
    },
    to_anchor: 1,
  },
  dz: {
    name: {
      singular: 'Dozen',
      plural: 'Dozens',
    },
    to_anchor: 12,
  },
};

const measure: Measure<EachSystems, EachUnits> = {
  systems: {
    metric,
  },
};

export default measure;
