var metric
  , imperial;

metric = {
  f: {
    name: {
      singular: 'Farad'
      , plural: 'Farads'
    }
    , to_anchor: 1
  }
, mF: {
    name: {
      singular: 'Millifarad'
      , plural: 'Millifarads'
    }
    , to_anchor: 1/1000
  }
, μF: {
    name: {
      singular: 'Microfarad'
      , plural: 'Microfarads'
    }
    , to_anchor: 1/1000000
  }
, nF: {
    name: {
      singular: 'Nanofarad'
      , plural: 'Nanofarads'
    }
    , to_anchor: 1e-9
  }
, pF: {
    name: {
      singular: 'Picofarad'
      , plural: 'Picofarads'
    }
    , to_anchor: 1e-12
  }
};

module.exports = {
  metric: metric
  , imperial: {}
  , _anchors: {
    metric: {
      unit: 'f'
      , ratio: 1
    }
  }
};

