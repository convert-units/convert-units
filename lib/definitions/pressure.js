var metric
  , imperial;

metric = {
  Pa: {
      name: {
        singular: 'pascal'
      , plural: 'pascals'
      }
    , to_anchor: 1/1000000
  }
, hPa: {
    name: {
      singular: 'hectopascal'
    , plural: 'hectopascals'
    }
  , to_anchor: 1/10000
  }
, kPa: {
    name: {
      singular: 'kilopascal'
    , plural: 'kilopascals'
    }
  , to_anchor: 1/1000
  }
, MPa: {
    name: {
      singular: 'megapascal'
    , plural: 'megapascals'
    }
  , to_anchor: 1
  }
, GPa: {
    name: {
      singular: 'gigapascal'
    , plural: 'gigapascals'
    }
  , to_anchor: 1000
  }
};

imperial = {
  psi: {
    name: {
      singular: 'pound per square inch'
    , plural: 'pounds per square inch'
    }
  , to_anchor: 1/1000
  }
, ksi: {
    name: {
      singular: 'kilopound per square inch'
    , plural: 'kilopounds per square inch'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'MPa'
    , ratio: 0.145
    }
  , imperial: {
      unit: 'ksi'
    , ratio: 6.895
    }
  }
};
