var metric
, imperial;

metric = {
  'n-m': {
    name: {
      singular: 'newton-meter'
    , plural: 'newton-meters'
    }
  , to_anchor: 1
  }
}
imperial = {
'lbf-ft': {
    name: {
      singular: 'foot pound'
    , plural: 'foot pounds'
    }
  , to_anchor: 1
  }
, 'lbf-in': {
    name: {
      singular: 'inch pound'
    , plural: 'inch pounds'
    }
  , to_anchor: 1/12
  }
};


module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'n-m'
    , ratio: 0.737562
    },
    imperial: {
      unit: 'lbf-ft',
      ratio: 1.355818
    }
  }
};

