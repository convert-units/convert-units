import { Measure, Unit } from './../index.js';
export type ApparentPowerUnits = ApparentPowerMetricUnits;
export type ApparentPowerSystems = 'SI';

export type ApparentPowerMetricUnits = 'VA' | 'mVA' | 'kVA' | 'MVA' | 'GVA';

const SI: Record<ApparentPowerMetricUnits, Unit> = {
  VA: {
    name: {
      singular: 'Volt-Ampere',
      plural: 'Volt-Amperes',
    },
    to_anchor: 1,
  },
  mVA: {
    name: {
      singular: 'Millivolt-Ampere',
      plural: 'Millivolt-Amperes',
    },
    to_anchor: 0.001,
  },
  kVA: {
    name: {
      singular: 'Kilovolt-Ampere',
      plural: 'Kilovolt-Amperes',
    },
    to_anchor: 1000,
  },
  MVA: {
    name: {
      singular: 'Megavolt-Ampere',
      plural: 'Megavolt-Amperes',
    },
    to_anchor: 1000000,
  },
  GVA: {
    name: {
      singular: 'Gigavolt-Ampere',
      plural: 'Gigavolt-Amperes',
    },
    to_anchor: 1000000000,
  },
};

const measure: Measure<ApparentPowerSystems, ApparentPowerUnits> = {
  systems: {
    SI,
  },
};

export default measure;
