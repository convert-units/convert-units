var metric
  , imperial;

metric = {
  'Ohm': {
    name: {
      singular: 'Ohm'
      , plural: 'Ohms'
    }
    , to_anchor: 1
  }
  , 'kOhm': {
    name: {
      singular: 'Kiloohm'
      , plural: 'Kiloohms'
    }
    , to_anchor: 1000
  }
  , 'MOhm': {
    name: {
      singular: 'Megaohm'
      , plural: 'Megaohms'
    }
    , to_anchor: 1000000
  }
};

module.exports = {
  metric: metric
  , imperial: {}
  , _anchors: {
    metric: {
      unit: 'Ohm'
      , ratio: 1
    }
  }
};

