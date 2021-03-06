![type-check](data/logo.png)


[![Build Status](https://travis-ci.org/paulondc/js-typecheck.svg?branch=master)](https://travis-ci.org/paulondc/js-typecheck) [![codecov.io](https://codecov.io/github/paulondc/js-typecheck/coverage.svg?branch=master)](https://codecov.io/github/paulondc/js-typecheck?branch=master)

TypeCheck provides a tiny collection of predictable type checking for javascript.

The goal of this library is to be a tiny dependency focused exclusively in type checking which in conjuction with [ES6](http://es6-features.org) provides a better experience in writting javascript code.

#### Requirement
This module requires support for [ES6](http://es6-features.org)

#### Install
```
npm install js-typecheck --save
```

#### Using it

Checks if "B" is a subclass of "A"
```javascript
const TypeCheck = require('js-typecheck')

class A{}
class B extends A {}

TypeCheck.isSubClassOf(B, A)
```
---
Checks if the input objects are the same type
```javascript
TypeCheck.isSameType(new Date(), "Not the same!")
```

---
Returns if the input is an object
```javascript
TypeCheck.isObject(new Object())
```

---
Checks if the input is a plain object (objects created using literal notation):
```javascript
TypeCheck.isPlainObject({a: 1, b: 2})
```

---
Checks if the input is an array object
```javascript
TypeCheck.isList([1, 2, 3, 4, 5])
```

---
Checks if the input is none, either null or undefined
```javascript
TypeCheck.isNone(null)
```
or
```javascript
TypeCheck.isNone(undefined)
```

---
Checks if the input is a function
```javascript
TypeCheck.isCallable(() => {})
```
or
```javascript
TypeCheck.isCallback(() => {})
```

---
Checks if the input is a string type
```javascript
TypeCheck.isString("foo")
```

---
Checks if the input is a number type
```javascript
TypeCheck.isNumber(5.0)
```

---
Checks if the input is a boolean type
```javascript
TypeCheck.isBool(true)
```

---
Checks if value is a primitive
```javascript
TypeCheck.isPrimitive('test') // true
TypeCheck.isPrimitive(5) // true
TypeCheck.isPrimitive(true) // true
TypeCheck.isPrimitive(null) // true
TypeCheck.isPrimitive(undefined) // true
TypeCheck.isPrimitive({}) // false
```

#### Examples
Take a look at the [tests](test/main.js) for more examples about it

#### Licensing
js-typecheck is free software; you can redistribute it and/or modify it under the terms of the MIT License
