var metric
  , imperial;

metric = {
  pcs: {
    name: {
      singular: 'Count'
    , plural: 'Count'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: {}
, _anchors: {
    metric: {
      unit: 'pcs'
    , ratio: 1
    }
  }
};
