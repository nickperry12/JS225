// Write a program that uses two functions, `add` and `subtract`, to manipulate
// a running total value. When you invoke either function with a number, it
// should add or subtract that number from the running total and log the new
// total to the console. Usage looks like this:
let total = 0;

function runningTotal(operation) {
  return function(num) {
    if (operation === 'subtract') {
      return total -= num;
    } else if (operation === 'add') {
      return total += num;
    } else {
      console.log('Not a valid operation, please enter \'add\' or \'subtract\'');
    }
  }
}

let add = runningTotal('add');
let subtract = runningTotal('subtract');

console.log(add(1));
// 1
console.log(add(42));
// 43
console.log(subtract(39));
// 4
console.log(add(6));
// 10