var time;

time = {
    ms: {
        name: {
            singular: 'Millisecond',
            plural: 'Milliseconds'
        },
        to_anchor: 1 / 1000
    },
    s: {
        name: {
            singular: 'Second',
            plural: 'Seconds'
        },
        to_anchor: 1
    },
    min: {
        name: {
            singular: 'Minute',
            plural: 'Minutes'
        },
        to_anchor: 60
    },
    h: {
        name: {
            singular: 'Hour',
            plural: 'Hours'
        },
        to_anchor: 60 * 60
    },
    d: {
        name: {
            singular: 'Day',
            plural: 'Days'
        },
        to_anchor: 60 * 60 * 24
    },
    week: {
        name: {
            singular: 'Week',
            plural: 'Weeks'
        },
        to_anchor: 60 * 60 * 24 * 7
    },
    month: {
        name: {
            singular: 'Month',
            plural: 'Months'
        },
        to_anchor: 60 * 60 * 24 * 7 * 4
    },
    year: {
        name: {
            singular: 'Year',
            plural: 'Years'
        },
        to_anchor: 60 * 60 * 24 * 7 * 52
    },
    
    anukhaya: {
        name: {
            singular: 'Anukhaya',
            plural: 'Anukhaya'
        },
        to_anchor: 0.00667
    },
    laya: {
        name: {
            singular: 'Laya',
            plural: 'Laya'
        },
        to_anchor: 0.00833
    },
    khana: {
        name: {
            singular: 'Khana',
            plural: 'Khana'
        },
        to_anchor: 0.03333
    },
    khaya: {
        name: {
            singular: 'Khaya',
            plural: 'Khaya'
        },
        to_anchor: 0.4
    },
    pyan: {
        name: {
            singular: 'Pyan',
            plural: 'Pyan'
        },
        to_anchor: 4
    },
    bizana: {
        name: {
            singular: 'Bizana',
            plural: 'Bizana'
        },
        to_anchor: 24
    },
    pat: {
        name: {
            singular: 'Pat',
            plural: 'Pat'
        },
        to_anchor: 6 * 60
    },
    nayi: {
        name: {
            singular: 'Nayi',
            plural: 'Nayi'
        },
        to_anchor: 24 * 60
    },
    baho: {
        name: {
            singular: 'Baho',
            plural: 'Baho'
        },
        to_anchor: 3 * 60 * 60
    },
    yet: {
        name: {
            singular: 'Yet',
            plural: 'Yet'
        },
        to_anchor: 60 * 60 * 24
    }
};

module.exports = {
    metric: time,
    _anchors: {
        metric: {
            unit: 's',
            ratio: 1
        }
    }
};
