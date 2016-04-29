var metric, imperial;

metric = {
    mcg: {
        name: {
            singular: 'Microgram',
            plural: 'Micrograms'
        },
        to_anchor: 1 / 1000000
    },
    mg: {
        name: {
            singular: 'Milligram',
            plural: 'Milligrams'
        },
        to_anchor: 1 / 1000
    },
    g: {
        name: {
            singular: 'Gram',
            plural: 'Grams'
        },
        to_anchor: 1
    },
    kg: {
        name: {
            singular: 'Kilogram',
            plural: 'Kilograms'
        },
        to_anchor: 1000
    },
    
    ywaylay: {
        name: {
            singular: 'Ywaylay',
            plural: 'Ywaylay'
        },
        to_anchor: 136.078 / 1000
    },
    ywaygyi: {
        name: {
            singular: 'Ywaygyi',
            plural: 'Ywaygyi'
        },
        to_anchor: 272.155 / 1000
    },
	petha: {
        name: {
            singular: 'Petha',
            plural: 'Petha'
        },
        to_anchor: 1.02058
    },
    mutha: {
        name: {
            singular: 'Mutha',
            plural: 'Mutha'
        },
        to_anchor: 2.04117
    },
	mattha: {
        name: {
            singular: 'Mattha',
            plural: 'Mattha'
        },
        to_anchor: 4.08233
    },
	kyattha: {
        name: {
            singular: 'Kyattha',
            plural: 'Kyattha'
        },
        to_anchor: 16.3293
    },
	peittha: {
        name: {
            singular: 'Peittha',
            plural: 'Peittha'
        },
        to_anchor: 1.63293 * 1000
    }
};

imperial = {
    oz: {
        name: {
            singular: 'Ounce',
            plural: 'Ounces'
        },
        to_anchor: 1 / 16
    },
    lb: {
        name: {
            singular: 'Pound',
            plural: 'Pounds'
        },
        to_anchor: 1
    }
};

module.exports = {
    metric: metric,
    imperial: imperial,
    _anchors: {
        metric: {
            unit: 'g',
            ratio: 1 / 453.592
        },
        imperial: {
            unit: 'lb',
            ratio: 453.592
        }
    }
};
