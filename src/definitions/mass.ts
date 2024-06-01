import { Measure, Unit } from './../index.js';
export type MassUnits = MassMetricUnits | MassImperialUnits;
export type MassSystems = 'metric' | 'imperial';

export type MassMetricUnits = 'mcg' | 'mg' | 'g' | 'kg' | 'mt';
export type MassImperialUnits = 'oz' | 'lb' | 'st' | 't';

const metric: Record<MassMetricUnits, Unit> = {
  mcg: {
    name: {
      singular: 'Microgram',
      plural: 'Micrograms',
    },
    to_anchor: 1 / 1000000,
  },
  mg: {
    name: {
      singular: 'Milligram',
      plural: 'Milligrams',
    },
    to_anchor: 1 / 1000,
  },
  g: {
    name: {
      singular: 'Gram',
      plural: 'Grams',
    },
    to_anchor: 1,
  },
  kg: {
    name: {
      singular: 'Kilogram',
      plural: 'Kilograms',
    },
    to_anchor: 1000,
  },
  mt: {
    name: {
      singular: 'Metric Tonne',
      plural: 'Metric Tonnes',
    },
    to_anchor: 1000000,
  },
};

const imperial: Record<MassImperialUnits, Unit> = {
  oz: {
    name: {
      singular: 'Ounce',
      plural: 'Ounces',
    },
    to_anchor: 1 / 16,
  },
  lb: {
    name: {
      singular: 'Pound',
      plural: 'Pounds',
    },
    to_anchor: 1,
  },
  st: {
    name: {
      singular: 'Stone',
      plural: 'Stones',
    },
    to_anchor: 14,
  },
  t: {
    name: {
      singular: 'Ton',
      plural: 'Tons',
    },
    to_anchor: 2000,
  },
};

const measure: Measure<MassSystems, MassUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 1 / 453.59237,
      },
    },
    imperial: {
      metric: {
        ratio: 453.59237,
      },
    },
  },
};

export default measure;
