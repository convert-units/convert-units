export interface Wrapper<T> {
  create(value: string | number): T;
  add(left: string | number | T, right: string | number | T): T;
  sub(left: string | number | T, right: string | number | T): T;
  mul(left: string | number | T, right: string | number | T): T;
  div(left: string | number | T, right: string | number | T): T;
  lt(left: string | number | T, right: string | number | T): boolean;
  lte(left: string | number | T, right: string | number | T): boolean;
  gt(left: string | number | T, right: string | number | T): boolean;
  gte(left: string | number | T, right: string | number | T): boolean;
}

export function isWrapper<T>(wrapper: unknown): wrapper is Wrapper<T> {
  return (
    wrapper != null &&
    typeof wrapper === 'object' &&
    'create' in wrapper &&
    typeof wrapper.create === 'function' &&
    'add' in wrapper &&
    typeof wrapper.add === 'function' &&
    'sub' in wrapper &&
    typeof wrapper.sub === 'function' &&
    'mul' in wrapper &&
    typeof wrapper.mul === 'function' &&
    'div' in wrapper &&
    typeof wrapper.div === 'function' &&
    'lt' in wrapper &&
    typeof wrapper.lt === 'function' &&
    'lte' in wrapper &&
    typeof wrapper.lte === 'function' &&
    'gt' in wrapper &&
    typeof wrapper.gt === 'function' &&
    'gte' in wrapper &&
    typeof wrapper.gte === 'function'
  );
}

export class NotAValidNumber extends Error {}
