import { Measure, Unit } from './../index.js';
export type TorqueUnits = TorqueMetricUnits | TorqueImperialUnits;
export type TorqueSystems = 'metric' | 'imperial';

export type TorqueMetricUnits = 'Nm';
export type TorqueImperialUnits = 'lbf-ft';

const metric: Record<TorqueMetricUnits, Unit> = {
  Nm: {
    name: {
      singular: 'Newton-meter',
      plural: 'Newton-meters',
    },
    to_anchor: 1,
  },
};

const imperial: Record<TorqueImperialUnits, Unit> = {
  'lbf-ft': {
    name: {
      singular: 'Pound-foot',
      plural: 'Pound-feet',
    },
    to_anchor: 1,
  },
};

const measure: Measure<TorqueSystems, TorqueUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 1 / 1.355818,
      },
    },
    imperial: {
      metric: {
        ratio: 1.355818,
      },
    },
  },
};

export default measure;
