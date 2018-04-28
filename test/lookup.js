var convert = require('../lib')
  , assert = require('assert')
  , each = require('lodash.foreach')
  , keys = require('lodash.keys')
  , tests = {};

tests['lookup'] = function () {

  var assertions = [
    {
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
  ];

  var propertiesToTest = keys(assertions[0].unit);

  each(assertions, function (assertion) {
    var result = convert().lookup(assertion.query);
    each(propertiesToTest, function (property) {
      assert(result[property] == assertion.unit[property]
        , 'lookup(' + assertion.query + ') -> ' + assertion.unit.abbr + '.' + property + ' == ' + assertion.unit[property]);
    });
  });

  assert(convert().lookup('Cats') == false, 'Non-existent unit returns false');
};

tests['lookup within measure'] = function () {

  var assertions = [
    {
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
  ];

  var propertiesToTest = keys(assertions[0].unit);

  each(assertions, function (assertion) {
    var result = convert().lookup(assertion.query, assertion.measure);
    each(propertiesToTest, function (property) {
      assert(result[property] == assertion.unit[property]
        , 'lookup(' + assertion.query + ') -> ' + assertion.unit.abbr + '.' + property + ' == ' + assertion.unit[property]);
    });
  });

  assert(convert().lookup('Cups', 'mass') == false, 'Wrong measure return false');
};

module.exports = tests;
