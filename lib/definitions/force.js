var metric
    , imperial;

metric = {
    N: {
        name: {
            singular: 'Newton'
            , plural: 'Newtons'
        }
        , to_anchor: 1
    }
    , kN: {
        name: {
            singular: 'Kilonewton'
            , plural: 'Kilonewtons'
        }
        , to_anchor: 1000
    }
};

imperial = {
    lbf: {
        name: {
            singular: 'Pound-force'
            , plural: 'Pound-forces'
        }
        , to_anchor: 1
    },
    klbf: {
        name: {
            singular: 'Kilopound-force'
            , plural: 'Kilopound-forces'
        }
        , to_anchor: 1000
    }
};

module.exports = {
    metric: metric
    , imperial: imperial
    , _anchors: {
        metric: {
            unit: 'N'
            , ratio: 1/4.44822
        },
        imperial: {
            unit: 'lbf'
            , ratio: 4.44822
        }
    }
};

