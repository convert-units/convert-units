import { Measure, Unit } from './../index.js';
export type PaceUnits = PaceMetricUnits | PaceImperialUnits;
export type PaceSystems = 'metric' | 'imperial';

export type PaceMetricUnits = 'min/km' | 's/m';
export type PaceImperialUnits = 'min/mi' | 's/ft';

const metric: Record<PaceMetricUnits, Unit> = {
  'min/km': {
    name: {
      singular: 'Minute per kilometre',
      plural: 'Minutes per kilometre',
    },
    to_anchor: 0.06,
  },
  's/m': {
    name: {
      singular: 'Second per metre',
      plural: 'Seconds per metre',
    },
    to_anchor: 1,
  },
};

const imperial: Record<PaceImperialUnits, Unit> = {
  'min/mi': {
    name: {
      singular: 'Minute per mile',
      plural: 'Minutes per mile',
    },
    to_anchor: 0.0113636,
  },
  's/ft': {
    name: {
      singular: 'Second per foot',
      plural: 'Seconds per foot',
    },
    to_anchor: 1,
  },
};

const measure: Measure<PaceSystems, PaceUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.3048,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 0.3048,
      },
    },
  },
};

export default measure;
