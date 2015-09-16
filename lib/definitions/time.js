var sexagesimal;

sexagesimal = {
  ms: {
    name: {
      singular: 'Millisecond'
    , plural: 'Milliseconds'
    }
  , to_anchor: 1/1000
  }
, sec: {
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
, hour: {
    name: {
      singular: 'Hour'
    , plural: 'Hours'
    }
  , to_anchor: 3600
  }
, day: {
    name: {
      singular: 'Day'
    , plural: 'Days'
    }
  , to_anchor: 86400
  }
};

module.exports = {
  sexagesimal: sexagesimal
, _anchors: {
    sexagesimal: {
      unit: 'sec'
    , ratio: 1
    }
  }
};
