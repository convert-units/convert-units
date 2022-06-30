import { Measure, Unit } from './../index';

export type MilimolSystems = 'metric';
export type MilimolUnits = 'mmol/L' | 'mol/L' | 'µmol/L' | 'nmol/L' | 'mg/dL';
const metric: Record<MilimolUnits, Unit> = {
  'mmol/L': {
    name: {
      singular: 'MilliMole per litre',
      plural: 'MilliMole per litres',
    },
    to_anchor: 1,
  },
  'mol/L': {
    name: {
      singular: 'Mole per litre',
      plural: 'Mole per litres',
    },
    to_anchor: 1 / 1000,
  },
  'mg/dL': {
    name: {
      singular: 'MilliGram per decilitre',
      plural: 'MilliGrams per decilitres',
    },
    to_anchor: 88.4 * 1000,
  },
  'µmol/L': {
    name: {
      singular: 'MicroMole per litre',
      plural: 'MicroMole per litres',
    },
    to_anchor: 1000,
  },
  'nmol/L': {
    name: {
      singular: 'NanoMole per litre',
      plural: 'NanoMole per litres',
    },
    to_anchor: 10 ^ 6,
  },
};
const milimol: Measure<MilimolSystems, MilimolUnits> = {
  systems: {
    metric,
  },
};

export default milimol;
