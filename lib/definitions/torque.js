var metric
  , imperial;

metric = {
  'Nm': {
    name: {
      singular: 'Newton meter'
    , plural: 'Newton metres'
    }
  , to_anchor: 1
  }
, 'kNm': {
    name: {
      singular: 'kiloNewton meter'
    , plural: 'kiloNewtons metre'
    }
  , to_anchor: 1000
  }
}

  imperial = {
    'lbfft': {
      name: {
        singular: 'Pound force foot'
      , plural: 'Pound force feet'
      }
    , to_anchor: 1
    }
  , 'lbfin': {
      name: {
        singular: 'Pound force inch'
      , plural: 'Pound force inches'
      }
    , to_anchor: 0.0833
      }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'Nm'
    , ratio: 0.737562
    }
  , imperial: {
      unit: 'lbfft'
    , ratio: 1/0.737562
    }
  }
};
