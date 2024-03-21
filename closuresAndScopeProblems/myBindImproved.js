// myBind() Improved

// Our earlier implementation of the Function.prototype.bind was simplistic.
// Function.prototype.bind has another trick up its sleeve besides hard-binding
// functions to context objects. It's called partial function application. Read
// this assignment and the MDN documentation to learn more about partial
// function application.

// Alter the myBind function written in the previous exercise to support partial
// function application of additional arguments to the original function.

function myBind(func, context, ...boundArgs) {
  return function(...args) {
    return func.apply(context, boundArgs.concat(args));
  }
}

function addNums(a, b) {
  return a + b;
}

const addForty = myBind(addNums, null, 40);

console.log(addForty(4));

/*

One note: I've had trouble wrapping my brain around passing null for the this
context. (Why? What does it do?) I found the answer in this SO post: passing
null just uses the global object for this, as functions normally do. (Edit: once
I understood partial function applications, I understood that passing null means
that you are just prepending arguments without explicitly assigning an execution
context.)

So here, we don't need to reassign this. Instead, we're using our custom bind
function to pass in an argument to a function prior to actually calling it, by
creating a new function with this argument baked in. (If you'd like an example
of doing both, I put one up in my "unique solution" to the previous exercise.)
*/