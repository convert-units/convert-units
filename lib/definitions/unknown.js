var metric
  , imperial;

metric = {
  unknown: {
    name: {
      singular: 'Unknown'
    , plural: 'Unknown'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: {}
, _anchors: {
    metric: {
      unit: 'unknown'
    , ratio: 1
    }
  }
};
