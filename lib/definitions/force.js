var metric
  , imperial;

metric = {
  N: {
    name: {
      singular: 'Newton'
      , plural: 'Newtons'
    }
    , to_anchor: 1
  }
  , kN: {
    name: {
      singular: 'Kilonewton'
      , plural: 'Kilonewtons'
    }
    , to_anchor: 1000
  }
  , lbf: {
    name: {
      singular: 'Pound-force'
      , plural: 'Pound-forces'
    }
    , to_anchor: 4.44822
  }
, mtf: {
    name: {
      singular: 'Metric-Ton-force'
      , plural: 'Metric-ton-forces'
    }
    , to_anchor: 1/0.0001019716
  }
, ozf: {
    name: {
      singular: 'Oz-force'
      , plural: 'Oz-forces'
    }
    , to_anchor: 1/3.596943

  }
, tf: {
    name: {
      singular: 'Ton-force'
      , plural: 'Ton-forces'
    }
    , to_anchor: 1/0.000112404

  }
};

module.exports = {
  metric: metric
  , imperial: {}
  , _anchors: {
    metric: {
      unit: 'N'
      , ratio: 1
    }
  }
};

