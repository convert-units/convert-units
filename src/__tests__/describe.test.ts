import configureMeasurements from '..';
import area from '../definitions/area';
import mass from '../definitions/mass';

test('get kg', () => {
  const convert = configureMeasurements({
    mass,
  });
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
  const convert = configureMeasurements({
    area,
  });
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
