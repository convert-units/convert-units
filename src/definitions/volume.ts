import { Measure, Unit } from './../index.js';
export type VolumeUnits = VolumeMetricUnits | VolumeImperialUnits;
export type VolumeSystems = 'metric' | 'imperial';

export type VolumeMetricUnits =
  | 'mm3'
  | 'cm3'
  | 'dm3'
  | 'ml'
  | 'l'
  | 'kl'
  | 'Ml'
  | 'Gl'
  | 'm3'
  | 'km3'
  | 'cl'
  | 'dl'
  | 'krm'
  | 'tsk'
  | 'msk'
  | 'kkp'
  | 'glas'
  | 'kanna';

export type VolumeImperialUnits =
  | 'tsp'
  | 'Tbs'
  | 'in3'
  | 'fl-oz'
  | 'cup'
  | 'pnt'
  | 'qt'
  | 'gal'
  | 'ft3'
  | 'yd3';

const metric: Record<VolumeMetricUnits, Unit> = {
  mm3: {
    name: {
      singular: 'Cubic Millimeter',
      plural: 'Cubic Millimeters',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1e6,
    },
  },
  cm3: {
    name: {
      singular: 'Cubic Centimeter',
      plural: 'Cubic Centimeters',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1e3,
    },
  },
  dm3: {
    name: {
      singular: 'Cubic Decimeter',
      plural: 'Cubic Decimeters',
    },
    to_anchor: 1,
  },
  ml: {
    name: {
      singular: 'Millilitre',
      plural: 'Millilitres',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1e3,
    },
  },
  cl: {
    name: {
      singular: 'Centilitre',
      plural: 'Centilitres',
    },
    to_anchor: {
      numerator: 1,
      denominator: 100,
    },
  },
  dl: {
    name: {
      singular: 'Decilitre',
      plural: 'Decilitres',
    },
    to_anchor: {
      numerator: 1,
      denominator: 10,
    },
  },
  l: {
    name: {
      singular: 'Litre',
      plural: 'Litres',
    },
    to_anchor: 1,
  },
  kl: {
    name: {
      singular: 'Kilolitre',
      plural: 'Kilolitres',
    },
    to_anchor: 1e3,
  },
  Ml: {
    name: {
      singular: 'Megalitre',
      plural: 'Megalitres',
    },
    to_anchor: 1e6,
  },
  Gl: {
    name: {
      singular: 'Gigalitre',
      plural: 'Gigalitres',
    },
    to_anchor: 1e9,
  },
  m3: {
    name: {
      singular: 'Cubic meter',
      plural: 'Cubic meters',
    },
    to_anchor: 1e3,
  },
  km3: {
    name: {
      singular: 'Cubic kilometer',
      plural: 'Cubic kilometers',
    },
    to_anchor: 1e12,
  },

  // Swedish units
  krm: {
    name: {
      singular: 'Kryddmått',
      plural: 'Kryddmått',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1e3,
    },
  },
  tsk: {
    name: {
      singular: 'Tesked',
      plural: 'Teskedar',
    },
    to_anchor: {
      numerator: 5,
      denominator: 1e3,
    },
  },
  msk: {
    name: {
      singular: 'Matsked',
      plural: 'Matskedar',
    },
    to_anchor: {
      numerator: 15,
      denominator: 1e3,
    },
  },
  kkp: {
    name: {
      singular: 'Kaffekopp',
      plural: 'Kaffekoppar',
    },
    to_anchor: {
      numerator: 150,
      denominator: 1e3,
    },
  },
  glas: {
    name: {
      singular: 'Glas',
      plural: 'Glas',
    },
    to_anchor: {
      numerator: 200,
      denominator: 1e3,
    },
  },
  kanna: {
    name: {
      singular: 'Kanna',
      plural: 'Kannor',
    },
    to_anchor: 2.617,
  },
};

const imperial: Record<VolumeImperialUnits, Unit> = {
  tsp: {
    name: {
      singular: 'Teaspoon',
      plural: 'Teaspoons',
    },
    to_anchor: {
      numerator: 1,
      denominator: 6,
    },
  },
  Tbs: {
    name: {
      singular: 'Tablespoon',
      plural: 'Tablespoons',
    },
    to_anchor: {
      numerator: 1,
      denominator: 2,
    },
  },
  in3: {
    name: {
      singular: 'Cubic inch',
      plural: 'Cubic inches',
    },
    to_anchor: 0.55411,
  },
  'fl-oz': {
    name: {
      singular: 'Fluid Ounce',
      plural: 'Fluid Ounces',
    },
    to_anchor: 1,
  },
  cup: {
    name: {
      singular: 'Cup',
      plural: 'Cups',
    },
    to_anchor: 8,
  },
  pnt: {
    name: {
      singular: 'Pint',
      plural: 'Pints',
    },
    to_anchor: 16,
  },
  qt: {
    name: {
      singular: 'Quart',
      plural: 'Quarts',
    },
    to_anchor: 32,
  },
  gal: {
    name: {
      singular: 'Gallon',
      plural: 'Gallons',
    },
    to_anchor: 128,
  },
  ft3: {
    name: {
      singular: 'Cubic foot',
      plural: 'Cubic feet',
    },
    to_anchor: 957.506,
  },
  yd3: {
    name: {
      singular: 'Cubic yard',
      plural: 'Cubic yards',
    },
    to_anchor: 25852.7,
  },
};

const measure: Measure<VolumeSystems, VolumeUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 33.8140226,
      },
    },
    imperial: {
      metric: {
        ratio: {
          numerator: 1,
          denominator: 33.8140226,
        },
      },
    },
  },
};

export default measure;
