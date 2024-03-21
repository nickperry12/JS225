// 1. Will the code below execute?

(function() {
  console.log("Sometimes, syntax isn't intuitive!")
})();

// No, it will not. The function is not wrapped in parentheses. In order for an
// IIFE to execute, one of two conditions must be satisfied:
// 1. The function expression is wrapped in parentheses, followed by a pair of
//    parentheses after the enclosing pair. Alternative, the second pair of 
//    parentheses can be placed within the enclosing pair.
// 2. The enclosing parentheses can be omited when the function definition is
//    an expression that doesn't occur at the beginning of the line.

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce(function(sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);
console.log(sum);

// function countdown(num) {
//   (function(n) {
//     for (let i = n; i >= 0; i -= 1) {
//       console.log(i);
//     }

//     console.log('Done!');
//   })(num);
// }

function countdown(num) {
 (function recursiveSub(n) {
  console.log(n);
  if (n === 0) {
    console.log('Done');
  } else {
    recursiveSub(n - 1)
  }
 })(num);
}

countdown(7);