import { Measure, Unit } from './../index.js';
export type DigitalUnits =
  | DigitalSIUnits
  | DigitalIECUnits
  | DigitalBitUnit
  | DigitalByteUnit;
export type DigitalSystems = 'SI' | 'IEC' | 'bit' | 'byte';

export type DigitalSIUnits =
  | 'kb'
  | 'Mb'
  | 'Gb'
  | 'Tb'
  | 'kB'
  | 'MB'
  | 'GB'
  | 'TB';
export type DigitalIECUnits = 'KiB' | 'MiB' | 'GiB' | 'TiB';
export type DigitalBitUnit = 'bit';
export type DigitalByteUnit = 'byte';

const bit: Record<DigitalBitUnit, Unit> = {
  bit: {
    name: {
      singular: 'Bit',
      plural: 'Bits',
    },
    to_anchor: 1,
  },
};

const byte: Record<DigitalByteUnit, Unit> = {
  byte: {
    name: {
      singular: 'Byte',
      plural: 'Bytes',
    },
    to_anchor: 1,
  },
};

const SI: Record<DigitalSIUnits, Unit> = {
  kb: {
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
  kB: {
    name: {
      singular: 'Kilobyte',
      plural: 'Kilobytes',
    },
    to_anchor: 8e3,
  },
  MB: {
    name: {
      singular: 'Megabyte',
      plural: 'Megabytes',
    },
    to_anchor: 8e6,
  },
  GB: {
    name: {
      singular: 'Gigabyte',
      plural: 'Gigabytes',
    },
    to_anchor: 8e9,
  },
  TB: {
    name: {
      singular: 'Terabyte',
      plural: 'Terabytes',
    },
    to_anchor: 8e12,
  },
};

const IEC: Record<DigitalIECUnits, Unit> = {
  KiB: {
    name: {
      singular: 'Kibibyte',
      plural: 'Kibibytes',
    },
    to_anchor: 1.024e3,
  },
  MiB: {
    name: {
      singular: 'Mebibyte',
      plural: 'Mebibytes',
    },
    to_anchor: 1.048576e6,
  },
  GiB: {
    name: {
      singular: 'Gibibyte',
      plural: 'Gibibytes',
    },
    to_anchor: 1.073741824e9,
  },
  TiB: {
    name: {
      singular: 'Tebibyte',
      plural: 'Tebibytes',
    },
    to_anchor: 1.09951162778e12,
  },
};

const measure: Measure<DigitalSystems, DigitalUnits> = {
  systems: {
    bit,
    byte,
    SI,
    IEC,
  },
  anchors: {
    SI: {
      IEC: {
        ratio: 1,
      },
      bit: {
        ratio: 8,
      },
      byte: {
        ratio: 1,
      },
    },
    IEC: {
      SI: {
        ratio: 1,
      },
      bit: {
        ratio: 8,
      },
      byte: {
        ratio: 1,
      },
    },
    bit: {
      SI: {
        ratio: 1.25e-1,
      },
      IEC: {
        ratio: 1.25e-1,
      },
      byte: {
        ratio: 1.25e-1,
      },
    },
    byte: {
      SI: {
        ratio: 1,
      },
      bit: {
        ratio: 8,
      },
      IEC: {
        ratio: 1,
      },
    },
  },
};

export default measure;
