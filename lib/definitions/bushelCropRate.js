var metric
  , imperial;

  // TODO: bu how to do bushels?  (need to pass in the per-crop BU to MT conversion rate)
metric = {
  'bu/ha': {
    name: {
      singular: 'Metric tonne per hectare'
    , plural: 'Metric tonnes per hectare'
    }
  , to_anchor: 1
	}, 
};

imperial = {
	'bu/ac': {
    name: {
      singular: 'bushels tonne per acre'
    , plural: 'bushels tonne per acre'
    }
  , to_anchor: 1
	},
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'bu/ha'
    , ratio: 1/1.121
    }
  , imperial: {
      unit: 'bu/ac'
    , ratio: 1.121
    }
  }
};