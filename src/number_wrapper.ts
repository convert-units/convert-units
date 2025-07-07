import { NotAValidNumber, Wrapper } from './wrapper.js';

const DefaultWrapper: Wrapper<number> = {
  create(value: string | number): number {
    const result = Number(value);
    if (Number.isNaN(result)) {
      throw new NotAValidNumber(`"${value}" cannot be parsed into a number`);
    }
    return result;
  },

  add(left: string | number, right: string | number): number {
    return Number(left) + Number(right);
  },

  sub(left: string | number, right: string | number): number {
    return Number(left) - Number(right);
  },

  mul(left: string | number, right: string | number): number {
    return Number(left) * Number(right);
  },

  div(left: string | number, right: string | number): number {
    return Number(left) / Number(right);
  },

  lt(left: string | number, right: string | number): boolean {
    return Number(left) < Number(right);
  },

  lte(left: string | number, right: string | number): boolean {
    return Number(left) <= Number(right);
  },

  gt(left: string | number, right: string | number): boolean {
    return Number(left) > Number(right);
  },

  gte(left: string | number, right: string | number): boolean {
    return Number(left) >= Number(right);
  },
};

export default DefaultWrapper;
