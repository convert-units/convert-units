var metric
  , imperial;

metric = {
  atm: {
    name: {
      singular: 'atmosphere'
      , plural: 'atmospheres'
    }
    , to_anchor: 101.325
  }
, Pa: {
    name: {
      singular: 'pascal'
    , plural: 'pascals'
    }
  , to_anchor: 1/1000
  }
, kPa: {
    name: {
      singular: 'kilopascal'
    , plural: 'kilopascals'
    }
  , to_anchor: 1
  }
, MPa: {
    name: {
      singular: 'megapascal'
    , plural: 'megapascals'
    }
  , to_anchor: 1000
  }
, hPa: {
    name: {
      singular: 'hectopascal'
    , plural: 'hectopascals'
    }
  , to_anchor: 1/10
  }
, bar: {
    name: {
      singular: 'bar'
    , plural: 'bar'
    }
  , to_anchor: 100
  }
, millibar: {
    name: {
      singular: 'millibar'
    , plural: 'millibar'
    }
  , to_anchor: 1/10
  }
, torr: {
    name: {
      singular: 'torr'
    , plural: 'torr'
    }
  , to_anchor: 101325/760000
  }
, mmHg: {
    name: {
      singular: 'mmHg'
      , plural: 'mmHg'
    },
    to_anchor: 0.133322
  }
, 'N/m2': {
    name: {
      singular: 'newton per meter2'
    , plural: 'newtons per meter2'
    }
  , to_anchor: 1/1000
  }
};

imperial = {
  psi: {
    name: {
      singular: 'pound per square inch'
    , plural: 'pounds per square inch'
    }
  , to_anchor: 1
  }
, ksi: {
    name: {
      singular: 'kilopound per square inch'
    , plural: 'kilopound per square inch'
    }
  , to_anchor: 1000
  },
  inH2O: {
    name: {
      singular: 'inch of water',
      plural: 'inches of water'
    },
    to_anchor: 0.0360912
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'kPa'
    , ratio: 0.14503768078
    }
  , imperial: {
      unit: 'psi'
    , ratio: 6.89476
    }
  }
};
