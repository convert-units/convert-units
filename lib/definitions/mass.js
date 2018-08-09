var metric
  , imperial;

metric = {
  mcg: {
    name: {
      singular: 'Microgram'
    , plural: 'Micrograms'
    }
  , to_anchor: 1/1000000
  }
, mg: {
    name: {
      singular: 'Milligram'
    , plural: 'Milligrams'
    }
  , to_anchor: 1/1000
  }
, g: {
    name: {
      singular: 'Gram'
    , plural: 'Grams'
    }
  , to_anchor: 1
  }
, kg: {
    name: {
      singular: 'Kilogram'
    , plural: 'Kilograms'
    }
  , to_anchor: 1000
} , t: {
    name: {
      singular: 'tonne'
    , plural: 'tonnes'
    }
  , to_anchor: 1000000
  }
};

imperial = {
  oz: {
    name: {
      singular: 'Ounce'
    , plural: 'Ounces'
    }
  , to_anchor: 1/16
  }
, lb: {
    name: {
      singular: 'Pound'
    , plural: 'Pounds'
    }
  , to_anchor: 1
}
, 'ton (US)': {
    name: {
      singular: 'Ton (US)',
      plural: 'Tons (US)',
    }
    , to_anchor: 2000,
  }
, 'bale (cotton/au)': {
    name: {
      singular: 'Cotton Bale (AU)'
    , plural: 'Cotton Bales (AU)'
    }
  , to_anchor: 1190.5
  }
, saca: {
    name: {
      singular: 'Saca'
    , plural: 'Sacas'
    }
  , to_anchor: 132.277
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'g'
    , ratio: 1/453.592
    }
  , imperial: {
      unit: 'lb'
    , ratio: 453.592
    }
  }
};
