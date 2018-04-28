var convert = require('../lib')
  , assert = require('assert')
  , each = require('lodash.foreach')
  , keys = require('lodash.keys')
  , tests = {};

var propertiesToTest = ['abbr', 'measure', 'system', 'singular', 'plural'];

function addAssertions(assertions) {
  each(assertions, function (assertion) {
    var testName;

    if (assertion.measure) {
      testName = 'lookup(\'' + assertion.query + '\', \'' + assertion.measure
        + '\') -> ' + assertion.unit.abbr;
    } else {
      testName = 'lookup(\'' + assertion.query
        + '\') -> ' + assertion.unit.abbr;
    }

    tests[testName] = function() {
      var result = convert().lookup(assertion.query);
      each(propertiesToTest, function (property) {
        assert(result[property] == assertion.unit[property], testName
          + '.' + property + ' == \'' + assertion.unit[property] + '\'');
      });
    };
  });
}

addAssertions([
  {
    query: 'Cup'
  , unit: {
      abbr: 'cup'
    , measure: 'volume'
    , system: 'imperial'
    , singular: 'Cup'
    , plural: 'Cups'
    }
  }
, {
    query: 'Cups'
  , unit: {
      abbr: 'cup'
    , measure: 'volume'
    , system: 'imperial'
    , singular: 'Cup'
    , plural: 'Cups'
    }
  }
, {
    query: 'Pounds'
  , unit: {
      abbr: 'lb'
    , measure: 'mass'
    , system: 'imperial'
    , singular: 'Pound'
    , plural: 'Pounds'
    }
  }
, {
    query: 'tbsp'
  , unit: {
      abbr: 'Tbs'
    , measure: 'volume'
    , system: 'imperial'
    , singular: 'Tablespoon'
    , plural: 'Tablespoons'
    }
  }
, {
    query: 'TBSP'
  , unit: {
      abbr: 'Tbs'
    , measure: 'volume'
    , system: 'imperial'
    , singular: 'Tablespoon'
    , plural: 'Tablespoons'
    }
  }
, {
    query: 'Cups'
  , measure: 'volume'
  , unit: {
      abbr: 'cup'
    , measure: 'volume'
    , system: 'imperial'
    , singular: 'Cup'
    , plural: 'Cups'
    }
  }
, {
    query: 'Cups'
  , measure: 'volume'
  , unit: {
      abbr: 'cup'
    , measure: 'volume'
    , system: 'imperial'
    , singular: 'Cup'
    , plural: 'Cups'
    }
  }
, {
    query: 'Pounds'
  , measure: 'mass'
  , unit: {
      abbr: 'lb'
    , measure: 'mass'
    , system: 'imperial'
    , singular: 'Pound'
    , plural: 'Pounds'
    }
  }
, {
    query: 'cups'
  , unit: {
      abbr: 'cup'
    , measure: 'volume'
    , system: 'imperial'
    , singular: 'Cup'
    , plural: 'Cups'
    }
  }
, {
    query: 'pounds'
  , unit: {
      abbr: 'lb'
    , measure: 'mass'
    , system: 'imperial'
    , singular: 'Pound'
    , plural: 'Pounds'
    }
  }
, {
    query: 'POUNDS'
  , unit: {
      abbr: 'lb'
    , measure: 'mass'
    , system: 'imperial'
    , singular: 'Pound'
    , plural: 'Pounds'
    }
  }
]);

tests['lookup non-existent unit'] = function () {
  assert(convert().lookup('Midi-chlorines') == false, 'Non-existent unit returns false');
};

tests['lookup for wrong measure'] = function () {
  assert(convert().lookup('Pounds', 'volume') == false, 'Wrong measure for unit returns false');
};

tests['lookup for non-existent measure'] = function () {
  assert(convert().lookup('Pounds', 'fuzziness') == false, 'Non-existent measure returns false');
};

module.exports = tests;
