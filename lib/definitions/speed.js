var metric
  , imperial;

metric = {
  "m/s": {
    name: {
      singular: 'Metres per second'
    , plural: 'Metres per second'
    }
  , to_anchor: 3.6
  }
, "km/h": {
    name: {
      singular: 'Kilometres per hour'
    , plural: 'Kilometres per hour'
    }
  , to_anchor: 1
  }
}

  imperial = {
    mph: {
      name: {
        singular: 'Miles per hour'
      , plural: 'Miles per hour'
      }
    , to_anchor: 1
    }
  , knot: {
      name: {
        singular: 'Knot'
      , plural: 'Knots'
      }
    , to_anchor: 1.150779
    }
  , "ft/s": {
      name: {
        singular: 'Feet per second'
      , plural: 'Feet per second'
      }
    , to_anchor: 0.681818
      }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'km/h'
    , ratio: 1/1.609344
    }
  , imperial: {
      unit: 'mph'
    , ratio: 1.609344
    }
  }
};
