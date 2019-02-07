var voltage;

voltage = {
  V: {
    name: {
      singular: 'Volt'
    , plural: 'Volts'
    }
  , to_anchor: 1
  }
, mV: {
    name: {
      singular: 'Millivolt'
      , plural: 'Millivolts'
    }
    , to_anchor: .001
  }
, kV: {
    name: {
      singular: 'Kilovolt'
    , plural: 'Kilovolts'
    }
  , to_anchor: 1000
  }
, MV: {
    name: {
      singular: 'Megavolt'
    , plural: 'Megavolts'
    }
  , to_anchor: 1E6
  }
, μV: {
  name: {
    singular: 'Microvolt'
  , plural: 'Microvolts'
  }
  , to_anchor: 1E-6
  }
};

module.exports = {
  metric: voltage
, _anchors: {
    metric: {
      unit: 'V'
    , ratio: 1
    }
  }
};
