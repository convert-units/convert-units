import { Measure, Unit } from './../index.js';
export type PressureUnits = PressureMetricUnits | PressureImperialUnits;
export type PressureSystems = 'metric' | 'imperial';

export type PressureMetricUnits =
  | 'Pa'
  | 'kPa'
  | 'MPa'
  | 'hPa'
  | 'bar'
  | 'torr'
  | 'mH2O'
  | 'mmHg';
export type PressureImperialUnits = 'psi' | 'ksi' | 'inHg';

const metric: Record<PressureMetricUnits, Unit> = {
  Pa: {
    name: {
      singular: 'pascal',
      plural: 'pascals',
    },
    to_anchor: 1 / 1000,
  },
  kPa: {
    name: {
      singular: 'kilopascal',
      plural: 'kilopascals',
    },
    to_anchor: 1,
  },
  MPa: {
    name: {
      singular: 'megapascal',
      plural: 'megapascals',
    },
    to_anchor: 1000,
  },
  hPa: {
    name: {
      singular: 'hectopascal',
      plural: 'hectopascals',
    },
    to_anchor: 1 / 10,
  },
  bar: {
    name: {
      singular: 'bar',
      plural: 'bar',
    },
    to_anchor: 100,
  },
  torr: {
    name: {
      singular: 'torr',
      plural: 'torr',
    },
    to_anchor: 101325 / 760000,
  },
  mH2O: {
    name: {
      singular: 'meter of water @ 4°C',
      plural: 'meters of water @ 4°C',
    },
    to_anchor: 9.80665,
  },
  mmHg: {
    name: {
      singular: 'millimeter of mercury',
      plural: 'millimeters of mercury',
    },
    to_anchor: 0.133322,
  },
};

const imperial: Record<PressureImperialUnits, Unit> = {
  psi: {
    name: {
      singular: 'pound per square inch',
      plural: 'pounds per square inch',
    },
    to_anchor: 1 / 1000,
  },
  ksi: {
    name: {
      singular: 'kilopound per square inch',
      plural: 'kilopound per square inch',
    },
    to_anchor: 1,
  },
  inHg: {
    name: {
      singular: 'Inch of mercury',
      plural: 'Inches of mercury',
    },
    to_anchor: 0.000491154,
  },
};

const measure: Measure<PressureSystems, PressureUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.00014503768078,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 0.00014503768078,
      },
    },
  },
};

export default measure;
