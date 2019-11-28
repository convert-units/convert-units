var metric
  , imperial;

metric = {
  kg/m3: {
    name: {
      singular: 'Kilogram Per Cubic Meters'
    , plural: 'Kilograms Per Cubic Meter'
    }
  , to_anchor: 1
  }
, kg/l: {
    name: {
      singular: 'Kilogram Per Litre'
    , plural: 'Kilograms Per Litre'
    }
  , to_anchor: 1/1000
  }
, t/m3: {
    name: {
      singular: 'Ton Per Cubic Meter'
    , plural: 'Tons Per Cubic Meter'
    }
  , to_anchor: 1/1000
  }
};

imperial = {
 lb/cuft: {
    name: {
      singular: 'Pound Per cubic Feet'
    , plural: 'Pounds Per cubic Feet'
    }
  , to_anchor: 1
  }
, lb/gal: {
    name: {
      singular: 'Pound Per Gallon'
    , plural: 'Pounds Per Gallon'
    }
  , to_anchor: 1/0.133680556
  }
, oz/cuin: {
    name: {
      singular: 'Ounce Per Cubic Inch'
    , plural: 'Ounces Per Cubic Inch'
    }
  , to_anchor: 1/0.00925925926
  }
, lb/cuyd: {
    name: {
      singular: 'Pound Per Cubic Yard'
    , plural: 'Pounds Per Cubic Yard'
    }
  , to_anchor: 1/27
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'kg/m3'
    , ratio: 0.0624279606,
    }
  , imperial: {
      unit: 'lb/cuft'
    , ratio: 1/0.0624279606,
    }
  }
};
