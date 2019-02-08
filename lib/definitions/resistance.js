var metric
  , imperial;

metric = {
  Ω: {
    name: {
      singular: 'Ohm'
      , plural: 'Ohms'
    }
    , to_anchor: 1
  }
, mΩ: {
    name: {
      singular: 'Milliohm'
      , plural: 'Milliohms'
    }
    , to_anchor: 1/1000
  }
, μΩ: {
    name: {
      singular: 'Microohm'
      , plural: 'Microohms'
    }
    , to_anchor: 1/1000000
  }
, kΩ: {
    name: {
      singular: 'Kiloohm'
      , plural: 'Kiloohms'
    }
    , to_anchor: 1e3
  }
, MΩ: {
    name: {
      singular: 'Megaohm'
      , plural: 'Megaohms'
    }
    , to_anchor: 1e6
  }
};

module.exports = {
  metric: metric
  , imperial: {}
  , _anchors: {
    metric: {
      unit: 'f'
      , ratio: 1
    }
  }
};

