// Write a function named `makeMultipleLister` that, when invoked and passed a
// number, returns a function that logs every positive integer multiple of that
// number less than 100. Usage looks like this:

function makeMultipleLister(multiple) {
  return function() {
    for (let i = multiple; i < 100; i += multiple) {
      console.log(i);
    }
  }
}

let lister = makeMultipleLister(13);
lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91

let secondLister = makeMultipleLister(20);
secondLister();