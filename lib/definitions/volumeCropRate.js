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
	'oz/ha': {
		name: {
			singular: 'Ounce per hectare'
			, plural: 'Ounces per hectare'
		}
		, to_anchor: 1
	},
	'floz/ha': {
		name: {
			singular: 'Ounce per hectare'
			, plural: 'Ounces per hectare'
		}
		, to_anchor: 1
	},
	'qt/ha': {
		name: {
			singular: 'Quart per hectare'
			, plural: 'Quart per hectare'
		}
		, to_anchor: 0.946353
	},
	'cases/ha': {
		name: {
			singular: 'Case per hectare'
			, plural: 'Cases per hectare'
		}
		, to_anchor: 1
	},
	'jugs/ha': {
		name: {
			singular: 'Case per hectare'
			, plural: 'Cases per hectare'
		}
		, to_anchor: 1
	},
	'ha/case': {
		name: {
			singular: 'Hectare per case'
			, plural: 'Hectares per case'
		}
		, to_anchor: 1
	},
	'ha/jug': {
		name: {
			singular: 'Hectare per jug'
			, plural: 'Hectares per jug'
		}
		, to_anchor: 1
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
		, to_anchor: 0.264172
	},
	'ml/ac': {
		name: {
			singular: 'Millitre per acre'
			, plural: 'Millitres per acre'
		}
		, to_anchor: .000264172
	},
	'oz/ac': {
		name: {
			singular: 'Ounce per acre'
			, plural: 'Ounces per acre'
		}
		, to_anchor: 1
	},
	'floz/ac': {
		name: {
			singular: 'Ounce per acre'
			, plural: 'Ounces per acre'
		}
		, to_anchor: 1
	},
	'cases/ac': {
		name: {
			singular: 'Case per acre'
			, plural: 'Cases per acre'
		}
		, to_anchor: 1
	},
	'jugs/ac': {
		name: {
			singular: 'Case per acre'
			, plural: 'Cases per acre'
		}
		, to_anchor: 1
	},
	'qt/ac': {
		name: {
			singular: 'Quart per acre'
			, plural: 'Quart per acre'
		}
		, to_anchor: 0.25
	},
	'ac/case': {
		name: {
			singular: 'Acre per case'
			, plural: 'Acres per case'
		}
		, to_anchor: 1
	},
	'ac/jug': {
		name: {
			singular: 'Acre per jug'
			, plural: 'Acres per jug'
		}
		, to_anchor: 1
	},
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'l/ha'
    , ratio: 1/9.35396
    }
  , imperial: {
      unit: 'gal/ac'
    , ratio: 9.35396
    }
  }
};
