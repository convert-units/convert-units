var metric
  , imperial;

  // bu how to do bushels?
metric = {
	'kg/ac': {
	  name: {
	    singular: 'Kilogram per hectare'
	  , plural: 'Kilograms per hectare'
	  }
	, to_anchor: 2.47105
	},
  'kg/ha': {
    name: {
      singular: 'Kilogram per hectare'
    , plural: 'Kilograms per hectare'
    }
  , to_anchor: 1
  },
  'g/ha': {
    name: {
      singular: 'Gram per hectare'
    , plural: 'Grams per hectare'
    }
  , to_anchor: 1/1000
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
  'mt/ha': {
    name: {
      singular: 'Metric tonne per hectare'
    , plural: 'Metric tonnes per hectare'
    }
  , to_anchor: 1000
  }
};

imperial = {
  'lb/ac': {
    name: {
      singular: 'Pound per acre'
    , plural: 'Pounds per acre'
    }
  , to_anchor: 1
  }
  , 'lb/ha': {
    name: {
      singular: 'Pound per acre'
    , plural: 'Pounds per acre'
    }
  , to_anchor: 1/2.47105
  }
  , 'gal/ac': {
    name: {
      singular: 'Gallon per acre'
    , plural: 'Gallons per acre'
    }
  , to_anchor: 4.54609
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'kg/ha'
    , ratio: 1/1.121
    }
  , imperial: {
      unit: 'lb/ac'
    , ratio: 1.121
    }
  }
};
