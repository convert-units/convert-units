var bibytespersecond;

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

module.exports = {
  bibytespersecond: bibytespersecond,
  _anchors: {
    bibytespersecond: {
      unit: "iBps",
      ratio: 8
    }
  }
};
