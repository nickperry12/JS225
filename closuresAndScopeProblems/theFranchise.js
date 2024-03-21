// The Franchise
// The method `franchise.allMovies` is supposed to return the following array:
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

// Explain why this method will not return the desired object. Try fixing this
// problem by taking advantage of JavaScript lexical scoping rules.
const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return `${self.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies());

/*
This code will not return the desired object, because `this` is being used
within the anonymous function that is being passed into the `map` method. Nested
functions lose the context of the outer function/method, and `this` is instead
bound to the global object. To remedy this, we can use an arrow function instead
of an anonymous function. Alternatively, we can also initialize a local variable
`self` in the main body of the method definition, and initialize to `this`.
*/