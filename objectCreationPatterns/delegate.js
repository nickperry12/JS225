// Delegate 

// Write a delegate function that can be used to delegate the behavior of a
// method or function to another object's method. delegate takes a minimum of
// two arguments: (1) the object and (2) name of the method on the object. The
// remaining arguments, if any, are passed — as arguments — to the objects'
// method that it delegates to.

/*
P:

Need to create a function that accepts 3 arguments, the object we're delegating
to, the name of the method we wish to delegate, and any arguments that we're
passing to the method.

-- Modeling:

Examining the test cases we have two objects `foo` and `baz`. Within the `baz`
object, there is a property named `qux`, that invokes the `delegate` method,
passing in `foo`, `bar` and `'hello'` as arguments.

It appears that this method call delegates the `bar` function to the `foo`
object, passing in `hello` as an argument.
*/

function delegate(obj, methodName, ...args) {
  return function() {
    let func = obj[methodName];
    func.apply(obj, args)
  }
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'