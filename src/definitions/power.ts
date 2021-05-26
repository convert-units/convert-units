const power = {
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
  'Btu/s': {
    name: {
      singular: 'British thermal unit per second',
      plural: 'British thermal units per second',
    },
    to_anchor: 1055.05585,
  },
  'ft-lb/s': {
    name: {
      singular: 'Foot-pound per second',
      plural: 'Foot-pounds per second',
    },
    to_anchor: 1.3558,
  },
  hp: {
    name: {
      singular: 'Horsepower',
      plural: 'Horsepower',
    },
    to_anchor: 745.7,
  },
};

export default {
  systems: {
    power,
  },
  anchors: {
    metric: {
      unit: 'W',
      ratio: 1,
    },
  },
};
