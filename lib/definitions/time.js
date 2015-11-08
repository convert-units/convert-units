var time

time = {
  ms: {
    name: {
      singular: 'Millisecond'
    , plural: 'Milliseconds'
    }
  , to_anchor: 1/1000
  }
, s: {
    name: {
      singular: 'Second'
    , plural: 'Seconds'
    }
  , to_anchor: 1
  }
, min: {
    name: {
      singular: 'Minute'
    , plural: 'Minutes'
    }
  , to_anchor: 60
  }
, h: {
    name: {
      singular: 'Hour'
    , plural: 'Hours'
    }
  , to_anchor: 3600
  }
, d: {
    name: {
      singular: 'Day'
    , plural: 'Days'
    }
  , to_anchor: 86400
  }
, week: {
    name: {
      singular: 'Week'
    , plural: 'Weeks'
    }
  , to_anchor: 604800
  }
, month: {
    name: {
      singular: 'Month'
    , plural: 'Months'
    }
  , to_anchor: 2419200
  }
, year: {
    name: {
      singular: 'Year'
    , plural: 'Years'
    }
  , to_anchor: 31449600
  }
};


module.exports = {
  metric: time 
, _anchors: {
    metric: {
      unit: 's'
    , ratio: 1
    }
  }
};
