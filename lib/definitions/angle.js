var angle;

fillFormat = function(value) {
    if (value.toString().length < 2) {
        return '0' + value;
    } else {
        return value;
    }
};

format = function (value, divisor) {
    let base = Math.floor(value / divisor);
    let dRemainder = (value / divisor) - base;
    let m = Math.floor(dRemainder * 60);
    let mRemainder = (dRemainder * 60) - m;
    let s = (mRemainder * 60);
    return fillFormat(base) + ':' + fillFormat(m) + ':' + fillFormat(s);
};

convertString = function(value, divisor) {
    let segments = value.split(':');
    let base = Number(segments[0]);
    let m = Number(segments[1]);
    let s = Number(segments[2]);

    let degrees = (s / 60) + (m / 60) + (base * divisor);
    return degrees;
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
