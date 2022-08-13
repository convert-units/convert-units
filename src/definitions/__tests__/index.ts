type TestType = [string, string, number, number, boolean];

/**
 * @name runTests
 * @summary Maps an array of unit test values that should be run.
 * @param {TestType[]} tests
 * @param {any} convert
 * @returns void
 */

export const runTests = (tests: TestType[], convert: any) => {
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
