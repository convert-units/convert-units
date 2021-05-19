const metric = {
  c: {
    name: {
      singular: 'Coulomb',
      plural: 'Coulombs',
    },
    to_anchor: 1,
  },
  mC: {
    name: {
      singular: 'Millicoulomb',
      plural: 'Millicoulombs',
    },
    to_anchor: 1 / 1000,
  },
  μC: {
    name: {
      singular: 'Microcoulomb',
      plural: 'Microcoulombs',
    },
    to_anchor: 1 / 1000000,
  },
  nC: {
    name: {
      singular: 'Nanocoulomb',
      plural: 'Nanocoulombs',
    },
    to_anchor: 1e-9,
  },
  pC: {
    name: {
      singular: 'Picocoulomb',
      plural: 'Picocoulombs',
    },
    to_anchor: 1e-12,
  },
};

module.exports = {
  metric,
  imperial: {},
  _anchors: {
    metric: {
      unit: 'c',
      ratio: 1,
    },
  },
};
