function Person() {
  this.a = 'a';
  this.b = 'b';
}

let person = new Person();

console.log(person.constructor === Person);  // Person is the constructor of `person`

// Person has a prototype property (Person.prototype) that points to an
// object. This object has a constructor property
// (Person.prototype.constructor) that points back to Person, linking them.

console.log(Person.prototype.constructor === Person);

// If Person is used as a constructor, its prototype will step in and act as
// the prototype for any objects Person creates.

// Person used as a constructor => Object created from Person will have a
// prototype that points to Persons prototype

// Being an Object, `person` has a dunder proto property, which points to its
// prototype, and having been constructed from Person, this prototype is
// Person's prototype object.

console.log(Object.getPrototypeOf(person) === Person.prototype);
// Also written as `person.__proto__ === Person.prototype`

// Looking further up the prototype chain: Where did Person and its prototype
// object, Person.prototype, come from?

// Person is a constructor function, which is a Function object made from
// JavaScript's built-in Function constructor.

console.log(Person.constructor === Function);

// Function objects have `prototype` properties as well, which will point to
// the `Function` prototype property

console.log(Object.getPrototypeOf(Person) === Function.prototype);

// Person's prototype object wasn't created by Person, but it was created
// because of Person, and Person is the constructor it works with, so
// it makes sense that its constructor property points to Person.

// The Person Function is an object too, so it must have a dunder proto
// property. In thise case, having been constructed automatically alongside
// Person (the Person prototype property), its prototype is JavaScript's
// built-in Object prototype.

console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype)

// Lastly, we'll examine the built-in objects. Function and Object and their
// respective prototype objects are linked to each other in the same way
// as we've previously seen.

console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);
console.log(Function.prototype.constructor === Function);
console.log(Object.prototype.constructor === Object);

// Function's prototype object was created automatically just like Person's
// prototype object, so it also delegates to Object.prototype.

console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);

// Object is a function, so it was constructed from Function. Oddly, Function is
// also a function, so Function was constructed from itself. 

console.log(Object.constructor === Function.constructor);
console.log(Function.constructor === Function);
// Object.constructor === Function.constructor === Function

// As objects, both Object and Function have dunder proto properties which point
// to the prototype object of their constructor.

console.log(Object.getPrototypeOf(Object) === Object.getPrototypeOf(Function));
console.log(Object.getPrototypeOf(Function) === Function.prototype);

// A couple more releationships will wrap this up.
// Function and Object's prototype objects have dunder proto properties too.
// Function's prototype object has the built-in Object prototype as a prototype
// just like Creature's prototype object did.

console.log(Object.getPrototypeOf(Function.prototype) === Object.prototype);

// On the other hand, Object's prototype object cannot have itself as a
// prototype. Object's prototype object is `null`.

console.log(Object.getPrototypeOf(Object.prototype) === null);