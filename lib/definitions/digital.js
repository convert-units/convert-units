var bits
  , bytes;

bits = {
  b: {
    name: {
      singular: 'Bit'
    , plural: 'Bits'
    }
  , to_anchor: 1
  }
, Kb: {
    name: {
      singular: 'Kilobit'
    , plural: 'Kilobits'
    }
  , to_anchor: 1000
  }
, Mb: {
    name: {
      singular: 'Megabit'
    , plural: 'Megabits'
    }
  , to_anchor: 1000000
  }
, Gb: {
    name: {
      singular: 'Gigabit'
    , plural: 'Gigabits'
    }
  , to_anchor: 1000000000
  }
, Tb: {
    name: {
      singular: 'Terabit'
    , plural: 'Terabits'
    }
  , to_anchor: 1000000000000
  }
};

bytes = {
  B: {
    name: {
      singular: 'Byte'
    , plural: 'Bytes'
    }
  , to_anchor: 1
  }
, KB: {
    name: {
      singular: 'Kilobyte'
    , plural: 'Kilobytes'
    }
  , to_anchor: 1000
  }
, MB: {
    name: {
      singular: 'Megabyte'
    , plural: 'Megabytes'
    }
  , to_anchor: 1000000
  }
, GB: {
    name: {
      singular: 'Gigabyte'
    , plural: 'Gigabytes'
    }
  , to_anchor: 1000000000
  }
, TB: {
    name: {
      singular: 'Terabyte'
    , plural: 'Terabytes'
    }
  , to_anchor: 1000000000000
  }
};

module.exports = {
  bits: bits
, bytes: bytes
, _anchors: {
    bits: {
      unit: 'b'
    , ratio: 1/8
    }
  , bytes: {
      unit: 'B'
    , ratio: 8
    }
  }
};
