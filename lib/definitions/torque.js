var metric
  , imperial;

metric = {
  Nm: {
    name: {
      singular: 'Newton metre'
      , plural: 'Newton metres'
    }
    , to_anchor: 1
  }
  , Ncm: {
    name: {
      singular: 'Newton centimeter'
      , plural: 'Newton centimeters'
    }
    , to_anchor: 1/100
  }
};

imperial = {
  'lb-in': {
    name: {
      singular: 'Pound inch'
      , plural: 'Pound inches'
    }
    , to_anchor: 1/12
  }
  , 'lb-ft': {
    name: {
      singular: 'Pound foot'
      , plural: 'Pound foots'
    }
    , to_anchor: 1
  }
};

module.exports = {
  metric: metric
  , imperial: imperial
  , _anchors: {
    metric: {
      unit: 'Nm'
      , ratio: 0.737562
    }
  , imperial: {
      unit: 'lb-ft'
      , ratio: 1/0.737562
    }
  }
};

