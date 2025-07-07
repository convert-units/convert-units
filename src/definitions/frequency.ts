import { Measure, Unit } from './../index.js';
export type FrequencyUnits = FrequencySIUnits;
export type FrequencySystems = 'SI';

export type FrequencySIUnits =
  | 'mHz'
  | 'Hz'
  | 'kHz'
  | 'MHz'
  | 'GHz'
  | 'THz'
  | 'rpm'
  | 'deg/s'
  | 'rad/s';

const SI: Record<FrequencySIUnits, Unit> = {
  mHz: {
    name: {
      singular: 'millihertz',
      plural: 'millihertz',
    },
    to_anchor: {
      numerator: 1,
      denominator: 1000,
    },
  },
  Hz: {
    name: {
      singular: 'hertz',
      plural: 'hertz',
    },
    to_anchor: 1,
  },
  kHz: {
    name: {
      singular: 'kilohertz',
      plural: 'kilohertz',
    },
    to_anchor: 1000,
  },
  MHz: {
    name: {
      singular: 'megahertz',
      plural: 'megahertz',
    },
    to_anchor: 1e6,
  },
  GHz: {
    name: {
      singular: 'gigahertz',
      plural: 'gigahertz',
    },
    to_anchor: 1e9,
  },
  THz: {
    name: {
      singular: 'terahertz',
      plural: 'terahertz',
    },
    to_anchor: 1e12,
  },
  rpm: {
    name: {
      singular: 'rotation per minute',
      plural: 'rotations per minute',
    },
    to_anchor: {
      numerator: 1,
      denominator: 60,
    },
  },
  'deg/s': {
    name: {
      singular: 'degree per second',
      plural: 'degrees per second',
    },
    to_anchor: {
      numerator: 1,
      denominator: 360,
    },
  },
  'rad/s': {
    name: {
      singular: 'radian per second',
      plural: 'radians per second',
    },
    to_anchor: {
      numerator: 1,
      denominator: 6.283185307179586, // Math.PI * 2
    },
  },
};

const measure: Measure<FrequencySystems, FrequencyUnits> = {
  systems: {
    SI,
  },
};

export default measure;
