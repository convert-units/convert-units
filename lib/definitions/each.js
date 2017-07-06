var metric
  , imperial;

metric = {
  ea: {
    name: {
      singular: 'Each'
    , plural: 'Each'
    }
  , to_anchor: 1
  },
  dz: {
    name: {
      singular: 'Dozen'
    , plural: 'Dozens'
    }
  , to_anchor: 12
  }
};

module.exports = {
  metric: metric
, imperial: {}
, _anchors: {
    metric: {
      unit: 'ea'
    , ratio: 1
    }
  }
};
