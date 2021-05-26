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

test('get PS', () => {
  const actual = convert().describe('PS'),
    expected = {
      abbr: 'PS',
      measure: 'power',
      system: 'metric',
      singular: 'Horsepower (metric)',
      plural: 'Horsepower (metric)',
    };
  expect(actual).toEqual(expected);
});

test('get hp', () => {
  const actual = convert().describe('hp'),
    expected = {
      abbr: 'hp',
      measure: 'power',
      system: 'imperial',
      singular: 'Horsepower (British)',
      plural: 'Horsepower (British)',
    };
  expect(actual).toEqual(expected);
});
