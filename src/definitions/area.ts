import { Measure, Unit } from './../index.js';
export type AreaUnits = AreaMetricUnits | AreaImperialUnits;
export type AreaSystems = 'metric' | 'imperial';

export type AreaMetricUnits =
  | 'nm2'
  | 'μm2'
  | 'mm2'
  | 'cm2'
  | 'dm2'
  | 'm2'
  | 'a'
  | 'ha'
  | 'km2';
export type AreaImperialUnits = 'in2' | 'yd2' | 'ft2' | 'ac' | 'mi2';

const metric: Record<AreaMetricUnits, Unit> = {
  nm2: {
    name: {
      singular: 'Square Nanometer',
      plural: 'Square Nanometers',
    },
    to_anchor: 1e-18,
  },
  μm2: {
    name: {
      singular: 'Square Micrometer',
      plural: 'Square Micrometers',
    },
    to_anchor: 1e-12,
  },
  mm2: {
    name: {
      singular: 'Square Millimeter',
      plural: 'Square Millimeters',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1e6,
    },
  },
  cm2: {
    name: {
      singular: 'Square Centimeter',
      plural: 'Square Centimeters',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1e4,
    },
  },
  dm2: {
    name: {
      singular: 'Square Decimeter',
      plural: 'Square Decimeters',
    },
    to_anchor: {
      numerator: 1,
      denominator: 100,
    },
  },
  m2: {
    name: {
      singular: 'Square Meter',
      plural: 'Square Meters',
    },
    to_anchor: 1,
  },
  a: {
    name: {
      singular: 'Are',
      plural: 'Ares',
    },
    to_anchor: 100,
  },
  ha: {
    name: {
      singular: 'Hectare',
      plural: 'Hectares',
    },
    to_anchor: 1e4,
  },
  km2: {
    name: {
      singular: 'Square Kilometer',
      plural: 'Square Kilometers',
    },
    to_anchor: 1e6,
  },
};

const imperial: Record<AreaImperialUnits, Unit> = {
  in2: {
    name: {
      singular: 'Square Inch',
      plural: 'Square Inches',
    },
    to_anchor: {
      numerator: 1,
      denominator: 144,
    },
  },
  yd2: {
    name: {
      singular: 'Square Yard',
      plural: 'Square Yards',
    },
    to_anchor: 9,
  },
  ft2: {
    name: {
      singular: 'Square Foot',
      plural: 'Square Feet',
    },
    to_anchor: 1,
  },
  ac: {
    name: {
      singular: 'Acre',
      plural: 'Acres',
    },
    to_anchor: 43560,
  },
  mi2: {
    name: {
      singular: 'Square Mile',
      plural: 'Square Miles',
    },
    to_anchor: 27878400,
  },
};

const measure: Measure<AreaSystems, AreaUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 10.7639,
      },
    },
    imperial: {
      metric: {
        ratio: {
          numerator: 1,
          denominator: 10.7639,
        },
      },
    },
  },
};

export default measure;
