import { Measure, Unit } from './../index.js';

export type MassConcentrationUnits = MassConcentrationSIUnits;
export type MassConcentrationSystems = 'SI';

export type MassConcentrationSIUnits =
  | 'mg/L'
  | 'g/L'
  | 'µg/L'
  | 'kg/m3'
  | 'g/mL'
  | 'mg/mL';

const SI: Record<MassConcentrationSIUnits, Unit> = {
  'mg/L': {
    name: {
      singular: 'Milligram per litre',
      plural: 'Milligrams per litre',
    },
    to_anchor: 1, // Base unit
  },
  'g/L': {
    name: {
      singular: 'Gram per litre',
      plural: 'Grams per litre',
    },
    to_anchor: 1000, // 1 g/L = 1000 mg/L
  },
  'µg/L': {
    name: {
      singular: 'Microgram per litre',
      plural: 'Micrograms per litre',
    },
    to_anchor: 0.001, // 1 µg/L = 0.001 mg/L
  },
  'kg/m3': {
    name: {
      singular: 'Kilogram per cubic metre',
      plural: 'Kilograms per cubic metre',
    },
    to_anchor: 1000, // 1 kg/m3 = 1 g/L = 1000 mg/L
  },
  'g/mL': {
    name: {
      singular: 'Gram per millilitre',
      plural: 'Grams per millilitre',
    },
    to_anchor: 1000000, // 1 g/mL = 1000 g/L = 1,000,000 mg/L
  },
  'mg/mL': {
    name: {
      singular: 'Milligram per millilitre',
      plural: 'Milligrams per millilitre',
    },
    to_anchor: 1000, // 1 mg/mL = 1000 mg/L
  },
};

const measure: Measure<MassConcentrationSystems, MassConcentrationUnits> = {
  systems: {
    SI,
  },
};

export default measure;
