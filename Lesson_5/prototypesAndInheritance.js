// Prototypes and Prototypal Inheritance
// 1. Write a function that returns the object on a given object's prototype
//    chain where a property is defined. See the example code below:
/*
We need to find the prototype on the given object's prototype chain where the
given property is defined.

The `getPrototypeOf` method finds the prototype of the passed in object. Using a
loop with the break conditions being that `object` remains truthy (remains an
object) and the object does not the property being passed in, we can reassign
the object to the result of `getPrototypeOf`.

If `object` becomes `null`, which occurs when we reach the end of the prototype
chain, the loop breaks. If the object remains an object, i.e., is still an
object within the prototype chain, then we check to see if the property exists
in that object. If it does, the loop breaks. This lets us know that the current
value of `object`, which is the prototype of the object on the previous
iteration, contains the property we are passing in.


*/
// function getDefiningObject(object, propKey) {
//   while(object) {
//     if (object.hasOwnProperty(propKey)) return object;
//     object = Object.getPrototypeOf(object);
//   }

//   return null;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };
// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);

// bar.c = 3;

// console.log(getDefiningObject(qux, 'c') === bar);     // => true
// console.log(getDefiningObject(qux, 'e'));             // => null

// 2. Write a function to provide a shallow copy of an object. The object that
//    you copy should share the same prototype chain as the original object, and
//    it should have the same own properties that return the same values or
//    objects when accessed. Use the code below to verify your implementation:

// function shallowCopy(object) {
//   let shallowObject = Object.create(Object.getPrototypeOf(object));
//   let propKeys = Object.getOwnPropertyNames(object);
//   propKeys.forEach(key => {
//     shallowObject[key] = object[key];
//   });

//   return shallowObject;
// }

// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function() {
//   console.log('c is ' + this.c);
// };

// let baz = shallowCopy(bar);
// console.log(baz.a);       // => 1
// baz.say();                // => c is 3
// console.log(baz.hasOwnProperty('a'));  // false
// console.log(baz.hasOwnProperty('b'));  // false
// console.log(baz.hasOwnProperty('c'));  // true

// let a = {
//   hasOwnProperty: 1,
// };

// shallowCopy(a);   // Uncaught TypeError: object.hasOwnProperty is not a function

// 3. Write a function that extends an object (destination object) with contents
//    from multiple objects (source objects).
function extend(destination, ...args) {
  args.forEach(arg => {
    let propKeys = Object.getOwnPropertyNames(arg);
    propKeys.forEach(key => {
      destination[key] = arg[key];
    })
  });

  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
