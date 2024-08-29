import { Measure, Unit } from './../index.js';
export type TemperatureUnits =
  | TemperatureMetricUnits
  | TemperatureImperialUnits;
export type TemperatureSystems = 'metric' | 'imperial';

export type TemperatureMetricUnits = 'C' | 'K';
export type TemperatureImperialUnits = 'F' | 'R';

const metric: Record<TemperatureMetricUnits, Unit> = {
  C: {
    name: {
      singular: 'degree Celsius',
      plural: 'degrees Celsius',
    },
    to_anchor: 1,
    anchor_shift: 0,
  },
  K: {
    name: {
      singular: 'Kelvin',
      plural: 'Kelvins',
    },
    to_anchor: 1,
    anchor_shift: 273.15,
  },
};

const imperial: Record<TemperatureImperialUnits, Unit> = {
  F: {
    name: {
      singular: 'degree Fahrenheit',
      plural: 'degrees Fahrenheit',
    },
    to_anchor: 1,
  },
  R: {
    name: {
      singular: 'degree Rankine',
      plural: 'degrees Rankine',
    },
    to_anchor: 1,
    anchor_shift: 459.67,
  },
};

const measure: Measure<TemperatureSystems, TemperatureUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        transform: function (C, cls) {
          // C / (5 / 9) + 32;
          return cls.add(cls.div(C, cls.div(5, 9)), 32);
        },
      },
    },
    imperial: {
      metric: {
        transform: function (F, cls) {
          // (F - 32) * (5 / 9);
          return cls.mul(cls.sub(F, 32), cls.div(5, 9));
        },
      },
    },
  },
};

export default measure;
