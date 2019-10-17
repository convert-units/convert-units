var bibitspersecond;

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
  bibitspersecond: bibitspersecond,
  _anchors: {
    bibitspersecond: {
      unit: "ibps",
      ratio: 8
    }
  }
};
