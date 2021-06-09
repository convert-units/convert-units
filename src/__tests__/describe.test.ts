import configureMeasurements from '..';
import area, { AreaSystems, AreaUnits } from '../definitions/area';
import mass, { MassSystems, MassUnits } from '../definitions/mass';
import power, { PowerSystems, PowerUnits } from '../definitions/power';

test('get kg', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
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
  const convert = configureMeasurements<'area', AreaSystems, AreaUnits>({
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

test('get PS', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
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
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
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
