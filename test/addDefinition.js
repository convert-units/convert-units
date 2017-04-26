var convert = require('../lib')
  , assert = require('assert')
  , tests = {}
  , InvalidDefinitionError = require('../lib/InvalidDefinitionError');

var validDefinition = {
  metric: {
    whatever: {
      name: {
        singular: 'something'
      , plural: 'somethings'
      }
    , to_anchor: 1
    }
  }
, _anchors: {
    metric: {
      unit: 'thing'
    , ratio: 10
    }
  , imperial: {
      unit: 'other thing'
    , ratio: 1/10
    }
  }
};

tests['invalid definition throws'] = function () {
  assert.throws(function () {
    convert().addDefinitions({'INVALIDdefinition': {}});
  }, InvalidDefinitionError );
};

tests['adding a definition'] = function () {
  var converter = convert().addDefinitions({
    'VALIDdefinition': validDefinition
  , 'AnotherValid': validDefinition
  });
  console.log(convert().measures());
  assert(convert().measures().indexOf('VALIDdefinition') > -1);
  assert(convert().measures().indexOf('AnotherValid') > -1);
  assert.deepEqual(convert().possibilities('VALIDdefinition'), ['whatever'])
  assert.deepEqual(convert().possibilities('AnotherValid'), ['whatever'])
};

module.exports = tests;
