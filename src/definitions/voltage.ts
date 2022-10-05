import { Measure, Unit } from './../index.js';
export type VoltageUnits = VoltageSIUnits;
export type VoltageSystems = 'SI';

export type VoltageSIUnits = 'V' | 'mV' | 'kV';

const SI: Record<VoltageSIUnits, Unit> = {
  V: {
    name: {
      singular: 'Volt',
      plural: 'Volts',
    },
    to_anchor: 1,
  },
  mV: {
    name: {
      singular: 'Millivolt',
      plural: 'Millivolts',
    },
    to_anchor: 0.001,
  },
  kV: {
    name: {
      singular: 'Kilovolt',
      plural: 'Kilovolts',
    },
    to_anchor: 1000,
  },
};

const measure: Measure<VoltageSystems, VoltageUnits> = {
  systems: {
    SI,
  },
};

export default measure;
