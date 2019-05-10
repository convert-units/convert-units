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
  }
, mt: {
    name: {
      singular: 'Metric Tonne'
    , plural: 'Metric Tonnes'
    }
  , to_anchor: 1000
  }
, "bags": {
    name: {
      singular: 'Bag'
    , plural: 'Bags'
    }
  , to_anchor: 1/1
  }
, "1,000 seeds": {
    name: {
      singular: '1,000 Seeds'
    , plural: '1,000 Seeds'
    }
  , to_anchor: 1/1
  }
, "10,000 seeds": {
    name: {
      singular: '10,000 Seeds'
    , plural: '10,000 Seeds'
    }
  , to_anchor: 1/1
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
, lbs: {
    name: {
      singular: 'Pound'
    , plural: 'Pounds'
    }
  , to_anchor: 1
  }
, 'US ton': {
		name: {
			singular: 'US ton',
			plural: 'US tons'
		}
	,  to_anchor: 2000
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
