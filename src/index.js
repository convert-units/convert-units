/* eslint-disable no-console */
const numeral = require('numeral');
const convert = require('./originalConvert');

function changeUnit(result, alias) {
  if (alias && result) {
    const obj = { ...result };

    if (Object.prototype.hasOwnProperty.call(alias, obj.unit)) {
      obj.unit = alias[obj.unit];
    }
    return obj;
  }
  return null;
}

function postConversion(result, postOption) {
  if (postOption && result) {
    let obj = { ...result };

    if (postOption) {
      const { alias, transform } = postOption;

      // transform result
      if (transform) {
        // check input is valid
        if (
          typeof transform !== 'function' &&
          !(transform instanceof Array) &&
          transform instanceof Array &&
          !transform.reduce(
            (isFunc, func) => isFunc && typeof func === 'function',
            true
          )
        ) {
          throw new Error(
            'Invalid parameter, transform should be function or array of function'
          );
        }
        // unify input to array of function
        let transformArray;
        if (typeof transform === 'function') {
          transformArray = [transform];
        } else {
          transformArray = transform;
        }

        // excute all function in transform array from left to right
        obj = transformArray.reduce((res, func) => {
          const newResult = func(res);
          // validation, make sure result has 'val' and 'unit'
          obj =
            newResult &&
            Object.prototype.hasOwnProperty.call(newResult, 'val') &&
            Object.prototype.hasOwnProperty.call(newResult, 'unit')
              ? newResult
              : res;
          if (
            Object.prototype.hasOwnProperty.call(obj, 'str') &&
            Object.prototype.hasOwnProperty.call(res, 'str') &&
            obj.str !== res.str
          ) {
            console.warn(
              'The result has already been format, previous result will be lost'
            );
          }
          return obj;
        }, obj);
      }

      // override unit
      obj = alias ? changeUnit(obj, alias) : obj;
    }
    return obj;
  }
  return null;
}

class ConvertWithFormat {
  constructor(value, option) {
    this.convertor = option ? convert(value, option) : convert(value);
    // type =  { val: number; unit: string; str?:string;}
    this.result = undefined;
    this.value = undefined;

    // forward method call to an instance of convert.
    const methodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    const propertyNames = Object.getOwnPropertyNames(this);
    const overridenProperties = new Set([...methodNames, ...propertyNames]);
    return new Proxy(this, {
      get(target, prop, receiver) {
        if (!overridenProperties.has(prop)) {
          return convert()[prop];
        }
        return Reflect.get(target, prop, receiver);
      },
    });
  }

  from(from) {
    this.convertor.from(from);
    return this;
  }

  /**
   *
   * @param {string} to abbreviation for target unit type
   * @return {ThisParameterType} return this for chaining
   */
  to(to) {
    // type={alias?: {[key: unit]: string}, transform?: function, hasSpace}
    const result = this.convertor.to(to);
    const unit = convert().getUnit(to);

    // hard code to erase integer and ratio
    if (unit.unit === 'integer' || unit.unit === 'ratio') {
      unit.unit = '';
    }

    this.result = {
      val: result,
      unit: unit.abbr,
      singular: unit.unit.singular,
      plural: unit.unit.plural,
    };

    return this;
  }

  /**
   * select the best unit for you.
   * You can also optionally explicitly exclude orders of magnitude
   * or specify a cut off number for selecting the best representation.
   *
   * @param {object} options function from unit-converts
   * @return {ThisParameterType}
   */
  toBest(options) {
    this.result = this.convertor.toBest(options);

    // hard code to erase integer and ratio
    if (this.result.unit === 'integer' || this.result.unit === 'ratio') {
      this.result.unit = '';
    }

    return this;
  }

  /**
   * transform the result from unit-conversion,
   * use postOption.alias to change unit
   * use postOption.transform, a function, to change the result value
   * or unit before changing alias
   * @param {object} postOption
   * @return {ThisParameterType}
   */
  transform(postOption) {
    if (this.hasResult()) {
      // change value or abbr after conversion,
      this.result =
        this.result && postOption
          ? postConversion(this.result, postOption)
          : this.result;
    }
    // throw new Error('transform should be invoked after toBest or to')

    return this;
  }

  hasResult() {
    return (
      this.result !== undefined &&
      Object.prototype.hasOwnProperty.call(this.result, 'val') &&
      typeof this.result.val === 'number'
    );
  }

  /**
   * get the result as number
   * @return {number}
   */
  toNumber() {
    if (this.hasResult()) {
      return this.result.val;
    }
    throw new Error('No result found');
  }

  /**
   * use numeral to format string, call to toString will only contain number
   * @param {string} str parameter for numeral
   * @return {ThisParameterType}
   */
  format(str) {
    if (Object.prototype.hasOwnProperty.call(this.result, 'str')) {
      console.warn(
        'The result has been formatted,previous result will be lost.'
      );
    }

    if (str === undefined) {
      this.result.str = `${this.result.val}`;
      return this;
    }
    if (this.hasResult()) {
      this.result.str = numeral(this.result.val).format(str);
      this.result.val = numeral(this.result.str).value();
      return this;
    }
    throw new Error('No result found');
  }

  /**
   * use numeral to format, call to toString will contain number and unit
   * @param {string} str parameter for numeral
   * @return {ThisParameterType}
   */
  formatWithUnit(str) {
    if (Object.prototype.hasOwnProperty.call(this.result, 'str')) {
      console.warn(
        'The result has been formatted,previous result will be lost.'
      );
    }

    if (!this.hasResult()) {
      throw new Error('No result found');
    }

    // hard code to erase integer and ratio
    const unit =
      this.result.unit === 'integer' || this.result.unit === 'ratio'
        ? ''
        : ` ${this.result.unit}`;

    if (str !== undefined) {
      this.format(str);
    }
    this.result.str = `${this.result.val}${unit}`;

    return this;
  }

  toString() {
    if (!this.hasResult()) {
      throw new Error('No result found');
    }
    return Object.prototype.hasOwnProperty.call(this.result, 'str')
      ? this.result.str
      : this.format().result.str;
  }
}

module.exports = {
  UC(value) {
    return new ConvertWithFormat(value);
  },
  UCWithNewRule(option) {
    return function (value) {
      return new ConvertWithFormat(value, option);
    };
  },
};
