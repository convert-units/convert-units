import { Measure, Unit } from './../index.js';

export type AcidityUnits = AcidityPHUnits | AcidityPOHUnits;
export type AciditySystems = 'pH' | 'pOH';

export type AcidityPHUnits = 'pH';
export type AcidityPOHUnits = 'pOH';

const pH: Record<AcidityPHUnits, Unit> = {
  pH: {
    name: {
      singular: 'pH',
      plural: 'pH',
    },
    to_anchor: 1,
  },
};

const pOH: Record<AcidityPOHUnits, Unit> = {
  pOH: {
    name: {
      singular: 'pOH',
      plural: 'pOH',
    },
    to_anchor: 1,
  },
};

const measure: Measure<AciditySystems, AcidityUnits> = {
  systems: {
    pH,
    pOH,
  },
  anchors: {
    pH: {
      pOH: {
        // pH to pOH: pOH = 14 - pH
        transform: function (value, cls) {
          return cls.sub(14, value);
        },
      },
    },
    pOH: {
      pH: {
        // pOH to pH: pH = 14 - pOH
        transform: function (value, cls) {
          return cls.sub(14, value);
        },
      },
    },
  },
};

export default measure;
