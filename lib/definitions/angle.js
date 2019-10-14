var angle;

fillFormat = function(value) {
    if (value.toString().length < 2) {
        return '0' + value;
    } else {
        return value;
    }
};

format = function (value, divisor) {
    let d = Math.floor(value / divisor);
    let dRemainder = (value / divisor) - d;
    let m = Math.floor(dRemainder * 60);
    let mRemainder = (dRemainder * 60) - m;
    let s = (mRemainder * 60);
    return fillFormat(d) + ':' + fillFormat(m) + ':' + fillFormat(s);
};

angle = {
  rad: {
    name: {
      singular: 'radian'
    , plural: 'radians'
    }
  , to_anchor: 180/Math.PI
  }
, deg: {
    name: {
      singular: 'degree'
    , plural: 'degrees'
    }
  , to_anchor: 1
  }
, grad: {
    name: {
      singular: 'gradian'
    , plural: 'gradians'
    }
  , to_anchor: 9/10
  }
, arcmin: {
    name: {
      singular: 'arcminute'
    , plural: 'arcminutes'
    }
  , to_anchor: 1/60
  }
, arcsec: {
    name: {
      singular: 'arcsecond'
    , plural: 'arcseconds'
    }
  , to_anchor: 1/3600
  }
, mas: {
    name: {
        singular: 'milliarcsecond'
        , plural: 'milliarcseconds'
    }
    , to_anchor: 1/3600000
  }
, hms: {
    name: {
        singular: '',
        plural: 'hours-minutes-seconds'
    }
    , format_divisor: 15
    , to_anchor: 1
  }
, dms: {
    name: {
        singular: '',
        plural: 'degrees-minutes-seconds'
    }
    , format_divisor: 1
    , to_anchor: 1
  }
};

module.exports = {
  metric: angle
, _anchors: {
    metric: {
      unit: 'deg'
    , ratio: 1
    }
  }
};
