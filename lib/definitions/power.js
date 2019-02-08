var power;

power = {
  W: {
    name: {
      singular: 'Watt'
    , plural: 'Watts'
    }
  , to_anchor: 1
  }
, mW: {
    name: {
      singular: 'Milliwatt'
      , plural: 'Milliwatts'
    }
    , to_anchor: .001
  }
, kW: {
    name: {
      singular: 'Kilowatt'
    , plural: 'Kilowatts'
    }
  , to_anchor: 1000
  }
, MW: {
    name: {
      singular: 'Megawatt'
    , plural: 'Megawatts'
    }
  , to_anchor: 1000000
  }
, GW: {
    name: {
      singular: 'Gigawatt'
    , plural: 'Gigawatts'
    }
  , to_anchor: 1000000000
  }
, μW: {
    name: {
      singular: 'Microwatt'
      , plural: 'Microwatt'
    }
    , to_anchor: 1E-6
  }
, kva: {
    name: {
      singular: 'Kilovoltamp'
      , plural: 'kilovoltamps'
    }
    , to_anchor: 1000
  }
, kvar: {
  name: {
    singular: 'Kilovoltamp reactive'
    , plural: 'Kilovoltamps reactive'
  }
  , to_anchor: 1000
}
, var: {
  name: {
    singular: 'Voltamp reactive'
    , plural: 'Voltamps reactive'
  }
  , to_anchor: 1
}
, hp: {
  name: {
    singular: 'Horsepower'
    , plural: 'Horsepower'
  }
  , to_anchor: 745.7
}


};

module.exports = {
  metric: power
, _anchors: {
    metric: {
      unit: 'W'
    , ratio: 1
    }
  }
};
