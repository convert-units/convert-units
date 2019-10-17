var bytespersecond;

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

module.exports = {
  bytespersecond: bytespersecond,
  _anchors: {
    bytespersecond: {
      unit: "Bps",
      ratio: 8
    }
  }
};
