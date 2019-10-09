var fluxDensity;

fluxDensity = {
    nJy: {
        name: {
            singular: 'nanojansky',
            plural: 'nanojanskys'
        },
        to_anchor: 1/1000000000
    },
    μJy: {
        name: {
            singular: 'microjansky',
            plural: 'microjanskys'
        },
        to_anchor: 1/1000000
    },
    mJy: {
        name: {
            singular: 'millijansky',
            plural: 'millijanskys'
        },
        to_anchor: 1/1000
    },
    Jy: {
        name: {
            singular: 'jansky',
            plural: 'janskys'
        },
        to_anchor: 1
    }
};

module.exports = {
    metric: fluxDensity,
    _anchors: {
        fluxDensity: {
            unit: 'jy',
            ratio: 1
        }
    }
};
