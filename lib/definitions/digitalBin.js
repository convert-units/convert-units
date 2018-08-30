var bitsBin
  , bytesBin;

bitsBin = {
  // ib is not an actual unit.  We use this nomenclature to differentiate
  // between binary bits and decimal bits.
  ib: {
    name: {
      singular: 'Bit'
    , plural: 'Bits'
    }
  , to_anchor: 1
  }
, Kib: {
    name: {
      singular: 'Kibibit'
    , plural: 'Kibibits'
    }
  , to_anchor: 1024
  }
, Mib: {
    name: {
      singular: 'Mebibit'
    , plural: 'Mebibits'
    }
  , to_anchor: 1048576
  }
, Gib: {
    name: {
      singular: 'Gibibit'
    , plural: 'Gibibits'
    }
  , to_anchor: 1073741824
  }
, Tib: {
    name: {
      singular: 'Tebibit'
    , plural: 'Tebibits'
    }
  , to_anchor: 1099511627776
  }
};

bytesBin = {
  // iB is not an actual unit.  We use this nomenclature to differentiate
  // between binary bytes and decimal bytes.
  iB: {
    name: {
      singular: 'Byte'
    , plural: 'Bytes'
    }
  , to_anchor: 1
  }
, KiB: {
    name: {
      singular: 'Kibibyte'
    , plural: 'Kibibytes'
    }
  , to_anchor: 1024
  }
, MiB: {
    name: {
      singular: 'Mebibyte'
    , plural: 'Mebibytes'
    }
  , to_anchor: 1048576
  }
, GiB: {
    name: {
      singular: 'Gibibyte'
    , plural: 'Gibibytes'
    }
  , to_anchor: 1073741824
  }
, TiB: {
    name: {
      singular: 'Tebibyte'
    , plural: 'Tebibytes'
    }
  , to_anchor: 1099511627776
  }
};

module.exports = {
  bitsBin: bitsBin
, bytesBin: bytesBin
, _anchors: {
    bitsBin: {
      unit: 'ib'
    , ratio: 1/8
    }
  , bytesBin: {
      unit: 'iB'
    , ratio: 8
    }
  }
};
