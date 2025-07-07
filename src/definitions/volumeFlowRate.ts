import { Measure, Unit } from './../index.js';
export type VolumeFlowRateUnits =
  | VolumeFlowRateMetricUnits
  | VolumeFlowRateImperialUnits;
export type VolumeFlowRateSystems = 'metric' | 'imperial';

export type VolumeFlowRateMetricUnits =
  | 'mm3/s'
  | 'cm3/s'
  | 'dm3/s'
  | 'dm3/min'
  | 'dm3/h'
  | 'dm3/d'
  | 'dm3/a'
  | 'ml/s'
  | 'cl/s'
  | 'dl/s'
  | 'l/s'
  | 'l/min'
  | 'l/h'
  | 'l/d'
  | 'l/a'
  | 'kl/s'
  | 'kl/min'
  | 'kl/h'
  | 'm3/s'
  | 'm3/min'
  | 'm3/h'
  | 'm3/d'
  | 'm3/a'
  | 'km3/s';

export type VolumeFlowRateImperialUnits =
  | 'tsp/s'
  | 'Tbs/s'
  | 'in3/s'
  | 'in3/min'
  | 'in3/h'
  | 'fl-oz/s'
  | 'fl-oz/min'
  | 'fl-oz/h'
  | 'cup/s'
  | 'pnt/s'
  | 'pnt/min'
  | 'pnt/h'
  | 'qt/s'
  | 'gal/s'
  | 'gal/min'
  | 'gal/h'
  | 'ft3/s'
  | 'ft3/min'
  | 'ft3/h'
  | 'yd3/s'
  | 'yd3/min'
  | 'yd3/h';

const metric: Record<VolumeFlowRateMetricUnits, Unit> = {
  'mm3/s': {
    name: {
      singular: 'Cubic Millimeter per second',
      plural: 'Cubic Millimeters per second',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1e6,
    },
  },
  'cm3/s': {
    name: {
      singular: 'Cubic Centimeter per second',
      plural: 'Cubic Centimeters per second',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1e3,
    },
  },
  'dm3/s': {
    name: {
      singular: 'Cubic Decimeter per second',
      plural: 'Cubic Decimeters per second',
    },
    to_anchor: 1,
  },
  'dm3/min': {
    name: {
      singular: 'Cubic Decimeter per minute',
      plural: 'Cubic Decimeters per minute',
    },
    to_anchor: 1 / 60,
  },
  'dm3/h': {
    name: {
      singular: 'Cubic Decimeter per hour',
      plural: 'Cubic Decimeters per hour',
    },
    to_anchor: 1 / 3600,
  },
  'dm3/d': {
    name: {
      singular: 'Cubic Decimeter per day',
      plural: 'Cubic Decimeters per day',
    },
    to_anchor: 1 / 86400,
  },
  'dm3/a': {
    name: {
      singular: 'Cubic Decimeter per year',
      plural: 'Cubic Decimeters per year',
    },
    to_anchor: 1 / 31557600,
  },
  'ml/s': {
    name: {
      singular: 'Millilitre per second',
      plural: 'Millilitres per second',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1e3,
    },
  },
  'cl/s': {
    name: {
      singular: 'Centilitre per second',
      plural: 'Centilitres per second',
    },
    to_anchor: {
      numerator: 1,
      denominator: 100,
    },
  },
  'dl/s': {
    name: {
      singular: 'Decilitre per second',
      plural: 'Decilitres per second',
    },
    to_anchor: {
      numerator: 1,
      denominator: 10,
    },
  },
  'l/s': {
    name: {
      singular: 'Litre per second',
      plural: 'Litres per second',
    },
    to_anchor: 1,
  },
  'l/min': {
    name: {
      singular: 'Litre per minute',
      plural: 'Litres per minute',
    },
    to_anchor: {
      numerator: 1,
      denominator: 60,
    },
  },
  'l/h': {
    name: {
      singular: 'Litre per hour',
      plural: 'Litres per hour',
    },
    to_anchor: {
      numerator: 1,
      denominator: 3.6e3,
    },
  },
  'l/d': {
    name: {
      singular: 'Litre per day',
      plural: 'Litres per day',
    },
    to_anchor: 1 / 86400,
  },
  'l/a': {
    name: {
      singular: 'Litre per year',
      plural: 'Litres per year',
    },
    to_anchor: 1 / 31557600,
  },
  'kl/s': {
    name: {
      singular: 'Kilolitre per second',
      plural: 'Kilolitres per second',
    },
    to_anchor: 1e3,
  },
  'kl/min': {
    name: {
      singular: 'Kilolitre per minute',
      plural: 'Kilolitres per minute',
    },
    to_anchor: {
      numerator: 50,
      denominator: 3,
    },
  },
  'kl/h': {
    name: {
      singular: 'Kilolitre per hour',
      plural: 'Kilolitres per hour',
    },
    to_anchor: {
      numerator: 5,
      denominator: 18,
    },
  },
  'm3/s': {
    name: {
      singular: 'Cubic meter per second',
      plural: 'Cubic meters per second',
    },
    to_anchor: 1e3,
  },
  'm3/min': {
    name: {
      singular: 'Cubic meter per minute',
      plural: 'Cubic meters per minute',
    },
    to_anchor: {
      numerator: 50,
      denominator: 3,
    },
  },
  'm3/h': {
    name: {
      singular: 'Cubic meter per hour',
      plural: 'Cubic meters per hour',
    },
    to_anchor: {
      numerator: 5,
      denominator: 18,
    },
  },
  'm3/d': {
    name: {
      singular: 'Cubic meter per day',
      plural: 'Cubic meters per day',
    },
    to_anchor: 5 / 432,
  },
  'm3/a': {
    name: {
      singular: 'Cubic meter per year',
      plural: 'Cubic meters per year',
    },
    to_anchor: 5 / 157788,
  },
  'km3/s': {
    name: {
      singular: 'Cubic kilometer per second',
      plural: 'Cubic kilometers per second',
    },
    to_anchor: 1e12,
  },
};

const imperial: Record<VolumeFlowRateImperialUnits, Unit> = {
  'tsp/s': {
    name: {
      singular: 'Teaspoon per second',
      plural: 'Teaspoons per second',
    },
    to_anchor: {
      numerator: 1,
      denominator: 6,
    },
  },
  'Tbs/s': {
    name: {
      singular: 'Tablespoon per second',
      plural: 'Tablespoons per second',
    },
    to_anchor: {
      numerator: 1,
      denominator: 2,
    },
  },
  'in3/s': {
    name: {
      singular: 'Cubic inch per second',
      plural: 'Cubic inches per second',
    },
    to_anchor: 0.55411,
  },
  'in3/min': {
    name: {
      singular: 'Cubic inch per minute',
      plural: 'Cubic inches per minute',
    },
    to_anchor: {
      numerator: 0.55411,
      denominator: 60,
    },
  },
  'in3/h': {
    name: {
      singular: 'Cubic inch per hour',
      plural: 'Cubic inches per hour',
    },
    to_anchor: {
      numerator: 0.55411,
      denominator: 3.6e3,
    },
  },
  'fl-oz/s': {
    name: {
      singular: 'Fluid Ounce per second',
      plural: 'Fluid Ounces per second',
    },
    to_anchor: 1,
  },
  'fl-oz/min': {
    name: {
      singular: 'Fluid Ounce per minute',
      plural: 'Fluid Ounces per minute',
    },
    to_anchor: {
      numerator: 1,
      denominator: 60,
    },
  },
  'fl-oz/h': {
    name: {
      singular: 'Fluid Ounce per hour',
      plural: 'Fluid Ounces per hour',
    },
    to_anchor: {
      numerator: 1,
      denominator: 3.6e3,
    },
  },
  'cup/s': {
    name: {
      singular: 'Cup per second',
      plural: 'Cups per second',
    },
    to_anchor: 8,
  },
  'pnt/s': {
    name: {
      singular: 'Pint per second',
      plural: 'Pints per second',
    },
    to_anchor: 16,
  },
  'pnt/min': {
    name: {
      singular: 'Pint per minute',
      plural: 'Pints per minute',
    },
    to_anchor: {
      numerator: 4,
      denominator: 15,
    },
  },
  'pnt/h': {
    name: {
      singular: 'Pint per hour',
      plural: 'Pints per hour',
    },
    to_anchor: {
      numerator: 1,
      denominator: 225,
    },
  },
  'qt/s': {
    name: {
      singular: 'Quart per second',
      plural: 'Quarts per second',
    },
    to_anchor: 32,
  },
  'gal/s': {
    name: {
      singular: 'Gallon per second',
      plural: 'Gallons per second',
    },
    to_anchor: 128,
  },
  'gal/min': {
    name: {
      singular: 'Gallon per minute',
      plural: 'Gallons per minute',
    },
    to_anchor: {
      numerator: 32,
      denominator: 15,
    },
  },
  'gal/h': {
    name: {
      singular: 'Gallon per hour',
      plural: 'Gallons per hour',
    },
    to_anchor: {
      numerator: 8,
      denominator: 225,
    },
  },
  'ft3/s': {
    name: {
      singular: 'Cubic foot per second',
      plural: 'Cubic feet per second',
    },
    to_anchor: 957.506,
  },
  'ft3/min': {
    name: {
      singular: 'Cubic foot per minute',
      plural: 'Cubic feet per minute',
    },
    to_anchor: {
      numerator: 957.506,
      denominator: 60,
    },
  },
  'ft3/h': {
    name: {
      singular: 'Cubic foot per hour',
      plural: 'Cubic feet per hour',
    },
    to_anchor: {
      numerator: 957.506,
      denominator: 3.6e3,
    },
  },
  'yd3/s': {
    name: {
      singular: 'Cubic yard per second',
      plural: 'Cubic yards per second',
    },
    to_anchor: 25852.7,
  },
  'yd3/min': {
    name: {
      singular: 'Cubic yard per minute',
      plural: 'Cubic yards per minute',
    },
    to_anchor: {
      numerator: 25852.7,
      denominator: 60,
    },
  },
  'yd3/h': {
    name: {
      singular: 'Cubic yard per hour',
      plural: 'Cubic yards per hour',
    },
    to_anchor: {
      numerator: 25852.7,
      denominator: 3.6e3,
    },
  },
};

const measure: Measure<VolumeFlowRateSystems, VolumeFlowRateUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 33.8140227,
      },
    },
    imperial: {
      metric: {
        ratio: {
          numerator: 1,
          denominator: 33.8140227,
        },
      },
    },
  },
};

export default measure;
