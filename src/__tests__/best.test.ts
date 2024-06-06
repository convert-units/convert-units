import { expectTypeOf } from 'expect-type';
import configureMeasurements, { type Converter } from '..';
import length, { LengthSystems, LengthUnits } from '../definitions/length';
import power, { PowerSystems, PowerUnits } from '../definitions/power';

test('best mm', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(1200).from('mm').toBest(),
    expected = {
      val: 1.2,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});

test('best mm even if an empty object is given', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(1200).from('mm').toBest({}),
    expected = {
      val: 1.2,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});

test('Should ignore exclude values that are not in the list of possibilities', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(1200)
      .from('mm')
      // Have to ignore TS errors since providing an invalid string to exclude
      // will cause the compiler to fail
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      .toBest({ exclude: ['not_possible'] }),
    expected = {
      val: 1.2,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});

test('Should ignore exclude if it is null or undefined', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(1200).from('mm').toBest({ exclude: undefined }),
    expected = {
      val: 1.2,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});

test('excludes measurements', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(1200000)
      .from('mm')
      .toBest({ exclude: ['km', 'm', 'dm'] }),
    expected = {
      val: 120000,
      unit: 'cm',
      singular: 'Centimeter',
      plural: 'Centimeters',
    };
  expect(actual).toEqual(expected);
});

test('should convert to the chosen system', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(1200000).from('mm').toBest({ system: 'imperial' }),
    expected = {
      val: 656.168,
      unit: 'fathom',
      singular: 'Fathom',
      plural: 'Fathoms',
    };
  expect(actual).toEqual(expected);
});

test('should exlude values and convert to the chosen system', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(1200000)
      .from('mm')
      .toBest({ exclude: ['fathom'], system: 'imperial' }),
    expected = {
      val: 1312.336,
      unit: 'yd',
      singular: 'Yard',
      plural: 'Yards',
    };
  expect(actual).toEqual(expected);
});

test('does not break when excluding from measurement', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(10)
      .from('km')
      .toBest({ exclude: ['km'] }),
    expected = {
      val: 10000,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});

test('pre-cut off number', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(9000).from('mm').toBest({ cutOffNumber: 100 }),
    expected = {
      val: 900,
      unit: 'cm',
      singular: 'Centimeter',
      plural: 'Centimeters',
    };
  expect(actual).toEqual(expected);
});

test('Should ignore the cut off number if it is undefined (use default)', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(9000).from('mm').toBest({ cutOffNumber: undefined }),
    expected = {
      val: 9,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});

test('post-cut off number', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(10000).from('mm').toBest({ cutOffNumber: 10 }),
    expected = {
      val: 10,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});

test('return the original value/unit if all possible units are excluded', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const convertLenght = convert(10);
  const actual = convertLenght
      .from('km')
      .toBest({ exclude: convertLenght.possibilities() }),
    expected = {
      val: 10,
      unit: 'km',
      singular: 'Kilometer',
      plural: 'Kilometers',
    };
  expect(actual).toEqual(expected);
});

test('return the original value/unit the convert value is zero', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const convertLenght = convert(0);
  const actual = convertLenght
      .from('km')
      .toBest({ exclude: convertLenght.possibilities() }),
    expected = {
      val: 0,
      unit: 'km',
      singular: 'Kilometer',
      plural: 'Kilometers',
    };
  expect(actual).toEqual(expected);
});

test('Make sure that the first unit tested cannot become the best value if it is less than the cutOffNumber', () => {
  type TestMeasureSystems = 'test';
  type TestMeasureUnits = 'a' | 'al' | 'axl';
  const convert = configureMeasurements<
    'testmeasure',
    TestMeasureSystems,
    TestMeasureUnits
  >({
    testmeasure: {
      systems: {
        test: {
          a: {
            name: {
              singular: 'a',
              plural: 'as',
            },
            to_anchor: 1,
          },
          al: {
            name: {
              singular: 'al',
              plural: 'als',
            },
            to_anchor: 1 / 1000,
          },
          axl: {
            name: {
              singular: 'axl',
              plural: 'axls',
            },
            to_anchor: 1 / 1000000,
          },
        },
      },
    },
  });
  const actual = convert(10).from('al').toBest(),
    expected = {
      val: 10,
      unit: 'al',
      singular: 'al',
      plural: 'als',
    };
  expect(actual).toEqual(expected);
});

test('Negative numbers should work exactly the same way as positive numbers', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  const convertPower = convert(-6596848);
  const actual = convertPower.from('W').toBest(),
    expected = {
      val: -6.596848,
      unit: 'MW',
      singular: 'Megawatt',
      plural: 'Megawatts',
    };
  expect(actual).toEqual(expected);
});

test('best mm with negative numbers', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert(-1200).from('mm').toBest(),
    expected = {
      val: -1.2,
      unit: 'm',
      singular: 'Meter',
      plural: 'Meters',
    };
  expect(actual).toEqual(expected);
});

test("toBest method's return type should equal the desired return type", () => {
  type toBestMethod = Converter<'length', LengthSystems, LengthUnits>['toBest'];
  expectTypeOf<toBestMethod>().returns.toEqualTypeOf<{
    val: number;
    unit: LengthUnits;
    singular: string;
    plural: string;
  } | null>();
});
