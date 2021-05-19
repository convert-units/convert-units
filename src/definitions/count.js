const count = {
  integer: {
    name: {
      singular: 'integer',
      plural: 'integer',
    },
    to_anchor: 1,
  },
  k: {
    name: {
      singular: 'thousand',
      plural: 'thousand',
    },
    to_anchor: 1000,
  },
  M: {
    name: {
      singular: 'million',
      plural: 'million',
    },
    to_anchor: 1000 * 1000,
  },
  G: {
    name: {
      singular: 'billion',
      plural: 'billion',
    },
    to_anchor: 1000 * 1000 * 1000,
  },
  T: {
    name: {
      singular: 'trillion',
      plural: 'trillion',
    },
    to_anchor: 1000 * 1000 * 1000 * 1000,
  },
  P: {
    name: {
      singular: 'quadrillion',
      plural: 'quadrillion',
    },
    to_anchor: 1000 * 1000 * 1000 * 1000 * 1000,
  },
  E: {
    name: {
      singular: 'quintillion',
      plural: 'quintillion',
    },
    to_anchor: 1000 * 1000 * 1000 * 1000 * 1000 * 1000,
  },
  Z: {
    name: {
      singular: 'sextillion',
      plural: 'sextillion',
    },
    to_anchor: 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000,
  },
  Y: {
    name: {
      singular: 'septillion',
      plural: 'septillion',
    },
    to_anchor: 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000,
  },
};

module.exports = {
  metric: count,
  _anchors: {
    count: {
      unit: 'integer',
      ratio: 1,
    },
  },
};
