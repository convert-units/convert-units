var metric
  , imperial;

metric = {
	'gal/ha': {
    name: {
      singular: 'Gallon per hectare'
    , plural: 'Gallons per hectare'
    }
  , to_anchor: 3.78541
  },
  'l/ha': {
    name: {
      singular: 'Litre per hectare'
    , plural: 'Litres per hectare'
    }
  , to_anchor: 1
  },
  'ml/ha': {
    name: {
      singular: 'Millitre per hectare'
    , plural: 'Millitres per hectare'
    }
  , to_anchor: 1/1000
  },
};

imperial = {
	'gal/ac': {
    name: {
      singular: 'Gallon per acre'
    , plural: 'Gallons per acre'
    }
  , to_anchor: 1
  }, 
	'l/ac': {
    name: {
      singular: 'Litre per acre'
    , plural: 'Litres per acre'
    }
  , to_anchor: 1.5319
  },
  'ml/ac': {
    name: {
      singular: 'Millitre per acre'
    , plural: 'Millitres per acre'
    }
  , to_anchor: 1.5319 * 1000
  },
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'l/ha'
    , ratio: 1/1.12085
    }
  , imperial: {
      unit: 'gal/ac'
    , ratio: 1.12085
    }
  }
};
