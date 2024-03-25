// Constructor Functions and Prototypes
// 1. What will the following code log to the console?
let ab = 1;
let foo;
let obj;

function Foo() {
  this.ab = 2;
  this.bar = function() {
    console.log(this.ab);
  };
  this.bar();
}

// foo = new Foo();

// foo.bar();
// Foo();

// obj = {};
// Foo.call(obj);
// obj.bar();

// console.log(this.a);
/*
The `Foo` constructor function is defined, with the properties `a` and `bar`.
The property `a` is assigned the value `2` and the property `bar` is assigned a
function that logs the value of `this.a` to the console. `this` will resolve to
the object `Foo` returns when it's invoked with the `new` keyword as a
constructor function. On line 12, `this.bar` is invoked, which gets executed
when `Foo` is invoked.

Line 15 will log `2` to the console. `Foo` is being invoked as a constructor
function with the `new` keyword, setting the context of `this` to the returned
function prototype object.

Line 17 will log `2` to the console. We're invoking the `bar` method on the
`foo` object, and `this` within the `foo.bar` is set to reference the `foo`
object.

Line 18 will log `2` to the console. `Foo` in invoked without the `new` keyword,
and the context of `this` will be set to the global object. Witihin function,
`a` and `bar` are set as properties of the global object. When `this.bar` is
invoked within the function, it's invoking the `bar` method on the global
object, logging the value of `global.a`, which is `2`.

Line 21 logs `2` to the console. We're invoking the `call` method on the `Foo`
function object with `obj` as the argument. This invokes the function,
explicitly setting the execution context to `obj`. `this` within the function
now references `obj`, setting the properties `a` to `2`, and `bar` to a function
that logs the value of the `a` property. When `Foo` is invoked, it invokes the
`bar` function within it. 

Line 22 logs `2`, we're invoking the `bar` method on `obj`, logging the value of
the `a` property on `obj`.

Line 24 will log the global object property `a`, which was set to `2` by the
`Foo` function invocation on line 18.
*/

// 2. What does the following code log to the console?

let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.perimeter);

/*
`NaN` will be logged to the console on line 80 and 81. When the `area` and
`perimeter` methods are invoked, it's being invoked on the `RECTANGLE` object,
and the execution context is set to `RECTANGLE`; `this` within the method
references `RECTANGLE`, not the `rect1` object. Since the `RECTANGLE` object
does not have `width` and `height` properties, `undefined` is used as the
operands within the `area` and `perimeter` methods, returning `NaN`.

We can get the desired output by explicitly setting the execution context with
the `call` method, passing in `this` as an argument. When `new Rectangle` is
invoked, `this` will reference the returned object, giving the `area` and
`pertimeter` methods access to the `width` and `height` properties of the
returned object.
*/

// 3. Write a constructor function Circle, that takes a radius as an argument.
//    You should be able to call an area method on the created objects to get
//    the circle's area. Test your implementation with the following code:
function Circle(radius) {
  this.radius = radius;
  this.area = function () {
    return Math.PI * Math.pow(radius, 2);
  }
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27

// 4. What will the following code log out and why?

let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());

/*
Line 127 will log `true` to the console. The `Ninja` constructor function is
defined on line 117 with the property `swung` and it's value set to `true`. A
new `Ninja` object is created and assigned to `ninja`. The `swingSword` property
is added to the `Ninja.prototype` object, assigning it a function that returns
the value of the `swung` property. The `ninja` object's prototype points to the
`Ninja` constructor functions `prototype` property, so when the `swingSword`
method is invoked on the `ninja` object, JavaScript will first look within the
`ninja` object, and when it doesn't find it, will search the prototype chain,
and will find the method within the `Ninja.prototype` object.
*/

// 5. What will the following code log and why?

let ninja2;
function Ninja2() {
  this.swung = true;
}

ninja2 = new Ninja2();

Ninja2.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

// console.log(ninja2.swingSword());

/*
This will throw a `TypeError` stating `swingSword` is not a function. The
`Ninja2.prototype` object is reassigned to a new object on line 150; the
`ninja2` object prototype and `Ninja2.prototype` no longer point to the same
object. Consequently, when the `swingSword()` method is invoked on the `ninja2`
object, JavaScript will not find the method within the `ninja2` object and will
search up the prototype chain, where it will not find the method within any
of the prototype objects.
*/

// 6. Implement a method described in the comments below:
let ninjaA;
let ninjaB;
function Ninja3() {
  this.swung = false;
}

ninjaA = new Ninja3();
ninjaB = new Ninja3();

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung
Ninja3.prototype.swing = function () {
  this.swung = true;
  return this;
}

console.log(ninjaA.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // must log true

// 7. In this problem, we'll ask you to create a new instance of an object,
//    without having direct access to the constructor function:
let ninjaC = (function() {
  function NinjaG(){};
  return new NinjaG();
})();

// create a ninjaD object;
let constructor = ninjaC.constructor;
let ninjaD = new constructor();

console.log(ninjaD.constructor === ninjaC.constructor);    // should log true