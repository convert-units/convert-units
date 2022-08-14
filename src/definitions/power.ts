import { Measure, Unit } from './../index.js';
export type PowerUnits = PowerMetricUnits | PowerImperialUnits;
export type PowerSystems = 'metric' | 'imperial';

export type PowerMetricUnits = 'W' | 'mW' | 'kW' | 'MW' | 'GW' | 'PS';
export type PowerImperialUnits = 'Btu/s' | 'ft-lb/s' | 'hp';

const metric: Record<PowerMetricUnits, Unit> = {
  W: {
    name: {
      singular: 'Watt',
      plural: 'Watts',
    },
    to_anchor: 1,
  },
  mW: {
    name: {
      singular: 'Milliwatt',
      plural: 'Milliwatts',
    },
    to_anchor: 0.001,
  },
  kW: {
    name: {
      singular: 'Kilowatt',
      plural: 'Kilowatts',
    },
    to_anchor: 1000,
  },
  MW: {
    name: {
      singular: 'Megawatt',
      plural: 'Megawatts',
    },
    to_anchor: 1000000,
  },
  GW: {
    name: {
      singular: 'Gigawatt',
      plural: 'Gigawatts',
    },
    to_anchor: 1000000000,
  },
  PS: {
    name: {
      singular: 'Horsepower (metric)',
      plural: 'Horsepower (metric)',
    },
    to_anchor: 735.49875,
  },
};

const imperial: Record<PowerImperialUnits, Unit> = {
  'Btu/s': {
    name: {
      singular: 'British thermal unit per second',
      plural: 'British thermal units per second',
    },
    to_anchor: 778.16937,
  },
  'ft-lb/s': {
    name: {
      singular: 'Foot-pound per second',
      plural: 'Foot-pounds per second',
    },
    to_anchor: 1,
  },
  hp: {
    name: {
      singular: 'Horsepower (British)',
      plural: 'Horsepower (British)',
    },
    to_anchor: 550,
  },
};

const measure: Measure<PowerSystems, PowerUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.737562149,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 0.737562149,
      },
    },
  },
};

export default measure;
