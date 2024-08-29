import { Decimal } from 'decimal.js';
import { NotAValidNumber, Wrapper } from '../wrapper.js';

export const decimal_cls: Wrapper<Decimal> = {
  create(value) {
    try {
      return new Decimal(value);
    } catch (e) {
      throw new NotAValidNumber(`"${value}" cannot be parsed into a number`);
    }
  },
  add(left, right) {
    return new Decimal(left).add(new Decimal(right));
  },
  sub(left, right) {
    return new Decimal(left).sub(new Decimal(right));
  },
  mul(left, right) {
    return new Decimal(left).mul(new Decimal(right));
  },
  div(left, right) {
    return new Decimal(left).div(new Decimal(right));
  },
  lt(left, right) {
    return new Decimal(left).lt(new Decimal(right));
  },
  lte(left, right) {
    return new Decimal(left).lte(new Decimal(right));
  },
  gt(left, right) {
    return new Decimal(left).gt(new Decimal(right));
  },
  gte(left, right) {
    return new Decimal(left).gte(new Decimal(right));
  },
};
