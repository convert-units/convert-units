var bitspersecond;

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

module.exports = {
  bitspersecond: bitspersecond,
  _anchors: {
    bitspersecond: {
      unit: "bps",
      ratio: 1 / 8
    }
  }
};
