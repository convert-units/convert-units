const metric = {
  'min/km': {
    name: {
      singular: 'Minute per kilometre',
      plural: 'Minutes per kilometre',
    },
    to_anchor: 0.06,
  },
  's/m': {
    name: {
      singular: 'Second per metre',
      plural: 'Seconds per metre',
    },
    to_anchor: 1,
  },
};

const imperial = {
  'min/mi': {
    name: {
      singular: 'Minute per mile',
      plural: 'Minutes per mile',
    },
    to_anchor: 0.0113636,
  },
  's/ft': {
    name: {
      singular: 'Second per foot',
      plural: 'Seconds per foot',
    },
    to_anchor: 1,
  },
};

export default {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      unit: 's/m',
      ratio: 0.3048,
    },
    imperial: {
      unit: 's/ft',
      ratio: 1 / 0.3048,
    },
  },
};
