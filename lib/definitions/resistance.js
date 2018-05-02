var metric
  , imperial;

metric = {
  'Ω': {
    name: {
      singular: 'Ohm'
      , plural: 'Ohms'
    }
    , to_anchor: 1
  }
  , 'kΩ': {
    name: {
      singular: 'Kiloohm'
      , plural: 'Kiloohms'
    }
    , to_anchor: 1000
  }
  , 'MΩ': {
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
      unit: 'Ω'
      , ratio: 1
    }
  }
};

