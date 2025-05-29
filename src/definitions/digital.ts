import { Measure, Unit } from './../index.js';

export type DigitalUnits =
  | DigitalBitUnits
  | DigitalByteUnits
  | DigitalIECBitUnits
  | DigitalIECByteUnits;

export type DigitalSystems = 'bit' | 'byte' | 'IECBit' | 'IECByte';

export type DigitalBitUnits = 'bit' | 'kb' | 'Mb' | 'Gb' | 'Tb';
export type DigitalByteUnits = 'byte' | 'kB' | 'MB' | 'GB' | 'TB';
export type DigitalIECBitUnits = 'Kib' | 'Mib' | 'Gib' | 'Tib';
export type DigitalIECByteUnits = 'KiB' | 'MiB' | 'GiB' | 'TiB';

const bit: Record<DigitalBitUnits, Unit> = {
  bit: {
    name: {
      singular: 'Bit',
      plural: 'Bits',
    },
    to_anchor: 1,
  },
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
};

const byte: Record<DigitalByteUnits, Unit> = {
  byte: {
    name: {
      singular: 'Byte',
      plural: 'Bytes',
    },
    to_anchor: 1,
  },
  kB: {
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

const IECBit: Record<DigitalIECBitUnits, Unit> = {
  Kib: {
    name: {
      singular: 'Kibibit',
      plural: 'Kibibits',
    },
    to_anchor: 1,
  },
  Mib: {
    name: {
      singular: 'Mebibit',
      plural: 'Mebibits',
    },
    to_anchor: 1024,
  },
  Gib: {
    name: {
      singular: 'Gibibit',
      plural: 'Gibibits',
    },
    to_anchor: 1.048576e6,
  },
  Tib: {
    name: {
      singular: 'Tebibit',
      plural: 'Tebibits',
    },
    to_anchor: 1.073741824e9,
  },
};

const IECByte: Record<DigitalIECByteUnits, Unit> = {
  KiB: {
    name: {
      singular: 'Kibibyte',
      plural: 'Kibibytes',
    },
    to_anchor: 1,
  },
  MiB: {
    name: {
      singular: 'Mebibyte',
      plural: 'Mebibytes',
    },
    to_anchor: 1024,
  },
  GiB: {
    name: {
      singular: 'Gibibyte',
      plural: 'Gibibytes',
    },
    to_anchor: 1.048576e6,
  },
  TiB: {
    name: {
      singular: 'Tebibyte',
      plural: 'Tebibytes',
    },
    to_anchor: 1.073741824e9,
  },
};

const measure: Measure<DigitalSystems, DigitalUnits> = {
  systems: {
    bit,
    byte,
    IECBit,
    IECByte,
  },
  anchors: {
    bit: {
      byte: {
        ratio: 1.25e-1,
      },
      IECBit: {
        ratio: 9.765625e-4,
      },
      IECByte: {
        ratio: 1.220703125e-4,
      },
    },
    byte: {
      bit: {
        ratio: 8,
      },
      IECBit: {
        ratio: 7.8125e-3,
      },
      IECByte: {
        ratio: 9.765625e-4,
      },
    },
    IECBit: {
      bit: {
        ratio: 1024,
      },
      byte: {
        ratio: 1.28e2,
      },
      IECByte: {
        ratio: 1.25e-1,
      },
    },
    IECByte: {
      bit: {
        ratio: 8.192e3,
      },
      byte: {
        ratio: 1024,
      },
      IECBit: {
        ratio: 8,
      },
    },
  },
};

export default measure;
