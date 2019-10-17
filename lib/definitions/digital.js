var bits,
  bitspersecond,
  bytes,
  bytespersecond,
  bibytes,
  bibytespersecond,
  bibits,
  bibitspersecond;

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
    to_anchor: 1024
  },
  Mb: {
    name: {
      singular: "Megabit",
      plural: "Megabits"
    },
    to_anchor: 1048576
  },
  Gb: {
    name: {
      singular: "Gigabit",
      plural: "Gigabits"
    },
    to_anchor: 1073741824
  },
  Tb: {
    name: {
      singular: "Terabit",
      plural: "Terabits"
    },
    to_anchor: 1099511627776
  }
};

bitspersecond = {
  bps: {
    name: {
      singular: "Bit per second",
      plural: "Bits per second"
    },
    to_anchor: 1
  },
  Kbps: {
    name: {
      singular: "Kilobit per second",
      plural: "Kilobits per second"
    },
    to_anchor: 1024
  },
  Mbps: {
    name: {
      singular: "Megabit per second",
      plural: "Megabits per second"
    },
    to_anchor: 1048576
  },
  Gbps: {
    name: {
      singular: "Gigabit per second",
      plural: "Gigabits per second"
    },
    to_anchor: 1073741824
  },
  Tbps: {
    name: {
      singular: "Terabit per second",
      plural: "Terabits per second"
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
  MB: {
    name: {
      singular: "Megabyte",
      plural: "Megabytes"
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
  TB: {
    name: {
      singular: "Terabyte",
      plural: "Terabytes"
    },
    to_anchor: 1099511627776
  }
};

bytespersecond = {
  Bps: {
    name: {
      singular: "Byte per second",
      plural: "Bytes per second"
    },
    to_anchor: 1
  },
  KBps: {
    name: {
      singular: "Kilobyte per second",
      plural: "Kilobytes per second"
    },
    to_anchor: 1024
  },
  MBps: {
    name: {
      singular: "Megabyte per second",
      plural: "Megabytes per second"
    },
    to_anchor: 1048576
  },
  GBps: {
    name: {
      singular: "Gigabyte per second",
      plural: "Gigabytes per second"
    },
    to_anchor: 1073741824
  },
  TBps: {
    name: {
      singular: "Terabyte per second",
      plural: "Terabytes per second"
    },
    to_anchor: 1099511627776
  }
};

bibytes = {
  KiB: {
    name: {
      singular: "Kibibyte",
      plural: "Kibibytes"
    },
    to_anchor: 1024
  },
  MiB: {
    name: {
      singular: "Mebibyte",
      plural: "Mebibytes"
    },
    to_anchor: 1048576
  },
  GiB: {
    name: {
      singular: "Gibibyte",
      plural: "Gibibytes"
    },
    to_anchor: 1073741824
  },
  TiB: {
    name: {
      singular: "Tebibyte",
      plural: "Tebibytes"
    },
    to_anchor: 1099511627776
  }
};

bibytespersecond = {
  KiBps: {
    name: {
      singular: "Kibibyte per second",
      plural: "Kibibytes per second"
    },
    to_anchor: 1024
  },
  MiBps: {
    name: {
      singular: "Mebibyte per second",
      plural: "Mebibytes per second"
    },
    to_anchor: 1048576
  },
  GiBps: {
    name: {
      singular: "Gibibyte per second",
      plural: "Gibibytes per second"
    },
    to_anchor: 1073741824
  },
  TiBps: {
    name: {
      singular: "Tebibyte per second",
      plural: "Tebibytes per second"
    },
    to_anchor: 1099511627776
  }
};

bibits = {
  Kib: {
    name: {
      singular: "Kibibit",
      plural: "Kibibits"
    },
    to_anchor: 1024
  },
  Mib: {
    name: {
      singular: "Mebibit",
      plural: "Mebibits"
    },
    to_anchor: 1048576
  },
  Gib: {
    name: {
      singular: "Gibibit",
      plural: "Gibibits"
    },
    to_anchor: 1073741824
  },
  Tib: {
    name: {
      singular: "Tebibit",
      plural: "Tebibits"
    },
    to_anchor: 1099511627776
  }
};

bibitspersecond = {
  Kibps: {
    name: {
      singular: "Kibibit per second",
      plural: "Kibibits per second"
    },
    to_anchor: 1024
  },
  Mibps: {
    name: {
      singular: "Mebibit per second",
      plural: "Mebibits per second"
    },
    to_anchor: 1048576
  },
  Gibps: {
    name: {
      singular: "Gibibit per second",
      plural: "Gibibits per second"
    },
    to_anchor: 1073741824
  },
  Tibps: {
    name: {
      singular: "Tebibit per second",
      plural: "Tebibits per second"
    },
    to_anchor: 1099511627776
  }
};

module.exports = {
  bits: bits,
  bitspersecond: bitspersecond,
  bytes: bytes,
  bytespersecond: bytespersecond,
  bibytes: bibytes,
  bibytespersecond: bibytespersecond,
  bibits: bibits,
  bibitspersecond: bibitspersecond,
  _anchors: {
    bits: {
      unit: "b",
      ratio: 1 / 8
    },
    bitspersecond: {
      unit: "bps",
      ratio: 1 / 8
    },
    bytes: {
      unit: "B",
      ratio: 8
    },
    bytespersecond: {
      unit: "Bps",
      ratio: 8
    },
    bibytes: {
      unit: "iB",
      ratio: 8
    },
    bibytespersecond: {
      unit: "iBps",
      ratio: 8
    },
    bibits: {
      unit: "ib",
      ratio: 8
    },
    bibitspersecond: {
      unit: "ibps",
      ratio: 8
    }
  }
};
