import { Measure, Unit } from './../index';
export type EnergyUnits = EnergySIUnits;
export type EnergySystems = 'SI';

export type EnergySIUnits =
  | 'Wh'
  | 'mWh'
  | 'kWh'
  | 'MWh'
  | 'GWh'
  | 'J'
  | 'kJ'
  | 'MJ'
  | 'GJ';

const SI: Record<EnergySIUnits, Unit> = {
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

const measure: Measure<EnergySystems, EnergyUnits> = {
  systems: {
    SI,
  },
};

export default measure;
