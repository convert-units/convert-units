import { Measure, Unit } from './../index.js';
export type TorqueUnits = TorqueMetricUnits | TorqueImperialUnits;
export type TorqueSystems = 'metric' | 'imperial';

export type TorqueMetricUnits = 'Nm' | 'kgm' | 'kg_cm';
export type TorqueImperialUnits = 'lbf-ft' | 'lbf_ft' | 'lbf_in' | 'ozf_in';

const metric: Record<TorqueMetricUnits, Unit> = {
  Nm: {
    name: {
      singular: 'Newton-meter',
      plural: 'Newton-meters',
    },
    to_anchor: 1,
  },
  kgm: {
    name: {
      singular: "Kilogram/meter",
      plural: "Kilograms/meter"
    },
    to_anchor: 1 / 0.1019716213
  },
  kg_cm: {
    name: {
      singular: "Kilogram/Centimeter",
      plural: "Kilograms/Centimeter"
    },
    to_anchor: 1 / 10.19716213
  }
};

const imperial: Record<TorqueImperialUnits, Unit> = {
  'lbf-ft': {
    name: {
      singular: 'Pound-foot',
      plural: 'Pound-feet',
    },
    to_anchor: 1,
  },
  lbf_ft: {
    name: {
      singular: "Pound-foot",
      plural: "Pound-feet"
    },
    to_anchor: 1
  },
  lbf_in: {
    name: {
      singular: "Pound-inch",
      plural: "Pound-inches"
    },
    to_anchor: 1 / 12
  },
  ozf_in: {
    name: {
      singular: "Ounce-inch",
      plural: "Ounce-inches"
    },
    to_anchor: 1 / 192.00000227
  }
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
