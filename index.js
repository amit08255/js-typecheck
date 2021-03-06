'use strict';


// Tiny collection of predictable type checking
class TypeCheck {

  // Returns a boolean telling if the input class A is a sub class from class B
  static isSubClassOf(objClassA, objClassB) {

    // checking if the classA is really a class not an instance
    if (this.isObject(objClassA))
      return false;

    return (objClassA.prototype instanceof objClassB);
  }

  // Returns a boolean telling if the two objects are the same type
  static isSameType(objInstanceA, objInstanceB){

    if (this.isObject(objInstanceA) && this.isObject(objInstanceB))
      if (objInstanceA.constructor === objInstanceB.constructor)
        return true;

    return false;
  }

  // Returns a boolean telling if the input value is really an object (not a class which is defined as function in javascript)
  static isObject(value){
    return (typeof value === 'object');
  }

  // Returns a boolean telling if the input value is a plain object (kind of dict: {a: 1, b: 2})
  static isPlainObject(value){
    if (!(this.isList(value) || this.isCallback(value) || (value === null)))
      return (this.isObject(value) && value.constructor === Object);

    return false;
  }

  // Returns a boolean telling if the input value is a string
  static isString(value){
    return (typeof value == 'string' || value instanceof String);
  }

  // Returns a boolean telling if the input value is a list (array)
  static isList(value){
    return Array.isArray(value);
  }

  // Returns a boolean telling if the input value is either null or undefined
  static isNone(value){
    return (value === undefined || value === null);
  }

  // Returns a boolean telling if the input value is a number
  static isNumber(value){
    return (typeof value === "number" && isFinite(value));
  }

  // Returns a boolean telling if the input value is an boolean
  static isBool(value){
    return (typeof value === 'boolean');
  }

  // Returns a boolean telling if the input value is a callback (function)
  static isCallback(value){
    return (typeof value == 'function');
  }

  // Returns a boolean telling if the input value is a callable (function)
  static isCallable(value){
    return this.isCallback(value);
  }

  // Returns a boolean telling if the input value is a primitive
  static isPrimitive(value){
    return (this.isNone(value) || this.isString(value) || this.isNumber(value) || this.isBool(value));
  }
}

module.exports = TypeCheck;
