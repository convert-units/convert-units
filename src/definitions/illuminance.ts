import { Measure, Unit } from './../index.js';
export type IlluminanceUnits =
  | IlluminanceMetricUnits
  | IlluminanceImperialUnits;
export type IlluminanceSystems = 'metric' | 'imperial';

export type IlluminanceMetricUnits = 'lx';
export type IlluminanceImperialUnits = 'ft-cd';

const metric: Record<IlluminanceMetricUnits, Unit> = {
  lx: {
    name: {
      singular: 'Lux',
      plural: 'Lux',
    },
    to_anchor: 1,
  },
};

const imperial: Record<IlluminanceImperialUnits, Unit> = {
  'ft-cd': {
    name: {
      singular: 'Foot-candle',
      plural: 'Foot-candles',
    },
    to_anchor: 1,
  },
};

const measure: Measure<IlluminanceSystems, IlluminanceUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 1 / 10.76391,
      },
    },
    imperial: {
      metric: {
        ratio: 10.76391,
      },
    },
  },
};

export default measure;
