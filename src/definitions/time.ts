import Decimal from 'decimal.js';
import { Measure, Unit } from './../index.js';
export type TimeUnits = TimeSIUnits;
export type TimeSystems = 'SI';

export type TimeSIUnits =
  | 'ns'
  | 'mu'
  | 'ms'
  | 's'
  | 'min'
  | 'h'
  | 'd'
  | 'week'
  | 'month'
  | 'year';

const daysInYear = 365.25;

const SI: Record<TimeSIUnits, Unit> = {
  ns: {
    name: {
      singular: 'Nanosecond',
      plural: 'Nanoseconds',
    },
    to_anchor: new Decimal(1).div(1000000000),
  },
  mu: {
    name: {
      singular: 'Microsecond',
      plural: 'Microseconds',
    },
    to_anchor: new Decimal(1).div(1000000),
  },
  ms: {
    name: {
      singular: 'Millisecond',
      plural: 'Milliseconds',
    },
    to_anchor: new Decimal(1).div(1000),
  },
  s: {
    name: {
      singular: 'Second',
      plural: 'Seconds',
    },
    to_anchor: 1,
  },
  min: {
    name: {
      singular: 'Minute',
      plural: 'Minutes',
    },
    to_anchor: 60,
  },
  h: {
    name: {
      singular: 'Hour',
      plural: 'Hours',
    },
    to_anchor: new Decimal(60).mul(60),
  },
  d: {
    name: {
      singular: 'Day',
      plural: 'Days',
    },
    to_anchor: new Decimal(60).mul(60).mul(24),
  },
  week: {
    name: {
      singular: 'Week',
      plural: 'Weeks',
    },
    to_anchor: new Decimal(60).mul(60).mul(24).mul(7),
  },
  month: {
    name: {
      singular: 'Month',
      plural: 'Months',
    },
    to_anchor: new Decimal(60).mul(60).mul(24).mul(daysInYear).div(12),
  },
  year: {
    name: {
      singular: 'Year',
      plural: 'Years',
    },
    to_anchor: new Decimal(60).mul(60).mul(24).mul(daysInYear),
  },
};

const measure: Measure<TimeSystems, TimeUnits> = {
  systems: {
    SI,
  },
};

export default measure;
