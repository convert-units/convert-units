var metric
  , imperial;

metric = {
  C: {
    name: {
      singular: 'Celsius'
    , plural: 'Celsius'
    }
  , to_anchor: 1
  },
  K: {
    name: {
      singular: 'Kelvin'
    , plural: 'kelvin'
    }
  , to_anchor: 1+273.15
  }
};

imperial = {
  F: {
    name: {
      signular: 'Fahrenheit'
    , plural: 'Fahrenheit'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'C'
    , ratio: 1
    }
  , imperial: {
      unit: 'F'
    , ratio: (1.8*C)+32;
    }
  }
};
