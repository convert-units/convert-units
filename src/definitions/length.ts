import { Measure, Unit } from './../index';
export type LengthUnits = LengthMetricUnits | LengthImperialUnits;
export type LengthSystems = 'metric' | 'imperial';

export type LengthMetricUnits = 'nm' | 'μm' | 'mm' | 'cm' | 'm' | 'km';
export type LengthImperialUnits =
  | 'in'
  | 'yd'
  | 'ft-us'
  | 'ft'
  | 'fathom'
  | 'mi'
  | 'nMi';

const metric: Record<LengthMetricUnits, Unit> = {
  nm: {
    name: {
      singular: 'Nanometer',
      plural: 'Nanometers',
    },
    to_anchor: 1e-9,
  },
  μm: {
    name: {
      singular: 'Micrometer',
      plural: 'Micrometers',
    },
    to_anchor: 1e-6,
  },
  mm: {
    name: {
      singular: 'Millimeter',
      plural: 'Millimeters',
    },
    to_anchor: 1e-3,
  },
  cm: {
    name: {
      singular: 'Centimeter',
      plural: 'Centimeters',
    },
    to_anchor: 1e-2,
  },
  m: {
    name: {
      singular: 'Meter',
      plural: 'Meters',
    },
    to_anchor: 1,
  },
  km: {
    name: {
      singular: 'Kilometer',
      plural: 'Kilometers',
    },
    to_anchor: 1e3,
  },
};

const imperial: Record<LengthImperialUnits, Unit> = {
  in: {
    name: {
      singular: 'Inch',
      plural: 'Inches',
    },
    to_anchor: 1 / 12,
  },
  yd: {
    name: {
      singular: 'Yard',
      plural: 'Yards',
    },
    to_anchor: 3,
  },
  'ft-us': {
    name: {
      singular: 'US Survey Foot',
      plural: 'US Survey Feet',
    },
    to_anchor: 1.000002,
  },
  ft: {
    name: {
      singular: 'Foot',
      plural: 'Feet',
    },
    to_anchor: 1,
  },
  fathom: {
    name: {
      singular: 'Fathom',
      plural: 'Fathoms',
    },
    to_anchor: 6,
  },
  mi: {
    name: {
      singular: 'Mile',
      plural: 'Miles',
    },
    to_anchor: 5280,
  },
  nMi: {
    name: {
      singular: 'Nautical Mile',
      plural: 'Nautical Miles',
    },
    to_anchor: 6076.12,
  },
};

const measure: Measure<LengthSystems, LengthUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 3.28084,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 3.28084,
      },
    },
  },
};

export default measure;
