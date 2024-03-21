// Make a Stack

// A stack is a compound data type like an array. The difference between an
// array and a stack is that in an array you can insert and remove elements in
// any order you want, but a stack has a rule whereby you can only add new
// elements at the end and remove the last inserted element.

// Create a function newStack, that, when called, returns a stack object with
// three methods: push, pop, and printStack. push takes a value and appends it
// to the stack. pop removes and returns the last element from the stack.
// printStack logs each remaining element of the stack on its own line, starting
// with the item that was least recently added to the stack and ending with the
// most recently added item that is still on the stack.

// Internally, use an array to implement the stack. Make sure that the array is
// not accessible from outside the methods.

function createStack() {
  let stack = [];

  return {
    pop() {
      return stack.pop();
    },

    push(value) {
      return stack.push(value);
    },

    printStack() {
      stack.forEach(item => console.log(item));
    }
  };
}

let newStack = createStack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.printStack();
newStack.pop();
newStack.printStack();