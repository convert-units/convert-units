var metric
  , imperial;

metric = {
    mps: {
        name: {
            singular: 'Metre per second'
            , plural: 'Metres per second'
        }
        , to_anchor: 3.6
    },
    kph: {
        name: {
            singular: 'Kilometre per hour'
            , plural: 'Kilometres per hour'
        }
        , to_anchor: 1
    }
};

imperial = {
    fps: {
        name: {
            singular: 'Foot per second'
            , plural: 'Feet per second'
        }
        , to_anchor: 0.681818
    },
    mph: {
        name: {
            singular: 'Mile per hour'
            , plural: 'Miles per hour'
        }
        , to_anchor: 1
    },
    kn: {
        name: {
            singular: 'knot'
            , plural: 'knots'
        }
        , to_anchor: 1.150779
    }
};

module.exports = {
  metric: metric
  , imperial: imperial
  , _anchors: {
    metric: {
      unit: 'kph'
      , ratio: 0.621371
    }
    , imperial: {
      unit: 'mph'
      , ratio: 1/0.621371
    }
  }
};
