// Buggy Code 1

// The code below is expected to output the following when run:

// > const helloVictor = createGreeter('Victor');
// > helloVictor.greet('morning');
// = Good Morning Victor

// However, it instead results in an error. What is the problem with the code?
// Why isn't it producing the expected results?

/*
This issue is that we don't have the keyword `this` prepended to the propery
names within the `greet` function. Without prepending `this`, `morning`,
`afternoon` and `evening` are being treated as local variables, which have not
been initialized.

Further Exploration:

We can achieve the same output without prepending `this` to `name` within the
`greet` function due to the concept of closures. When the `createGreeter`
function is invoked, the value of the argument `name` that is passed in becomes
apart of the object's closure, giving it access to the value despite the
variable being garbage collected and the execution context of the function
disappearing.

Because the value of `name` is now apart of the Object's closure, it is
accessible directly anywhere within the object. This does not mean we are
accessing the property value of `name`. If we commented out the `name` property,
we would still get the same output; but if we tried to access the value of the
`name` property, we would get a returned value of `undefined`. 

Without the use of `this`, we're accessing the argument directly, and when we
use `this`, we're accessing the value of the `name` property.
*/

function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',

    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += this.morning + ' ' + name;
          break;
        case 'afternoon':
          msg += this.afternoon + ' ' + name;
          break;
        case 'evening':
          msg += this.evening + ' ' + name;
          break;
      }

      console.log(msg);
    },
  };
}

const helloVictor = createGreeter('Victor');
console.log(helloVictor.name);
helloVictor.greet('morning');
// Good Morning Victor