import { Measure, Unit } from './../index';
export type DigitalUnits = DigitalBitsUnits | DigitalBytesUnits;
export type DigitalSystems = 'bits' | 'bytes';

export type DigitalBitsUnits = 'b' | 'Kb' | 'Mb' | 'Gb' | 'Tb';
export type DigitalBytesUnits = 'B' | 'KB' | 'MB' | 'GB' | 'TB';

const bits: Record<DigitalBitsUnits, Unit> = {
  b: {
    name: {
      singular: 'Bit',
      plural: 'Bits',
    },
    to_anchor: 1,
  },
  Kb: {
    name: {
      singular: 'Kilobit',
      plural: 'Kilobits',
    },
    to_anchor: 1e3,
  },
  Mb: {
    name: {
      singular: 'Megabit',
      plural: 'Megabits',
    },
    to_anchor: 1e6,
  },
  Gb: {
    name: {
      singular: 'Gigabit',
      plural: 'Gigabits',
    },
    to_anchor: 1e9,
  },
  Tb: {
    name: {
      singular: 'Terabit',
      plural: 'Terabits',
    },
    to_anchor: 1e12,
  },
};

const bytes: Record<DigitalBytesUnits, Unit> = {
  B: {
    name: {
      singular: 'Byte',
      plural: 'Bytes',
    },
    to_anchor: 1,
  },
  KB: {
    name: {
      singular: 'Kilobyte',
      plural: 'Kilobytes',
    },
    to_anchor: 1e3,
  },
  MB: {
    name: {
      singular: 'Megabyte',
      plural: 'Megabytes',
    },
    to_anchor: 1e6,
  },
  GB: {
    name: {
      singular: 'Gigabyte',
      plural: 'Gigabytes',
    },
    to_anchor: 1e9,
  },
  TB: {
    name: {
      singular: 'Terabyte',
      plural: 'Terabytes',
    },
    to_anchor: 1e12,
  },
};

const measure: Measure<DigitalSystems, DigitalUnits> = {
  systems: {
    bits,
    bytes,
  },
  anchors: {
    bits: {
      bytes: {
        ratio: 1 / 8,
      },
    },
    bytes: {
      bits: {
        ratio: 8,
      },
    },
  },
};

export default measure;
