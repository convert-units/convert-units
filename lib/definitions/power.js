var metric
  , imperial;
var power;

metric = {
  W: {
    name: {
      singular: 'Watt'
    , plural: 'Watts'
    }
  , to_anchor: 1
  }
, mW: {
    name: {
      singular: 'Milliwatt'
      , plural: 'Milliwatts'
    }
    , to_anchor: .001
  }
, kW: {
    name: {
      singular: 'Kilowatt'
    , plural: 'Kilowatts'
    }
  , to_anchor: 1000
  }
, MW: {
    name: {
      singular: 'Megawatt'
    , plural: 'Megawatts'
    }
  , to_anchor: 1000000
  }
, GW: {
    name: {
      singular: 'Gigawatt'
    , plural: 'Gigawatts'
    }
  , to_anchor: 1000000000
  }
};

imperial = {
  HP: {
    name: {
      singular: 'Horsepower'
    , plural: 'Horsepower'
    }
  , to_anchor: 1
  }
}

module.exports = {
  metric: matric
  , imperial: imperial
  , _anchors: {
    metric: {
      unit: 'W'
      , ratio: 1/745.7
    }
    , imperial: {
      unit: 'HP'
      , ratio: 745.7
    }
  }
};
