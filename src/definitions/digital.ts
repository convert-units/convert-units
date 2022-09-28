import { Measure, Unit } from './../index';
export type DigitalUnits =
  | DigitalBitsUnits
  | DigitalBibitsUnits
  | DigitalBytesUnits
  | DigitalBibytesUnits;
export type DigitalSystems = 'bits' | 'bibits' | 'bytes' | 'bibytes';

export type DigitalBitsUnits = 'b' | 'Kb' | 'Mb' | 'Gb' | 'Tb';
export type DigitalBibitsUnits = 'b' | 'Kib' | 'Mib' | 'Gib' | 'Tib';
export type DigitalBytesUnits = 'B' | 'KB' | 'MB' | 'GB' | 'TB';
export type DigitalBibytesUnits = 'B' | 'KiB' | 'MiB' | 'GiB' | 'TiB';

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

const bibits: Record<DigitalBibitsUnits, Unit> = {
  b: {
    name: {
      singular: 'Bit',
      plural: 'Bits',
    },
    to_anchor: 1,
  },
  Kib: {
    name: {
      singular: 'Kibibit',
      plural: 'Kibibits',
    },
    to_anchor: 1024,
  },
  Mib: {
    name: {
      singular: 'Mebibit',
      plural: 'Mebibits',
    },
    to_anchor: 1048576,
  },
  Gib: {
    name: {
      singular: 'Gibibit',
      plural: 'Gibibits',
    },
    to_anchor: 1073741824,
  },
  Tib: {
    name: {
      singular: 'Tebibit',
      plural: 'Tebibits',
    },
    to_anchor: 1099511627776,
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

const bibytes: Record<DigitalBibytesUnits, Unit> = {
  B: {
    name: {
      singular: 'Byte',
      plural: 'Bytes',
    },
    to_anchor: 1,
  },
  KiB: {
    name: {
      singular: 'Kibibyte',
      plural: 'Kibibytes',
    },
    to_anchor: 1024,
  },
  MiB: {
    name: {
      singular: 'Mebibyte',
      plural: 'Mebibytes',
    },
    to_anchor: 1048576,
  },
  GiB: {
    name: {
      singular: 'Gibibyte',
      plural: 'Gibibytes',
    },
    to_anchor: 1073741824,
  },
  TiB: {
    name: {
      singular: 'Tebibyte',
      plural: 'Tebibytes',
    },
    to_anchor: 1099511627776,
  },
};

const measure: Measure<DigitalSystems, DigitalUnits> = {
  systems: {
    bits,
    bibits,
    bytes,
    bibytes,
  },
  anchors: {
    bits: {
      bibits: {
        ratio: 1,
      },
      bytes: {
        ratio: 1 / 8,
      },
      bibytes: {
        ratio: 1 / 8,
      },
    },
    bibits: {
      bits: {
        ratio: 1,
      },
      bytes: {
        ratio: 1 / 8,
      },
      bibytes: {
        ratio: 1 / 8,
      },
    },
    bytes: {
      bits: {
        ratio: 8,
      },
      bibits: {
        ratio: 8,
      },
      bibytes: {
        ratio: 1,
      },
    },
    bibytes: {
      bits: {
        ratio: 8,
      },
      bibits: {
        ratio: 8,
      },
      bytes: {
        ratio: 1,
      },
    },
  },
};

export default measure;
