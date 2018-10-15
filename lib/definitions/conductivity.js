var metric;

metric = {
  'S/m': {
    name: {
      singular: 'Siemen per meter'
      , plural: 'Siemens per meter'
    }
    , to_anchor: 1
  }
  , 'mS/m': {
    name: {
      singular: 'Millisiemen per meter'
      , plural: 'Millisiemens per meter'
    }
    , to_anchor: 1e-3
  }
  ,'mS/cm': {
    name: {
      singular: 'Millisiemen per centimeter'
      , plural: 'Millisiemens per centimeter'
    }
    , to_anchor: 1e-1
  }

  ,'uS/cm': {
    name: {
      singular: 'Microsiemen per centimeter'
      , plural: 'Microsiemens per centimeter'
    }
    , to_anchor: 1e-4
  }
};

module.exports = {
  metric: metric
  , _anchors: {
    metric: {
      unit: 'S/m'
    }
  }
};
