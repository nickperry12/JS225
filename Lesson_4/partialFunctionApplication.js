// 1. Use partial function application to implement a function, makeSub, that
//    returns a function that subtracts 5 from the argument passed to the return
//    function.
function subtract(a, b) {
  return a - b;
}

function makeSub(func, arg1) {
  return function(arg2) {
    return func(arg2, arg1);
  }
}

let sub = makeSub(subtract, 5);
console.log(sub(20));
console.log(sub(55));

// 2. This code is a bit limited however, because we can only subtract by 5.
//    Implement the makeSubN function below so that we can supply any value we
//    want to be subtracted from a, and get a new function that will always
//    subtract this value.

function makeSubN(n) {
  return function(arg2) {
    return func(arg2, n);
  }
}

let sub20 = makeSub(subtract, 20);
console.log(sub20(140));

// 3. Although the solution above is more flexible, we now want to be able to
//    supply any operation, not just subtraction.
//    Implement `makePartialFunc` below.

function makePartialFunc(func, b) {
  return function(arg2) {
    return func(arg2, b);
  }
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);
let divideBy2 = makePartialFunc(divide, 2);

console.log(multiplyBy5(100)); // 500
console.log(divideBy2(100)); // 50

// 4. In our previous solution, `multiplyBy5` retains access
//    to `func` and `b` long after `makePartialFunc` has finished execution.
//    What makes this possible?
   
// --

// Closures make this possible. When the `makePartialFunc` is invoked, the
// arguments that are passed in becomes a part its closure, and the inner
// functions retain access to the value and the function after its invocation. 

// 5. Consider the code below:

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students);
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan

// Implement `makeMathRollCall` such that it returns a partially
// applied `rollCall` function, with the `subject` as `'Math'`