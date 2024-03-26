// Constructor Functions and Prototypes (2)
// 1. Follow the steps below:

// 1. Create an object called shape that has a getType method.
// 2. Define a Triangle constructor function whose prototype is shape. Objects
//    created with Triangle should have four own properties: a, b, c
//    (representing the sides of a triangle), and type.
// 3. Add a new method to the prototype called getPerimeter.
let shape = {
  getType() {
    return this.type;
  }
}

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = "triangle";
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}


let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"

// Note:
// When setting the prototype to a different object, instead of the object
// that is returned by the constructor function, you need to make sure to
// change the constructor function as well

// 2. Update the following code so that, instead of logging the values, each
//    statement logs the name of the constructor to which it belongs

console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);

// Note: The `constructor` property points to an object that also has a `name`
// property that we can access.

// 3. Since a constructor is just a function, it can be called without the new
//    operator, and this can lead to unexpected results and errors especially
//    for inexperienced programmers.

//    Write a constructor function that can be used with or without the new
//    operator, and return the same result in either form. Use the code below to
//    check your solution:
function User(first, last) {
  if (!(this instanceof User)) return new User(first, last);

  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
console.log(user1 instanceof User);
console.log(user2 instanceof User);

// Constructor functions that are built this way are called "scope-safe
// constructors". Most of JavaScript's built-in constructors, such as `Array`,
// `Object` and `RegExp` are built this way.

// 4. Create a function that can create an object with a given object as its
//    prototype, without using Object.create.
let personProto = {
  sayName() {
    console.log(this.name);
  }
};

function Person(object) {
  Object.setPrototypeOf(this, object);
  this.name = 'Nick';
}

let nick = new Person(personProto);

console.log(Object.getPrototypeOf(nick));

// LS Solution:

function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

// This solution is preferable, as the `Object.setPrototypeOf` method can have a
// large impact on memory and performance. This is called a "temporary"
// constructor function.

// 5. Similar to the problem above, without using Object.create, create a
//    begetObject method that you can call on any object to create an object
//    inherited from it:

let foo = {
  a: 1,
};

Object.prototype.begetObject = function() {
  function Obj() {}
  Obj.prototype = this;
  return new Obj();
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true

// 6. Create a function neww, so that it works like the new operator. For this
//    practice problem, you may use Object.create.

function neww(constructor, args) {
  let object = Object.create(constructor.prototype);
  let result = constructor.apply(object, args);
  // the return value of `apply` is going to be the returned value of the called
  // function. If it returns an object, ther return value of `neww` will return
  // `result`, if not, then `object` gets returned
  return typeof result === 'object' ? result : object;
}

function Person2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person2.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person2, ['John', 'Doe']);
john.greeting();          // => Hello, John Doe
console.log(john.constructor.name);         // Person2(firstName, lastName) {...}