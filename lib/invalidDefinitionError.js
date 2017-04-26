function InvalidDefinitionError(type, message) {
  this.name = 'InvalidDefinitionError';
  this.message = message || type + ' is not a valid definition.';
  this.stack = (new Error()).stack;
}
InvalidDefinitionError.prototype = Object.create(Error.prototype);
InvalidDefinitionError.prototype.constructor = InvalidDefinitionError;

module.exports = InvalidDefinitionError;
