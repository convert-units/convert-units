var energy;

energy = {
  Wh: {
    name: {
      singular: 'Watt-hour'
    , plural: 'Watt-hours'
    }
  , to_anchor: 3600
  }
, mWh: {
    name: {
      singular: 'Milliwatt-hour'
      , plural: 'Milliwatt-hours'
    }
    , to_anchor: 3.6
  }
, kWh: {
    name: {
      singular: 'Kilowatt-hour'
    , plural: 'Kilowatt-hours'
    }
  , to_anchor: 3600000
  }
, MWh: {
    name: {
      singular: 'Megawatt-hour'
    , plural: 'Megawatt-hours'
    }
  , to_anchor: 3600000000
  }
, GWh: {
    name: {
      singular: 'Gigawatt-hour'
    , plural: 'Gigawatt-hours'
    }
  , to_anchor: 3600000000000
  }
, J: {
    name: {
      singular: 'Joule'
    , plural: 'Joules'
    }
  , to_anchor: 1
  }
, kJ: {
    name: {
      singular: 'Kilojoule'
    , plural: 'Kilojoules'
    }
  , to_anchor: 1000
  }
, cal: {
  name: {
    singular: 'Calorie'
  , plural: 'Calories'
  }
  , to_anchor: 4.184
}
, btu: {
  name: {
    singular: 'Calorie'
  , plural: 'Calories'
  }
  , to_anchor: 1055.06
}
, kcal: {
  name: {
    singular: 'Kilocalorie'
  , plural: 'Kilocalories'
  }
  , to_anchor: 4184
}
, 'lb-ft': {
  name: {
    singular: 'foot-pound',
    plural: 'foot-pounds'
  }
  , to_anchor: 0.737562
}

};

module.exports = {
  metric: energy
, _anchors: {
    metric: {
      unit: 'J'
    , ratio: 1
    }
  }
};
