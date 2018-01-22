var massFlowRate;

massFlowRate = {
    'g/yr': {
        name: {
            singular: 'Gram per year'
            , plural: 'Grams per year '
        }
        , to_anchor: 1
    }
    , 'kg/yr': {
        name: {
            singular: 'Kilogram per year'
            , plural: 'Kilograms per year '
        }
        , to_anchor: 1000
    }
    , 't/yr': {
        name: {
            singular: 'Tonne per year'
            , plural: 'Tonnes per year'
        }
        , to_anchor: 1000000
    }
};

module.exports = {
    metric: massFlowRate
    , _anchors: {
        metric: {
            unit: 'g/yr'
            , ratio: 1
        }
    }
};