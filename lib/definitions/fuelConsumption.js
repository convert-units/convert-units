var metric
  , imperial;

metric = {
  'l/100km': {
    name: {
      singular: 'Litre per 100km',
      plural: 'Litres per 100km'
    }
  , to_anchor: 1
  }
};

imperial = {
  mpg: {
    name: {
      singular: 'Mile per gallon',
      plural: 'Miles per gallon'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'l/100km'
    , transform: function (mpg) { return (235.215/mpg) }
    }
  , imperial: {
      unit: 'mpg'
    , transform: function (lp100) { return (235.215/lp100) }
    }
  }
};
