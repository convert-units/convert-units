const metric = {
  W: {
    name: {
      singular: 'Watt',
      plural: 'Watts',
    },
    to_anchor: 1,
  },
  mW: {
    name: {
      singular: 'Milliwatt',
      plural: 'Milliwatts',
    },
    to_anchor: 0.001,
  },
  kW: {
    name: {
      singular: 'Kilowatt',
      plural: 'Kilowatts',
    },
    to_anchor: 1000,
  },
  MW: {
    name: {
      singular: 'Megawatt',
      plural: 'Megawatts',
    },
    to_anchor: 1000000,
  },
  GW: {
    name: {
      singular: 'Gigawatt',
      plural: 'Gigawatts',
    },
    to_anchor: 1000000000,
  },
  PS: {
    name: {
      singular: 'Horsepower (metric)',
      plural: 'Horsepower (metric)',
    },
    to_anchor: 735.49875,
  },
};

const imperial = {
  'Btu/s': {
    name: {
      singular: 'British thermal unit per second',
      plural: 'British thermal units per second',
    },
    to_anchor: 778.16937,
  },
  'ft-lb/s': {
    name: {
      singular: 'Foot-pound per second',
      plural: 'Foot-pounds per second',
    },
    to_anchor: 1,
  },
  hp: {
    name: {
      singular: 'Horsepower (British)',
      plural: 'Horsepower (British)',
    },
    to_anchor: 550,
  },
};

export default {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      unit: 'W',
      ratio: 0.737562149,
    },
    imperial: {
      unit: 'ft-lb/s',
      ratio: 1 / 0.737562149,
    },
  },
};
