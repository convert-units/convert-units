var metric, imperial;

metric = {
    mm3: {
        name: {
            singular: 'Cubic Millimeter',
            plural: 'Cubic Millimeters'
        },
        to_anchor: 1 / 1000000
    },
    cm3: {
        name: {
            singular: 'Cubic Centimeter',
            plural: 'Cubic Centimeters'
        },
        to_anchor: 1 / 1000
    },
    ml: {
        name: {
            singular: 'Millilitre',
            plural: 'Millilitres'
        },
        to_anchor: 1 / 1000
    },
    ltr: {
        name: {
            singular: 'Litre',
            plural: 'Litres'
        },
        to_anchor: 1
    },
    m3: {
        name: {
            singular: 'Cubic meter',
            plural: 'Cubic meters'
        },
        to_anchor: 1000
    },
    km3: {
        name: {
            singular: 'Cubic kilometer',
            plural: 'Cubic kilometers'
        },
        to_anchor: 1000000000000
    },
    
    lamyu: {
        name: {
            singular: 'Lamyu',
            plural: 'Lamyu'
        },
        to_anchor: 79.9118 / 1000
    },
    lamyet: {
        name: {
            singular: 'Lamyet',
            plural: 'Lamyet'
        },
        to_anchor: 159.824 / 1000
    },
    lame: {
        name: {
            singular: 'Lame',
            plural: 'Lame'
        },
        to_anchor: 319.647 / 1000
    },
    sale: {
        name: {
            singular: 'Sale',
            plural: 'Sale'
        },
        to_anchor: 639.294 / 1000
    },
    hkwet: {
        name: {
            singular: 'Hkwet',
            plural: 'Hkwet'
        },
        to_anchor: 1.27859
    },
    pyi: {
        name: {
            singular: 'Pyi',
            plural: 'Pyi'
        },
        to_anchor: 2.55718
    },
    seit: {
        name: {
            singular: 'Seit',
            plural: 'Seit'
        },
        to_anchor: 10.2287
    },
    hkwe: {
        name: {
            singular: 'Hkwe',
            plural: 'Hkwe'
        },
        to_anchor: 20.4574
    },
    tin: {
        name: {
            singular: 'Tin',
            plural: 'Tin'
        },
        to_anchor: 40.9148
    }
};

imperial = {
    tsp: {
        name: {
            singular: 'Teaspoon',
            plural: 'Teaspoons'
        },
        to_anchor: 1 / 6
    },
    Tbs: {
        name: {
            singular: 'Tablespoon',
            plural: 'Tablespoons'
        },
        to_anchor: 1 / 2
    },
    in3: {
        name: {
            singular: 'Cubic inch',
            plural: 'Cubic inches'
        },
        to_anchor: 0.55411
    },
    'fl-oz': {
        name: {
            singular: 'Fluid Ounce',
            plural: 'Fluid Ounces'
        },
        to_anchor: 1
    },
    cup: {
        name: {
            singular: 'Cup',
            plural: 'Cups'
        },
        to_anchor: 8
    },
    pnt: {
        name: {
            singular: 'Pint',
            plural: 'Pints'
        },
        to_anchor: 16
    },
    qt: {
        name: {
            singular: 'Quart',
            plural: 'Quarts'
        },
        to_anchor: 32
    },
    gal: {
        name: {
            singular: 'Gallon',
            plural: 'Gallons'
        },
        to_anchor: 128
    },
    ft3: {
        name: {
            singular: 'Cubic foot',
            plural: 'Cubic feet'
        },
        to_anchor: 957.506
    },
    yd3: {
        name: {
            singular: 'Cubic yard',
            plural: 'Cubic yards'
        },
        to_anchor: 25852.7
    }
};

module.exports = {
    metric: metric,
    imperial: imperial,
    _anchors: {
        metric: {
            unit: 'l',
            ratio: 33.8140226
        },
        imperial: {
            unit: 'fl-oz',
            ratio: 1 / 33.8140226
        }
    }
};
