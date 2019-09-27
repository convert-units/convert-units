var bits
  , bytes;

bits = {
  b: {
    name: {
      singular: "Bit",
      plural: "Bits"
    },
    to_anchor: 1
  },
  Kb: {
    name: {
      singular: "Kilobit",
      plural: "Kilobits"
    },
    to_anchor: 1000
  },
  kbps: {
    name: {
      singular: "Kilobit per second",
      plural: "Kilobits per second"
    },
    to_anchor: 1000
  },
  Kib: {
    name: {
      singular: "Kibibit",
      plural: "Kibibits"
    },
    to_anchor: 1024
  },
  Kibps: {
    name: {
      singular: "Kibibit per second",
      plural: "Kibibits per second"
    },
    to_anchor: 1024
  },
  Mb: {
    name: {
      singular: "Megabit",
      plural: "Megabits"
    },
    to_anchor: 1000000
  },
  Mbps: {
    name: {
      singular: "Megabit per second",
      plural: "Megabits per second"
    },
    to_anchor: 1000000
  },
  Mib: {
    name: {
      singular: "Mebibit",
      plural: "Mebibits"
    },
    to_anchor: 1048576
  },
  Mibps: {
    name: {
      singular: "Mebibit per second",
      plural: "Mebibits per second"
    },
    to_anchor: 1048576
  },
  Gb: {
    name: {
      singular: "Gigabit",
      plural: "Gigabits"
    },
    to_anchor: 1000000000
  },
  Gbps: {
    name: {
      singular: "Gigabit per second",
      plural: "Gigabits per second"
    },
    to_anchor: 1000000000
  },
  Gib: {
    name: {
      singular: "Gibibit",
      plural: "Gibibits"
    },
    to_anchor: 1073741824
  },
  Gibps: {
    name: {
      singular: "Gibibit per second",
      plural: "Gibibits per second"
    },
    to_anchor: 1073741824
  },
  Tb: {
    name: {
      singular: "Terabit",
      plural: "Terabits"
    },
    to_anchor: 1000000000000
  },
  Tbps: {
    name: {
      singular: "Terabit per second",
      plural: "Terabits per second"
    },
    to_anchor: 1000000000000
  },
  Tib: {
    name: {
      singular: "Tebibit",
      plural: "Tebibits"
    },
    to_anchor: 1099511627776
  },
  Tibps: {
    name: {
      singular: "Tebibit per second",
      plural: "Tebibits per second"
    },
    to_anchor: 1099511627776
  },
  Pb: {
    name: {
      singular: "Tebibit",
      plural: "Tebibits"
    },
    to_anchor: 1000000000000000
  },
  Pbps: {
    name: {
      singular: "Tebibit per second",
      plural: "Tebibits per second"
    },
    to_anchor: 1000000000000000
  },
  Pib: {
    name: {
      singular: "Pebibit",
      plural: "Pebibits"
    },
    to_anchor: 1099511627776
  },
  Pibps: {
    name: {
      singular: "Pebibit per second",
      plural: "Pebibits per second"
    },
    to_anchor: 1099511627776
  }
};

bytes = {
  B: {
    name: {
      singular: "Byte",
      plural: "Bytes"
    },
    to_anchor: 1
  },
  KB: {
    name: {
      singular: "Kilobyte",
      plural: "Kilobytes"
    },
    to_anchor: 1024
  },
  KBps: {
    name: {
      singular: "Kilobyte per second",
      plural: "Kilobytes"
    },
    to_anchor: 1024
  },
  KiB: {
    name: {
      singular: "Kibibyte",
      plural: "Kibibytes"
    },
    to_anchor: 1024
  },
  KiBps: {
    name: {
      singular: "Kibibyte per second",
      plural: "Kibibytes per second"
    },
    to_anchor: 1024
  },
  MB: {
    name: {
      singular: "Megabyte",
      plural: "Megabytes"
    },
    to_anchor: 1048576
  },
  MBps: {
    name: {
      singular: "Megabyte per second",
      plural: "Megabytes per second"
    },
    to_anchor: 1048576
  },
  MiB: {
    name: {
      singular: "Mebibyte",
      plural: "Mebibytes"
    },
    to_anchor: 1048576
  },
  MiBps: {
    name: {
      singular: "Mebibyte per second",
      plural: "Mebibytes per second"
    },
    to_anchor: 1048576
  },
  GB: {
    name: {
      singular: "Gigabyte",
      plural: "Gigabytes"
    },
    to_anchor: 1073741824
  },
  GBps: {
    name: {
      singular: "Gigabyte per second",
      plural: "Gigabytes per second"
    },
    to_anchor: 1073741824
  },
  GiB: {
    name: {
      singular: "Gibibyte",
      plural: "Gibibytes"
    },
    to_anchor: 1073741824
  },
  GiBps: {
    name: {
      singular: "Gibibyte per second",
      plural: "Gibibytes per second"
    },
    to_anchor: 1073741824
  },
  TB: {
    name: {
      singular: "Terabyte",
      plural: "Terabytes"
    },
    to_anchor: 1099511627776
  },
  TBps: {
    name: {
      singular: "Terabyte per second",
      plural: "Terabytes per second"
    },
    to_anchor: 1099511627776
  },
  TiB: {
    name: {
      singular: "Tebibyte",
      plural: "Tebibytes"
    },
    to_anchor: 1099511627776
  },
  TiBps: {
    name: {
      singular: "Tebibyte per second",
      plural: "Tebibytes per second"
    },
    to_anchor: 1099511627776
  },
  PiB: {
    name: {
      singular: "Pebibyte",
      plural: "Pebibytes"
    },
    to_anchor: 1099511627776
  },
  PiBps: {
    name: {
      singular: "Pebibyte per second",
      plural: "Pebibytes per second"
    },
    to_anchor: 1099511627776
  },
  PB: {
    name: {
      singular: "Petabyte",
      plural: "Petabytes"
    },
    to_anchor: 1000000000000000
  },
  PBps: {
    name: {
      singular: "Petabyte per second",
      plural: "Petabytes per second"
    },
    to_anchor: 1000000000000000
  }
};

module.exports = {
  bits: bits
, bytes: bytes
, _anchors: {
    bits: {
      unit: 'b'
    , ratio: 1/8
    }
  , bytes: {
      unit: 'B'
    , ratio: 8
    }
  }
};
