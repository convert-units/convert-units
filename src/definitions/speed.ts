import { Measure, Unit } from './../index.js';
export type SpeedUnits = SpeedMetricUnits | SpeedImperialUnits;
export type SpeedSystems = 'metric' | 'imperial';

export type SpeedMetricUnits = 'm/s' | 'km/h' | 'mm/h';
export type SpeedImperialUnits = 'mph' | 'knot' | 'ft/s' | 'ft/min' | 'in/h';

const metric: Record<SpeedMetricUnits, Unit> = {
  'm/s': {
    name: {
      singular: 'Metre per second',
      plural: 'Metres per second',
    },
    to_anchor: 3.6,
  },
  'km/h': {
    name: {
      singular: 'Kilometre per hour',
      plural: 'Kilometres per hour',
    },
    to_anchor: 1,
  },
  'mm/h': {
    name: {
      singular: 'Millimeter per hour',
      plural: 'Millimeters per hour',
    },
    to_anchor: 0.000001,
  },
};

const imperial: Record<SpeedImperialUnits, Unit> = {
  mph: {
    name: {
      singular: 'Mile per hour',
      plural: 'Miles per hour',
    },
    to_anchor: 1,
  },
  knot: {
    name: {
      singular: 'Knot',
      plural: 'Knots',
    },
    to_anchor: 1.150779,
  },
  'ft/s': {
    name: {
      singular: 'Foot per second',
      plural: 'Feet per second',
    },
    to_anchor: 0.681818,
  },
  'ft/min': {
    name: {
      singular: 'Foot per minute',
      plural: 'Feet per minute',
    },
    to_anchor: 0.0113636,
  },
  'in/h': {
    name: {
      singular: 'Inch per hour',
      plural: 'Inches per hour',
    },
    to_anchor: 0.00001578,
  },
};

const measure: Measure<SpeedSystems, SpeedUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 1 / 1.609344,
      },
    },
    imperial: {
      metric: {
        ratio: 1.609344,
      },
    },
  },
};

export default measure;
