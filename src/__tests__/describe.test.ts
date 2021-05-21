import convert from '..';

test('get kg', () => {
  const actual = convert().describe('kg'),
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
  const actual = convert().describe('ac'),
    expected = {
      abbr: 'ac',
      measure: 'area',
      system: 'imperial',
      singular: 'Acre',
      plural: 'Acres',
    };
  expect(actual).toEqual(expected);
});
