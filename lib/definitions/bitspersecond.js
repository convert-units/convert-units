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
    to_anchor: Math.pow(1000, 1)
  },
  Mbps: {
    name: {
      singular: "Megabit per second",
      plural: "Megabits per second"
    },
    to_anchor: Math.pow(1000, 2)
  },
  Gbps: {
    name: {
      singular: "Gigabit per second",
      plural: "Gigabits per second"
    },
    to_anchor: Math.pow(1000, 3)
  },
  Tbps: {
    name: {
      singular: "Terabit per second",
      plural: "Terabits per second"
    },
    to_anchor: Math.pow(1000, 4)
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
