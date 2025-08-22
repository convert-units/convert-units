import configureMeasurements from '../..';
import electricalConductivity, {
  ElectricalConductivitySystems,
  ElectricalConductivityUnits,
} from '../electricalConductivity';

describe('electrical conductivity', () => {
  let convert: ReturnType<typeof configureMeasurements>;

  beforeEach(() => {
    convert = configureMeasurements<
      'electricalConductivity',
      ElectricalConductivitySystems,
      ElectricalConductivityUnits
    >({
      electricalConductivity,
    });
  });

  // Base unit conversions (S/m)
  test('S/m to all other units', () => {
    expect(convert(1).from('S/m').to('dS/m')).toBe(10);
    expect(convert(1).from('S/m').to('mS/m')).toBe(1000);
    expect(convert(1).from('S/m').to('μS/m')).toBe(1000000);
    expect(convert(1).from('S/m').to('nS/m')).toBeCloseTo(1000000000, 0);
    expect(convert(1).from('S/m').to('pS/m')).toBeCloseTo(1000000000000, 0);
    expect(convert(1).from('S/m').to('S/cm')).toBe(0.01);
    expect(convert(1).from('S/m').to('dS/cm')).toBe(0.1);
    expect(convert(1).from('S/m').to('mS/cm')).toBe(10);
    expect(convert(1).from('S/m').to('μS/cm')).toBe(10000);
    expect(convert(1).from('S/m').to('nS/cm')).toBeCloseTo(10000000, 0);
    expect(convert(1).from('S/m').to('pS/cm')).toBeCloseTo(10000000000, 0);
  });

  // dS/m conversions
  test('dS/m to all other units', () => {
    expect(convert(1).from('dS/m').to('S/m')).toBe(0.1);
    expect(convert(1).from('dS/m').to('mS/m')).toBe(100);
    expect(convert(1).from('dS/m').to('μS/m')).toBeCloseTo(100000, 0);
    expect(convert(1).from('dS/m').to('nS/m')).toBeCloseTo(100000000, 0);
    expect(convert(1).from('dS/m').to('pS/m')).toBeCloseTo(100000000000, 0);
    expect(convert(1).from('dS/m').to('S/cm')).toBe(0.001);
    expect(convert(1).from('dS/m').to('dS/cm')).toBe(0.01);
    expect(convert(1).from('dS/m').to('mS/cm')).toBe(1);
    expect(convert(1).from('dS/m').to('μS/cm')).toBe(1000);
    expect(convert(1).from('dS/m').to('nS/cm')).toBeCloseTo(1000000, 0);
    expect(convert(1).from('dS/m').to('pS/cm')).toBeCloseTo(1000000000, 0);
  });

  // mS/m conversions
  test('mS/m to all other units', () => {
    expect(convert(1).from('mS/m').to('S/m')).toBe(0.001);
    expect(convert(1).from('mS/m').to('dS/m')).toBe(0.01);
    expect(convert(1).from('mS/m').to('μS/m')).toBeCloseTo(1000, 0);
    expect(convert(1).from('mS/m').to('nS/m')).toBeCloseTo(1000000, 0);
    expect(convert(1).from('mS/m').to('pS/m')).toBeCloseTo(1000000000, 0);
    expect(convert(1).from('mS/m').to('S/cm')).toBe(0.00001);
    expect(convert(1).from('mS/m').to('dS/cm')).toBe(0.0001);
    expect(convert(1).from('mS/m').to('mS/cm')).toBe(0.01);
    expect(convert(1).from('mS/m').to('μS/cm')).toBe(10);
    expect(convert(1).from('mS/m').to('nS/cm')).toBeCloseTo(10000, 0);
    expect(convert(1).from('mS/m').to('pS/cm')).toBeCloseTo(10000000, 0);
  });

  // μS/m conversions
  test('μS/m to all other units', () => {
    expect(convert(1).from('μS/m').to('S/m')).toBeCloseTo(0.000001);
    expect(convert(1).from('μS/m').to('dS/m')).toBeCloseTo(0.00001, 10);
    expect(convert(1).from('μS/m').to('mS/m')).toBeCloseTo(0.001);
    expect(convert(1).from('μS/m').to('nS/m')).toBeCloseTo(1000);
    expect(convert(1).from('μS/m').to('pS/m')).toBeCloseTo(1000000, 0);
    expect(convert(1).from('μS/m').to('S/cm')).toBeCloseTo(0.00000001);
    expect(convert(1).from('μS/m').to('dS/cm')).toBeCloseTo(0.0000001);
    expect(convert(1).from('μS/m').to('mS/cm')).toBeCloseTo(0.0001);
    expect(convert(1).from('μS/m').to('μS/cm')).toBeCloseTo(0.01);
    expect(convert(1).from('μS/m').to('nS/cm')).toBeCloseTo(10);
    expect(convert(1).from('μS/m').to('pS/cm')).toBeCloseTo(10000);
  });

  // nS/m conversions
  test('nS/m to all other units', () => {
    expect(convert(1).from('nS/m').to('S/m')).toBeCloseTo(0.000000001);
    expect(convert(1).from('nS/m').to('dS/m')).toBeCloseTo(0.00000001);
    expect(convert(1).from('nS/m').to('mS/m')).toBeCloseTo(0.000001);
    expect(convert(1).from('nS/m').to('μS/m')).toBeCloseTo(0.001);
    expect(convert(1).from('nS/m').to('pS/m')).toBeCloseTo(1000, 0);
    expect(convert(1).from('nS/m').to('S/cm')).toBeCloseTo(0.00000000001);
    expect(convert(1).from('nS/m').to('dS/cm')).toBeCloseTo(0.0000000001);
    expect(convert(1).from('nS/m').to('mS/cm')).toBeCloseTo(0.0000001);
    expect(convert(1).from('nS/m').to('μS/cm')).toBeCloseTo(0.00001);
    expect(convert(1).from('nS/m').to('nS/cm')).toBe(0.01);
    expect(convert(1).from('nS/m').to('pS/cm')).toBe(10);
  });

  // pS/m conversions
  test('pS/m to all other units', () => {
    expect(convert(1).from('pS/m').to('S/m')).toBeCloseTo(0.000000000001);
    expect(convert(1).from('pS/m').to('dS/m')).toBeCloseTo(0.00000000001);
    expect(convert(1).from('pS/m').to('mS/m')).toBeCloseTo(0.000000001);
    expect(convert(1).from('pS/m').to('μS/m')).toBeCloseTo(0.000001);
    expect(convert(1).from('pS/m').to('nS/m')).toBeCloseTo(0.001);
    expect(convert(1).from('pS/m').to('S/cm')).toBeCloseTo(0.00000000000001);
    expect(convert(1).from('pS/m').to('dS/cm')).toBeCloseTo(0.0000000000001);
    expect(convert(1).from('pS/m').to('mS/cm')).toBeCloseTo(0.0000000001);
    expect(convert(1).from('pS/m').to('μS/cm')).toBeCloseTo(0.00000001);
    expect(convert(1).from('pS/m').to('nS/cm')).toBeCloseTo(0.00001);
    expect(convert(1).from('pS/m').to('pS/cm')).toBeCloseTo(0.01);
  });

  // S/cm conversions
  test('S/cm to all other units', () => {
    expect(convert(1).from('S/cm').to('S/m')).toBe(100);
    expect(convert(1).from('S/cm').to('dS/m')).toBe(1000);
    expect(convert(1).from('S/cm').to('mS/m')).toBe(100000);
    expect(convert(1).from('S/cm').to('μS/m')).toBe(100000000);
    expect(convert(1).from('S/cm').to('nS/m')).toBeCloseTo(100000000000, 0);
    expect(convert(1).from('S/cm').to('pS/m')).toBeCloseTo(100000000000000, 0);
    expect(convert(1).from('S/cm').to('dS/cm')).toBe(10);
    expect(convert(1).from('S/cm').to('mS/cm')).toBe(1000);
    expect(convert(1).from('S/cm').to('μS/cm')).toBe(1000000);
    expect(convert(1).from('S/cm').to('nS/cm')).toBeCloseTo(1000000000, 0);
    expect(convert(1).from('S/cm').to('pS/cm')).toBeCloseTo(1000000000000, 0);
  });

  // dS/cm conversions
  test('dS/cm to all other units', () => {
    expect(convert(1).from('dS/cm').to('S/m')).toBe(10);
    expect(convert(1).from('dS/cm').to('dS/m')).toBe(100);
    expect(convert(1).from('dS/cm').to('mS/m')).toBe(10000);
    expect(convert(1).from('dS/cm').to('μS/m')).toBe(10000000);
    expect(convert(1).from('dS/cm').to('nS/m')).toBeCloseTo(10000000000, 0);
    expect(convert(1).from('dS/cm').to('pS/m')).toBeCloseTo(10000000000000, 0);
    expect(convert(1).from('dS/cm').to('S/cm')).toBe(0.1);
    expect(convert(1).from('dS/cm').to('mS/cm')).toBe(100);
    expect(convert(1).from('dS/cm').to('μS/cm')).toBe(100000);
    expect(convert(1).from('dS/cm').to('nS/cm')).toBeCloseTo(100000000, 0);
    expect(convert(1).from('dS/cm').to('pS/cm')).toBeCloseTo(100000000000, 0);
  });

  // mS/cm conversions
  test('mS/cm to all other units', () => {
    expect(convert(1).from('mS/cm').to('S/m')).toBe(0.1);
    expect(convert(1).from('mS/cm').to('dS/m')).toBe(1);
    expect(convert(1).from('mS/cm').to('mS/m')).toBe(100);
    expect(convert(1).from('mS/cm').to('μS/m')).toBeCloseTo(100000, 0);
    expect(convert(1).from('mS/cm').to('nS/m')).toBeCloseTo(100000000, 0);
    expect(convert(1).from('mS/cm').to('pS/m')).toBeCloseTo(100000000000, 0);
    expect(convert(1).from('mS/cm').to('S/cm')).toBe(0.001);
    expect(convert(1).from('mS/cm').to('dS/cm')).toBe(0.01);
    expect(convert(1).from('mS/cm').to('μS/cm')).toBe(1000);
    expect(convert(1).from('mS/cm').to('nS/cm')).toBeCloseTo(1000000, 0);
    expect(convert(1).from('mS/cm').to('pS/cm')).toBeCloseTo(1000000000, 0);
  });

  // μS/cm conversions
  test('μS/cm to all other units', () => {
    expect(convert(1).from('μS/cm').to('S/m')).toBe(0.0001);
    expect(convert(1).from('μS/cm').to('dS/m')).toBe(0.001);
    expect(convert(1).from('μS/cm').to('mS/m')).toBe(0.1);
    expect(convert(1).from('μS/cm').to('μS/m')).toBeCloseTo(100, 0);
    expect(convert(1).from('μS/cm').to('nS/m')).toBeCloseTo(100000, 0);
    expect(convert(1).from('μS/cm').to('pS/m')).toBeCloseTo(100000000, 0);
    expect(convert(1).from('μS/cm').to('S/cm')).toBeCloseTo(0.000001);
    expect(convert(1).from('μS/cm').to('dS/cm')).toBeCloseTo(0.00001);
    expect(convert(1).from('μS/cm').to('mS/cm')).toBeCloseTo(0.001);
    expect(convert(1).from('μS/cm').to('nS/cm')).toBeCloseTo(1000);
    expect(convert(1).from('μS/cm').to('pS/cm')).toBeCloseTo(1000000);
  });

  // nS/cm conversions
  test('nS/cm to all other units', () => {
    expect(convert(1).from('nS/cm').to('S/m')).toBe(0.0000001);
    expect(convert(1).from('nS/cm').to('dS/m')).toBe(0.000001);
    expect(convert(1).from('nS/cm').to('mS/m')).toBeCloseTo(0.0001, 10);
    expect(convert(1).from('nS/cm').to('μS/m')).toBe(0.1);
    expect(convert(1).from('nS/cm').to('nS/m')).toBeCloseTo(100);
    expect(convert(1).from('nS/cm').to('pS/m')).toBeCloseTo(100000, 0);
    expect(convert(1).from('nS/cm').to('S/cm')).toBeCloseTo(0.000000001);
    expect(convert(1).from('nS/cm').to('dS/cm')).toBeCloseTo(0.00000001);
    expect(convert(1).from('nS/cm').to('mS/cm')).toBeCloseTo(0.000001);
    expect(convert(1).from('nS/cm').to('μS/cm')).toBeCloseTo(0.001);
    expect(convert(1).from('nS/cm').to('pS/cm')).toBeCloseTo(1000);
  });

  // pS/cm conversions
  test('pS/cm to all other units', () => {
    expect(convert(1).from('pS/cm').to('S/m')).toBeCloseTo(0.0000000001);
    expect(convert(1).from('pS/cm').to('dS/m')).toBeCloseTo(0.000000001);
    expect(convert(1).from('pS/cm').to('mS/m')).toBeCloseTo(0.0000001);
    expect(convert(1).from('pS/cm').to('μS/m')).toBeCloseTo(0.0001);
    expect(convert(1).from('pS/cm').to('nS/m')).toBeCloseTo(0.1, 10);
    expect(convert(1).from('pS/cm').to('pS/m')).toBeCloseTo(100);
    expect(convert(1).from('pS/cm').to('S/cm')).toBeCloseTo(0.000000000001);
    expect(convert(1).from('pS/cm').to('dS/cm')).toBeCloseTo(0.00000000001);
    expect(convert(1).from('pS/cm').to('mS/cm')).toBeCloseTo(0.000000001);
    expect(convert(1).from('pS/cm').to('μS/cm')).toBeCloseTo(0.000001);
    expect(convert(1).from('pS/cm').to('nS/cm')).toBeCloseTo(0.001);
  });

  // Test specific conversion values from the table
  test('specific conversion values from table', () => {
    // S/m row
    expect(convert(1).from('S/m').to('dS/m')).toBe(10);
    expect(convert(1).from('S/m').to('mS/m')).toBe(1000);
    expect(convert(1).from('S/m').to('μS/m')).toBe(1000000);
    expect(convert(1).from('S/m').to('nS/m')).toBeCloseTo(1000000000, 0);
    expect(convert(1).from('S/m').to('pS/m')).toBeCloseTo(1000000000000, 0);

    // dS/m row
    expect(convert(1).from('dS/m').to('S/m')).toBe(0.1);
    expect(convert(1).from('dS/m').to('mS/m')).toBe(100);
    expect(convert(1).from('dS/m').to('μS/m')).toBeCloseTo(100000, 0);
    expect(convert(1).from('dS/m').to('nS/m')).toBeCloseTo(100000000, 0);
    expect(convert(1).from('dS/m').to('pS/m')).toBeCloseTo(100000000000, 0);

    // mS/m row
    expect(convert(1).from('mS/m').to('S/m')).toBe(0.001);
    expect(convert(1).from('mS/m').to('dS/m')).toBe(0.01);
    expect(convert(1).from('mS/m').to('μS/m')).toBeCloseTo(1000, 0);
    expect(convert(1).from('mS/m').to('nS/m')).toBeCloseTo(1000000, 0);
    expect(convert(1).from('mS/m').to('pS/m')).toBeCloseTo(1000000000, 0);

    // μS/m row
    expect(convert(1).from('μS/m').to('S/m')).toBe(0.000001);
    expect(convert(1).from('μS/m').to('dS/m')).toBeCloseTo(0.00001, 10);
    expect(convert(1).from('μS/m').to('mS/m')).toBe(0.001);
    expect(convert(1).from('μS/m').to('nS/m')).toBeCloseTo(1000);
    expect(convert(1).from('μS/m').to('pS/m')).toBeCloseTo(1000000, 0);

    // nS/m row
    expect(convert(1).from('nS/m').to('S/m')).toBe(0.000000001);
    expect(convert(1).from('nS/m').to('dS/m')).toBe(0.00000001);
    expect(convert(1).from('nS/m').to('mS/m')).toBe(0.000001);
    expect(convert(1).from('nS/m').to('μS/m')).toBe(0.001);
    expect(convert(1).from('nS/m').to('pS/m')).toBeCloseTo(1000, 0);

    // pS/m row
    expect(convert(1).from('pS/m').to('S/m')).toBe(0.000000000001);
    expect(convert(1).from('pS/m').to('dS/m')).toBe(0.00000000001);
    expect(convert(1).from('pS/m').to('mS/m')).toBe(0.000000001);
    expect(convert(1).from('pS/m').to('μS/m')).toBe(0.000001);
    expect(convert(1).from('pS/m').to('nS/m')).toBe(0.001);
  });
});
