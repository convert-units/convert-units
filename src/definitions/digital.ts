import { Measure, Unit } from './../index.js';
export type DigitalUnits =
  | DigitalSIUnits
  | DigitalIECUnits
  | DigitalBitUnit
  | DigitalByteUnit;
export type DigitalSystems = 'SI' | 'IEC' | 'bit' | 'byte';

export type DigitalSIUnits = 'kB' | 'MB' | 'GB' | 'TB';
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
  kB: {
    name: {
      singular: 'Kilobit',
      plural: 'Kilobits',
    },
    to_anchor: 1e3,
  },
  MB: {
    name: {
      singular: 'Megabit',
      plural: 'Megabits',
    },
    to_anchor: 1e6,
  },
  GB: {
    name: {
      singular: 'Gigabit',
      plural: 'Gigabits',
    },
    to_anchor: 1e9,
  },
  TB: {
    name: {
      singular: 'Terabit',
      plural: 'Terabits',
    },
    to_anchor: 1e12,
  },
};

const IEC: Record<DigitalIECUnits, Unit> = {
  KiB: {
    name: {
      singular: 'Kilibyte',
      plural: 'Kilibytes',
    },
    to_anchor: 1.024e3,
  },
  MiB: {
    name: {
      singular: 'Megibyte',
      plural: 'Megibytes',
    },
    to_anchor: 1.048576e6,
  },
  GiB: {
    name: {
      singular: 'Gigibyte',
      plural: 'Gigibytes',
    },
    to_anchor: 1.073741824e9,
  },
  TiB: {
    name: {
      singular: 'Teribyte',
      plural: 'Teribytes',
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
