var metric
  , imperial;

metric = {
  m: {
    name: {
      singular: 'Meter'
    , plural: 'Meters'
    }
  , to_anchor: 1
  }
, cm: {
    to_anchor: 1/100
  }
, mm: {
    to_anchor: 1/1000
  }
};

imperial = {
  ft: {
    name: {
      singular: 'Foot'
    , plural: 'Feet'
    }
  , to_anchor: 1
  }
, 'in': {
    to_anchor: 1/12
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'm'
    , ratio: 3.281
    }
  , imperial: {
      unit: 'ft'
    , ratio: 1/3.281
    }
  }
};
