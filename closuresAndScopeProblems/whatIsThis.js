// What Is This

// Read the following code carefully. What do you think is logged on line 7. Try
// to answer the question before you run the code.
const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);
/*
This code will log `NaN`. When `this` is used outside of a function or method,
the context it is bound to is the global object. If `this` is used within a
function, then it's context will depend on how that function is invoked. Since
there are no `firstName` or `lastName` properties on the global object,
`this.firstName` and `this.lastName` evaluate to `undefined`.
*/
