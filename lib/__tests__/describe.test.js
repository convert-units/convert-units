const convert = require('..');

test('get kg', () => {
  var actual = convert().describe('kg'),
    expected = {
      abbr: 'kg',
      measure: 'mass',
      system: 'metric',
      singular: 'Kilogram',
      plural: 'Kilograms',
    };
  expect(actual).toEqual(expected);
});

test('get ac', () => {
  var actual = convert().describe('ac'),
    expected = {
      abbr: 'ac',
      measure: 'area',
      system: 'imperial',
      singular: 'Acre',
      plural: 'Acres',
    };
  expect(actual).toEqual(expected);
});
