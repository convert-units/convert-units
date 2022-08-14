import configureMeasurements, { Measure } from '../../index';

/**
 * @typedef {Array} TestType
 * @property {string} 0 - convert from
 * @property {string} 1 - convert to
 * @property {number} 2 - input
 * @property {number} 3 - result
 * @property {boolean} 4 - exact (i.e. whether to use 'toBe' or 'toBeCloseTo' matcher)
 */

type TestType = [string, string, number, number, boolean];

/**
 * @name runTests
 * @summary Maps an array of unit test values that should be run.
 * @param {...TestType[]} tests
 * @param {Measure<string, string>} measure
 * @returns void
 */

export const runTests = (
  tests: TestType[],
  measure: Measure<string, string>
) => {
  const convert = configureMeasurements({ measure });
  return tests.map((val) =>
    test(val[0] + ' to ' + val[1], () => {
      const actual: number = convert(val[2]).from(val[0]).to(val[1]);
      const result = val[3];
      const exact = val[4];
      return exact
        ? expect(actual).toBe(result)
        : expect(actual).toBeCloseTo(result);
    })
  );
};

describe('runTests', () => {
  const runTests = jest.fn();
  const mockTest = [['kg/h', 'kg/h', 1, 1, true]] as TestType[];
  const mockConvert = jest.fn();
  runTests(mockTest, mockConvert);
  it('should be called with correct arguments', () => {
    expect(runTests).toHaveBeenCalledWith(mockTest, mockConvert);
  });
});
