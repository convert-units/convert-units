var hashSeconds;

hashSeconds = {
  Hs: {
    name: {
      singular: 'Hash per second'
    , plural: 'Hashes per second'
    }
  , to_anchor: 1
  }
, kHs: {
    name: {
      singular: 'Kilo-hash per second'
      , plural: 'Kilo-hashes per second'
    }
    , to_anchor: 1000
  }
, MHs: {
    name: {
      singular: 'Mega-hash per second'
    , plural: 'Mega-hashes per second'
    }
  , to_anchor: 1000000
  }
, GHs: {
    name: {
      singular: 'Giga-hash per second'
    , plural: 'Giga-hashes per second'
    }
  , to_anchor: 1000000000
  }
, THs: {
    name: {
      singular: 'Tera-hash per second'
    , plural: 'Tera-hashes per second'
    }
  , to_anchor: 1000000000000
  }
, PHs: {
    name: {
      singular: 'Penta-hash per second'
    , plural: 'Penta-hashes per second'
    }
  , to_anchor: 1000000000000000
  }

, EHs: {
    name: {
      singular: 'Exa-hash per second'
    , plural: 'Exa-hashes per second'
    }
  , to_anchor: 1000000000000000000
  }

, ZHs: {
    name: {
      singular: 'Zetta-hash per second'
    , plural: 'Zetta-hashes per second'
    }
  , to_anchor: 1000000000000000000000
  }
  
, YHs: {
    name: {
      singular: 'Yotta-hash per second'
    , plural: 'Yotta-hashes per second'
    }
  , to_anchor: 1000000000000000000000000
  }
};

module.exports = {
  hashSeconds: hashSeconds
, _anchors: {
    metric: {
      unit: 'Hs'
    , ratio: 1
    }
  }
};
