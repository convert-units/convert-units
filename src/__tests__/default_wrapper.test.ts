import DefaultWrapper from '../number_wrapper.js';
import { NotAValidNumber } from '../wrapper.js';

describe('create', () => {
  test('should return the value of 10 when given the parameter of 10', () => {
    expect(DefaultWrapper.create(10)).toEqual(10);
  });

  test('should return the value of "10" when given the parameter of 10', () => {
    expect(DefaultWrapper.create('10')).toEqual(10);
  });

  test('should throw an error if it is not able to turn the provided value into a number', () => {
    expect(() => DefaultWrapper.create('10a')).toThrow(NotAValidNumber);
  });
});

describe('add', () => {
  test('should add the left value to the right value', () => {
    expect(DefaultWrapper.add(10, 10)).toEqual(20);
  });

  test('should be able to add strings that repersent numbers', () => {
    expect(DefaultWrapper.add('10', '10')).toEqual(20);
  });
});

describe('sub', () => {
  test('should subtract the left value to the right value', () => {
    expect(DefaultWrapper.sub(10, 3)).toEqual(7);
  });

  test('should be able to subtract strings that repersent numbers', () => {
    expect(DefaultWrapper.sub('10', '3')).toEqual(7);
  });
});

describe('mul', () => {
  test('should multiply the left value to the right value', () => {
    expect(DefaultWrapper.mul(7, 10)).toEqual(70);
  });

  test('should be able to multiply strings that repersent numbers', () => {
    expect(DefaultWrapper.mul('7', '10')).toEqual(70);
  });
});

describe('div', () => {
  test('should divide the left value to the right value', () => {
    expect(DefaultWrapper.div(20, 10)).toEqual(2);
  });

  test('should be able to divide strings that repersent numbers', () => {
    expect(DefaultWrapper.div('20', '10')).toEqual(2);
  });
});

describe('lt', () => {
  test('should return false if the current value is not less than the passed param', () => {
    expect(DefaultWrapper.lt(20, 10)).toBeFalsy();
  });

  test('should return true if the current value is less than the passed param', () => {
    expect(DefaultWrapper.lt(6, 9)).toBeTruthy();
  });

  test('should work with numbers as strings', () => {
    expect(DefaultWrapper.lt('6', '2')).toBeFalsy();
  });
});

describe('lte', () => {
  test('should return false if the current value is not less than the passed param', () => {
    expect(DefaultWrapper.lte(20, 10)).toBeFalsy();
  });

  test('should return true if the current value is less than the passed param', () => {
    expect(DefaultWrapper.lte(6, 9)).toBeTruthy();
  });

  test('should return true if the current value is equal to the passed param', () => {
    expect(DefaultWrapper.lte(5, 5)).toBeTruthy();
  });

  test('should work with numbers as strings', () => {
    expect(DefaultWrapper.lte('6', '2')).toBeFalsy();
  });
});

describe('gt', () => {
  test('should return false if the current value is not less than the passed param', () => {
    expect(DefaultWrapper.gt(10, 20)).toBeFalsy();
  });

  test('should return true if the current value is less than the passed param', () => {
    expect(DefaultWrapper.gt(9, 6)).toBeTruthy();
  });

  test('should work with numbers as strings', () => {
    expect(DefaultWrapper.gt('2', '6')).toBeFalsy();
  });
});

describe('gte', () => {
  test('should return false if the current value is not less than the passed param', () => {
    expect(DefaultWrapper.gte(10, 20)).toBeFalsy();
  });

  test('should return true if the current value is less than the passed param', () => {
    expect(DefaultWrapper.gte(9, 6)).toBeTruthy();
  });

  test('should return true if the current value is equal to the passed param', () => {
    expect(DefaultWrapper.gte(5, 5)).toBeTruthy();
  });

  test('should work with numbers as strings', () => {
    expect(DefaultWrapper.gte('2', '6')).toBeFalsy();
  });
});
