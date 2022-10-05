import { Measure, Unit } from './../index';

export type LiquidSystems = 'metric';
export type LiquidUnits = LiquidMetricUnits;
export type LiquidMetricUnits =
  | 'g/uL'
  | 'g/L'
  | 'g/dL'
  | 'g/mL'
  | 'mg/uL'
  | 'mg/L'
  | 'mg/dL'
  | 'mg/mL'
  | 'K/uL'
  | 'K/L'
  | 'K/dL'
  | 'K/mL'
  | 'pg/mL'
  | 'pg/L'
  | 'pg/uL'
  | 'pg/dL'
  | 'ng/dL'
  | 'ng/L'
  | 'ng/mL'
  | 'ng/uL'
  | 'mmol/L'
  | 'mol/L'
  | 'µmol/L'
  | 'nmol/L'
  | 'mEq/L';

const metric: Record<LiquidMetricUnits, Unit> = {
  'mmol/L': {
    name: {
      singular: 'MilliMole per litre',
      plural: 'MilliMole per litres',
    },
    to_anchor: 0.0113,
  },
  'mEq/L': {
    name: {
      singular: 'Milliequivalents per litre',
      plural: 'Milliequivalents per litres',
    },
    to_anchor: 0.0113,
  },
  'mol/L': {
    name: {
      singular: 'Mole per litre',
      plural: 'Mole per litres',
    },
    to_anchor: 0.0113 * 10,
  },
  'µmol/L': {
    name: {
      singular: 'MicroMole per litre',
      plural: 'MicroMole per litres',
    },
    to_anchor: 0.0113 / 10,
  },
  'nmol/L': {
    name: {
      singular: 'NanoMole per litre',
      plural: 'NanoMole per litres',
    },
    to_anchor: 0.0113 / (10 ^ 4),
  },
  'g/uL': {
    name: {
      singular: 'Gram per micro litre',
      plural: 'Grams per micro litres',
    },
    to_anchor: 1000 / 1000000,
  },
  'g/L': {
    name: {
      singular: 'Gram per litre',
      plural: 'Grams per litres',
    },
    to_anchor: 1000,
  },
  'g/dL': {
    name: {
      singular: 'Gram per deci litre',
      plural: 'Grams per deci litres',
    },
    to_anchor: 1000 / 10,
  },
  'g/mL': {
    name: {
      singular: 'Gram per milli litre',
      plural: 'Grams per milli litres',
    },
    to_anchor: 1,
  },
  'mg/uL': {
    name: {
      singular: 'MilliGram per micro litre',
      plural: 'MilliGrams per micro litres',
    },
    to_anchor: 1,
  },
  'mg/L': {
    name: {
      singular: 'MilliGram per litre',
      plural: 'MilliGrams per litres',
    },
    to_anchor: 1,
  },
  'mg/dL': {
    name: {
      singular: 'MilliGram per decilitre',
      plural: 'MilliGrams per decilitres',
    },
    to_anchor: 1 / 10,
  },
  'mg/mL': {
    name: {
      singular: 'MilliGram per decilitre',
      plural: 'MilliGrams per decilitres',
    },
    to_anchor: 1 / 1000,
  },
  'K/uL': {
    name: {
      singular: 'KiloGram per micro litre',
      plural: 'KiloGrams per micro litres',
    },
    to_anchor: 1 / 1000000,
  },
  'K/L': {
    name: {
      singular: 'Gram per litre',
      plural: 'Grams per litres',
    },
    to_anchor: 1,
  },
  'K/dL': {
    name: {
      singular: 'KiloGram per deci litre',
      plural: 'KiloGrams per deci litres',
    },
    to_anchor: 1 / 10,
  },
  'K/mL': {
    name: {
      singular: 'KiloGram per mili litre',
      plural: 'KiloGrams per mili litres',
    },
    to_anchor: 1 / 1000,
  },
  'pg/mL': {
    name: {
      singular: 'PicoGram per mili litre',
      plural: 'PicoGrams per mili litres',
    },
    to_anchor: (10 ^ 15) / 1000,
  },
  'pg/L': {
    name: {
      singular: 'PicoGram per litre',
      plural: 'PicoGrams per litres',
    },
    to_anchor: 10 ^ 15,
  },
  'pg/uL': {
    name: {
      singular: 'PicoGram per microlitre',
      plural: 'PicoGrams per microlitres',
    },
    to_anchor: (10 ^ 15) / (10 ^ 6),
  },
  'pg/dL': {
    name: {
      singular: 'PicoGram per decilitre',
      plural: 'PicoGrams per decilitres',
    },
    to_anchor: (10 ^ 15) / 10,
  },
  'ng/dL': {
    name: {
      singular: 'PicoGram per decilitre',
      plural: 'PicoGrams per decilitres',
    },
    to_anchor: (10 ^ 9) / 10,
  },
  'ng/L': {
    name: {
      singular: 'PicoGram per litre',
      plural: 'PicoGrams per litres',
    },
    to_anchor: 10 ^ 9,
  },
  'ng/mL': {
    name: {
      singular: 'PicoGram per mililitre',
      plural: 'PicoGrams per mililitres',
    },
    to_anchor: (10 ^ 9) / 1000,
  },
  'ng/uL': {
    name: {
      singular: 'PicoGram per microlitre',
      plural: 'PicoGrams per microlitres',
    },
    to_anchor: (10 ^ 9) / (10 ^ 6),
  },
};

const liquid: Measure<LiquidSystems, LiquidUnits> = {
  systems: {
    metric,
  },
  // anchors: {
  //   metric: {
  //     // unit: 'K/L',
  //     ratio: 1
  //   }
  // },
};

export default liquid;

// module.exports = {
//   metric: liquid
//   , _anchors: {
//     metric: {
//       unit: 'K/L',
//       ratio: 1
//     }
//   }
// };