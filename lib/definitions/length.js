var metric
  , imperial;

metric = {
  mm: {
    name: {
      singular: 'Millimeter'
    , plural: 'Millimeters'
    }
  , to_anchor: 1/1000
  }
, cm: {
    name: {
      singular: 'Centimeter'
    , plural: 'Centimeters'
    }
  , to_anchor: 1/100
  }
, m: {
    name: {
      singular: 'Meter'
    , plural: 'Meters'
    }
  , to_anchor: 1
  }
};

imperial = {
  'in': {
    name: {
      singular: 'Inch'
    , plural: 'Inches'
    }
  , to_anchor: 1/12
  }
, ft: {
    name: {
      singular: 'Foot'
    , plural: 'Feet'
    }
  , to_anchor: 1
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
