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

const SI: Record<TimeSIUnits, Unit> = {
  ns: {
    name: {
      singular: 'Nanosecond',
      plural: 'Nanoseconds',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1e9,
    },
  },
  mu: {
    name: {
      singular: 'Microsecond',
      plural: 'Microseconds',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1e6,
    },
  },
  ms: {
    name: {
      singular: 'Millisecond',
      plural: 'Milliseconds',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1e3,
    },
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
    to_anchor: 3.6e3, // 60 * 60
  },
  d: {
    name: {
      singular: 'Day',
      plural: 'Days',
    },
    to_anchor: 8.64e4, // 60 * 60 * 24
  },
  week: {
    name: {
      singular: 'Week',
      plural: 'Weeks',
    },
    to_anchor: 6.048e5, // 60 * 60 * 24 * 7
  },
  month: {
    name: {
      singular: 'Month',
      plural: 'Months',
    },
    to_anchor: {
      numerator: 3.15576e7, // 60 * 60 * 24 * 365.25
      denominator: 12,
    },
  },
  year: {
    name: {
      singular: 'Year',
      plural: 'Years',
    },
    to_anchor: 3.15576e7, // 60 * 60 * 24 * 365.25,
  },
};

const measure: Measure<TimeSystems, TimeUnits> = {
  systems: {
    SI,
  },
};

export default measure;
