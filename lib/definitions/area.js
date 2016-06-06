var metric
  , imperial;

metric = {
  mm2: {
    name: {
      singular: 'Square Millimeter'
    , plural: 'Square Millimeters'
    }
  , to_anchor: 1/1000000
  }
, cm2: {
    name: {
      singular: 'Centimeter'
    , plural: 'Centimeters'
    }
  , to_anchor: 1/10000
  }
, m2: {
    name: {
      singular: 'Square Meter'
    , plural: 'Square Meters'
    }
  , to_anchor: 1
  }
, ha: {
    name: {
      singular: 'Hectare'
    , plural: 'Hectares'
    }
  , to_anchor: 10000
  }
, km: {
    name: {
      singular: 'Kilometer'
    , plural: 'Kilometers'
    }
  , to_anchor: 1000000
  }
};

imperial = {
  'in': {
    name: {
      singular: 'Inch'
    , plural: 'Inches'
    }
  , to_anchor: 1/144
  }
, ft: {
    name: {
      singular: 'Foot'
    , plural: 'Feet'
    }
  , to_anchor: 1
  }
, ac: {
    name: {
      singular: 'Acre'
    , plural: 'Acres'
    }
  , to_anchor: 43560
  }
, mi: {
    name: {
      singular: 'Mile'
    , plural: 'Miles'
    }
  , to_anchor: 27878400
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'm'
    , ratio: 10.7639
    }
  , imperial: {
      unit: 'ft'
    , ratio: 1/10.7639
    }
  }
};
