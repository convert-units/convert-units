import { Decimal } from 'decimal.js';
import { NotAValidNumber, Wrapper } from '../wrapper.js';
import { decimal_cls } from './decimal_wrapper.js';

describe('decimal wrapper', () => {
  const cls: Wrapper<Decimal> = Object.assign({}, decimal_cls);

  describe('create', () => {
    test('should return the value of 10 when given the parameter of 10', () => {
      expect(cls.create(10).toNumber()).toEqual(10);
    });

    test('should return the value of "10" when given the parameter of 10', () => {
      expect(cls.create('10').toNumber()).toEqual(10);
    });

    test('should return NaN if it is not able to turn the provided value into a number', () => {
      expect(() => cls.create('10a')).toThrow(NotAValidNumber);
    });
  });

  describe('add', () => {
    test('should add the left value to the right value', () => {
      expect(cls.add(10, 10).toNumber()).toEqual(20);
    });

    test('should be able to add strings that repersent numbers', () => {
      expect(cls.add('10', '10').toNumber()).toEqual(20);
    });
  });

  describe('sub', () => {
    test('should subtract the left value to the right value', () => {
      expect(cls.sub(10, 3).toNumber()).toEqual(7);
    });

    test('should be able to subtract strings that repersent numbers', () => {
      expect(cls.sub('10', '3').toNumber()).toEqual(7);
    });
  });

  describe('mul', () => {
    test('should multiply the left value to the right value', () => {
      expect(cls.mul(7, 10).toNumber()).toEqual(70);
    });

    test('should be able to multiply strings that repersent numbers', () => {
      expect(cls.mul('7', '10').toNumber()).toEqual(70);
    });
  });

  describe('div', () => {
    test('should divide the left value to the right value', () => {
      expect(cls.div(20, 10).toNumber()).toEqual(2);
    });

    test('should be able to divide strings that repersent numbers', () => {
      expect(cls.div('20', '10').toNumber()).toEqual(2);
    });
  });

  describe('lt', () => {
    test('should return false if the current value is not less than the passed param', () => {
      expect(cls.lt(20, 10)).toBeFalsy();
    });

    test('should return true if the current value is less than the passed param', () => {
      expect(cls.lt(6, 9)).toBeTruthy();
    });

    test('should work with numbers as strings', () => {
      expect(cls.lt('6', '2')).toBeFalsy();
    });
  });
  describe('lte', () => {
    test('should return false if the current value is not less than the passed param', () => {
      expect(cls.lte(20, 10)).toBeFalsy();
    });

    test('should return true if the current value is less than the passed param', () => {
      expect(cls.lte(6, 9)).toBeTruthy();
    });

    test('should return true if the current value is equal to the passed param', () => {
      expect(cls.lte(5, 5)).toBeTruthy();
    });

    test('should work with numbers as strings', () => {
      expect(cls.lt('6', '2')).toBeFalsy();
    });
  });

  describe('gt', () => {
    test('should return false if the current value is not less than the passed param', () => {
      expect(cls.gt(10, 20)).toBeFalsy();
    });

    test('should return true if the current value is less than the passed param', () => {
      expect(cls.gt(9, 6)).toBeTruthy();
    });

    test('should work with numbers as strings', () => {
      expect(cls.gt('2', '6')).toBeFalsy();
    });
  });

  describe('gte', () => {
    test('should return false if the current value is not less than the passed param', () => {
      expect(cls.gte(10, 20)).toBeFalsy();
    });

    test('should return true if the current value is less than the passed param', () => {
      expect(cls.gte(9, 6)).toBeTruthy();
    });

    test('should return true if the current value is equal to the passed param', () => {
      expect(cls.gte(5, 5)).toBeTruthy();
    });

    test('should work with numbers as strings', () => {
      expect(cls.gte('2', '6')).toBeFalsy();
    });
  });
});
