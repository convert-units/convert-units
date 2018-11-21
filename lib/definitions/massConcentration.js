var metric;

metric = {
  'g/l': {
    name: {
      singular: 'Gram per litre'
      , plural: 'Grams per litre'
    }
    , to_anchor: 1
  }
  , 'mg/l': {
    name: {
      singular: 'Milligram per litre'
      , plural: 'Milligrams per litre'
    }
    , to_anchor: 1e-3
  }
  , 'ug/l': {
    name: {
      singular: 'Microgram per litre'
      , plural: 'Micrograms per litre'
    }
    , to_anchor: 1e-6
  }
  , 'ng/l': {
    name: {
      singular: 'Nanogram per litre'
      , plural: 'Nanograms per litre'
    }
    , to_anchor: 1e-9
  }
  , 'pg/l': {
    name: {
      singular: 'Picogram per litre'
      , plural: 'Picograms per litre'
    }
    , to_anchor: 1e-12
  }

  , 'kg/m3': {
    name: {
      singular: 'Kilogram per cubic meter'
      , plural: 'Kilograms per cubic meter'
    }
    , to_anchor: 1
  }
  , 'g/m3': {
    name: {
      singular: 'Gram per cubic meter'
      , plural: 'Grams per cubic meter'
    }
    , to_anchor: 1e-3
  }
  , 'mg/m3': {
    name: {
      singular: 'Milligram per cubic meter'
      , plural: 'Milligrams per cubic meter'
    }
    , to_anchor: 1e-6
  }
  , 'ug/m3': {
    name: {
      singular: 'Microgram per cubic meter'
      , plural: 'Micrograms per cubic meter'
    }
    , to_anchor: 1e-9
  }
  , 'ng/m3': {
    name: {
      singular: 'Nanogram per cubic meter'
      , plural: 'Nanograms per cubic meter'
    }
    , to_anchor: 1e-12
  }
  , 'ppm': {
    name: {
      singular: 'Part per million'
      , plural: 'Parts per million'
    }
    , to_anchor: 1e-3
  }
  , 'NTU': {
    name: {
      singular: 'Nephelometric turbidity unit'
      , plural: 'Nephelometric turbidity units'
    }
    , to_anchor: 1e-3
  }

};

module.exports = {
  metric: metric
  , _anchors: {
    metric: {
      unit: 'g/l'
    }
  }
};
