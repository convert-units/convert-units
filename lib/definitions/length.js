var metric
  , imperial;

metric = {
  mm: {
    name: {
      singular: 'Millimeter'
    , plural: 'Millimeters'
    }
  , to_anchor: 1/1000
  }
, cm: {
    name: {
      singular: 'Centimeter'
    , plural: 'Centimeters'
    }
  , to_anchor: 1/100
  }
, m: {
    name: {
      singular: 'Meter'
    , plural: 'Meters'
    }
  , to_anchor: 1
  }
, km: {
    name: {
      singular: 'Kilometer'
    , plural: 'Kilometers'
    }
  , to_anchor: 1000
  }
  
/* Burmese units */
, sanchi: {
    name: {
      singular: 'sanchi'
    , plural: 'sanchi'
    }
  , to_anchor: 0.79375 / 10000
  }
, hnan: {
    name: {
      singular: 'hnan'
    , plural: 'hnan'
    }
  , to_anchor: 0.79375 / 1000
  }
, mayaw: {
    name: {
      singular: 'mayaw'
    , plural: 'mayaw'
    }
  , to_anchor: 4.7625 / 1000
  }
, letthit: {
    name: {
      singular: 'letthit'
    , plural: 'letthit'
    }
  , to_anchor: 1.905 / 100
  }
, maik: {
    name: {
      singular: 'maik'
    , plural: 'maik'
    }
  , to_anchor: 15.24 / 100
  }
, htwa: {
    name: {
      singular: 'htwa'
    , plural: 'htwa'
    }
  , to_anchor: 22.86 / 100
  }
, taung: {
    name: {
      singular: 'taung'
    , plural: 'taung'
    }
  , to_anchor: 45.72 / 100
  }
, lan: {
    name: {
      singular: 'lan'
    , plural: 'lan'
    }
  , to_anchor: 1.8288
  }
, ta: {
    name: {
      singular: 'ta'
    , plural: 'ta'
    }
  , to_anchor: 3.2004
  }
, outthaba: {
    name: {
      singular: 'outthaba'
    , plural: 'outthaba'
    }
  , to_anchor: 64.008
  }
, kawtha: {
    name: {
      singular: 'kawtha'
    , plural: 'kawtha'
    }
  , to_anchor: 1.28016 * 1000
  }
, gawout: {
    name: {
      singular: 'gawout'
    , plural: 'gawout'
    }
  , to_anchor: 5.12064 * 1000
  }
, yuzana: {
    name: {
      singular: 'yuzana'
    , plural: 'yuzana'
    }
  , to_anchor: 20.4826 * 1000
  }
};

imperial = {
  'in': {
    name: {
      singular: 'Inch'
    , plural: 'Inches'
    }
  , to_anchor: 1/12
  }
, ft: {
    name: {
      singular: 'Foot'
    , plural: 'Feet'
    }
  , to_anchor: 1
  }
, mi: {
    name: {
      singular: 'Mile'
    , plural: 'Miles'
    }
  , to_anchor: 5280
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'm'
    , ratio: 3.281
    }
  , imperial: {
      unit: 'ft'
    , ratio: 1/3.281
    }
  }
};
