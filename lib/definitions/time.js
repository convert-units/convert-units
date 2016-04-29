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
  , to_anchor: 60 * 60 
  }
, d: {
    name: {
      singular: 'Day'
    , plural: 'Days'
    }
  , to_anchor: 60 * 60 * 24
  }
, week: {
    name: {
      singular: 'Week'
    , plural: 'Weeks'
    }
  , to_anchor: 60 * 60 * 24 * 7
  }
, month: {
    name: {
      singular: 'Month'
    , plural: 'Months'
    }
  , to_anchor: 60 * 60 * 24 * 7 * 4 
  }
, year: {
    name: {
      singular: 'Year'
    , plural: 'Years'
    }
  , to_anchor: 60 * 60 * 24 * 7 * 52 
  }
  
/* Burmese units */
, anukhaya: {
    name: {
      singular: 'anukhaya'  
    , plural: 'anukhaya'
    }
  , to_anchor: 0.00667
  }
, laya: {
    name: {
      singular: 'laya'  
    , plural: 'laya'
    }
  , to_anchor: 0.00833
  }
, khana: {
    name: {
      singular: 'khana'  
    , plural: 'khana'
    }
  , to_anchor: 0.03333
  }
, khaya: {
    name: {
      singular: 'khaya'  
    , plural: 'khaya'
    }
  , to_anchor: 0.4
  }
, pyan: {
    name: {
      singular: 'pyan'  
    , plural: 'pyan'
    }
  , to_anchor: 4
  }
, bizana: {
    name: {
      singular: 'bizana'  
    , plural: 'bizana'
    }
  , to_anchor: 24
  }
, pat: {
    name: {
      singular: 'pat'  
    , plural: 'pat'
    }
  , to_anchor: 6 * 60
  }
, nayi: {
    name: {
      singular: 'nayi'  
    , plural: 'nayi'
    }
  , to_anchor: 24 * 60
  }
, baho: {
    name: {
      singular: 'baho'  
    , plural: 'baho'
    }
  , to_anchor: 3 * 60 * 60
  }
, yet: {
    name: {
      singular: 'yet'  
    , plural: 'yet'
    }
  , to_anchor: 60 * 60 * 24
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
