var metric
  , imperial;

metric = {
  'kg/h': {
    name: {
      singular: 'Kilogram per hour'
    , plural: 'Kilograms per hour'
    }
  , to_anchor: 1
}
};

imperial = {
  'lb/h': {
    name: {
      singular: 'Pound per hour'
    , plural: 'Pounds per hour'
    }
  , to_anchor: 1/2.204623
}
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'kg/h'
    , ratio: 1
    }
  , imperial: {
      unit: 'lb/h'
    , ratio: 2.204623
    }
  }
};
