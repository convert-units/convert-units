const percent = {
  ratio: {
    name: {
      singular: 'ratio',
      plural: 'ratio',
    },
    to_anchor: 1,
  },
  percentage: {
    name: {
      singular: 'percentage',
      plural: 'percentage',
    },
    to_anchor: 100,
  },
  '%': {
    name: {
      singular: 'percentage',
      plural: 'percentage',
    },
    to_anchor: 100,
  },
  'per mile': {
    name: {
      singular: 'per mile ',
      plural: 'per mile',
    },
    to_anchor: 1000,
  },
  '‰': {
    name: {
      singular: 'per mile',
      plural: 'per mile',
    },
    to_anchor: 1000,
  },
  bp: {
    name: {
      singular: ' basis point',
      plural: ' basis point',
    },
    to_anchor: 10000,
  },
  '‱': {
    name: {
      singular: ' basis point',
      plural: ' basis point',
    },
    to_anchor: 10000,
  },
};

module.exports = {
  metric: percent,
  _anchors: {
    percent: {
      unit: 'ratio',
      ratio: 1,
    },
  },
};
