import { Measure, Unit } from './../index.js';
export type TorqueUnits = TorqueMetricUnits | TorqueImperialUnits;
export type TorqueSystems = 'metric' | 'imperial';

export type TorqueMetricUnits = 'Nm' | 'cNm' | 'dNm' | 'kgm' | 'kg-cm';
export type TorqueImperialUnits = 'lbf-ft' | 'lbf-in' | 'ozf-in';

const metric: Record<TorqueMetricUnits, Unit> = {
  Nm: {
    name: {
      singular: 'Newton-meter',
      plural: 'Newton-meters',
    },
    to_anchor: 1,
  },
  cNm: {
    name: {
      singular: 'Centinewton-meter',
      plural: 'Centinewton-meters',
    },
    to_anchor: 1e-2,
  },
  dNm: {
    name: {
      singular: 'Decinewton-meter',
      plural: 'Decinewton-meters',
    },
    to_anchor: 1e-1,
  },
  kgm: {
    name: {
      singular: 'Kilogram-meter',
      plural: 'Kilogram-meters',
    },
    to_anchor: 9.806649999787735, // 1 / 0.1019716213,
  },
  'kg-cm': {
    name: {
      singular: 'Kilogram-centimeter',
      plural: 'Kilogram-centimeters',
    },
    to_anchor: 9.806649999787735e-2, // 1 / 10.19716213,
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
  'lbf-in': {
    name: {
      singular: 'Pound-inch',
      plural: 'Pound-inches',
    },
    to_anchor: 8.333333333333333e-2, // 1 / 12,
  },
  'ozf-in': {
    name: {
      singular: 'Ounce-inch',
      plural: 'Ounce-inches',
    },
    to_anchor: 5.208333271755643e-3, // 1 / 192.00000227,
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
        ratio: {
          numerator: 1,
          denominator: 1.355818,
        },
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
