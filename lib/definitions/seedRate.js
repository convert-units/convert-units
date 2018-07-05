var metric
  , imperial;

// This conversion file is needed in order to convert seeds/ha to seeds/ac
metric = {
  'seeds/ha': {
    name: {
      singular: 'seed per hectare'
    , plural: 'seeds per hectare'
    }
  , to_anchor: 1
	}, 
	'1,000 seeds/ha': {
		name: {
			singular: 'Thousand seeds per acre'
			, plural: 'Thousands of seeds per acre'
		}
		, to_anchor: 1000
	}, 
	'10,000 seeds/ha': {
		name: {
			singular: 'Ten thousand seeds per acre'
			, plural: 'Tens of thousands of seeds per acre'
		}
		, to_anchor: 10000
	},
};

imperial = {
	'seeds/ac': {
    name: {
      singular: 'seeds per acre'
    , plural: 'seeds tonne per acre'
    }
  , to_anchor: 1
	},
	'1,000 seeds/ac': {
		name: {
			singular: 'Thousand seeds per acre'
			, plural: 'Thousands of seeds per acre'
		}
		, to_anchor: 1000
	}, 
	'10,000 seeds/ac': {
		name: {
			singular: 'Ten thousand seeds per acre'
			, plural: 'Tens of thousands of seeds per acre'
		}
		, to_anchor: 10000
	},
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'seeds/ha'
    , ratio: 0.404686
    }
  , imperial: {
      unit: 'seeds/ac'
    , ratio: 1/0.404686
    }
  }
};