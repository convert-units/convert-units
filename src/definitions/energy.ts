import { Measure, Unit } from './../index.js';
export type EnergyUnits = EnergySIUnits | EnergyNutritionUnits;
export type EnergySystems = 'SI' | 'nutrition';

export type EnergySIUnits =
  | 'Ws'
  | 'Wm'
  | 'Wh'
  | 'mWh'
  | 'kWh'
  | 'MWh'
  | 'GWh'
  | 'J'
  | 'kJ'
  | 'MJ'
  | 'GJ';

export type EnergyNutritionUnits = 'kcal' | 'cal';

const SI: Record<EnergySIUnits, Unit> = {
  Ws: {
    name: {
      singular: 'Watt-second',
      plural: 'Watt-seconds',
    },
    to_anchor: 1,
  },
  Wm: {
    name: {
      singular: 'Watt-minute',
      plural: 'Watt-minutes',
    },
    to_anchor: 60,
  },
  Wh: {
    name: {
      singular: 'Watt-hour',
      plural: 'Watt-hours',
    },
    to_anchor: 3600,
  },
  mWh: {
    name: {
      singular: 'Milliwatt-hour',
      plural: 'Milliwatt-hours',
    },
    to_anchor: 3.6,
  },
  kWh: {
    name: {
      singular: 'Kilowatt-hour',
      plural: 'Kilowatt-hours',
    },
    to_anchor: 3600000,
  },
  MWh: {
    name: {
      singular: 'Megawatt-hour',
      plural: 'Megawatt-hours',
    },
    to_anchor: 3600000000,
  },
  GWh: {
    name: {
      singular: 'Gigawatt-hour',
      plural: 'Gigawatt-hours',
    },
    to_anchor: 3600000000000,
  },
  J: {
    name: {
      singular: 'Joule',
      plural: 'Joules',
    },
    to_anchor: 1,
  },
  kJ: {
    name: {
      singular: 'Kilojoule',
      plural: 'Kilojoules',
    },
    to_anchor: 1000,
  },
  MJ: {
    name: {
      singular: 'Megajoule',
      plural: 'Megajoules',
    },
    to_anchor: 1_000_000,
  },
  GJ: {
    name: {
      singular: 'Gigajoule',
      plural: 'Gigajoules',
    },
    to_anchor: 1_000_000_000,
  },
};

const nutrition: Record<EnergyNutritionUnits, Unit> = {
  cal: {
    name: {
      singular: 'calorie',
      plural: 'calories',
    },
    to_anchor: 1,
  },
  kcal: {
    name: {
      singular: 'Kilocalorie',
      plural: 'Kilocalories',
    },
    to_anchor: 1000,
  },
};
const measure: Measure<EnergySystems, EnergyUnits> = {
  systems: {
    SI,
    nutrition,
  },
  anchors: {
    SI: {
      nutrition: {
        ratio: 1 / 4.184,
      },
    },
    nutrition: {
      SI: {
        ratio: 4.184,
      },
    },
  },
};

export default measure;
