// Practice Problems: Mutating Objects

// 1. What will the code below output to the console?

let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message); // 'Hello from the function scope!'
console.log(message); // 'Hello from the global scope!'

// 2. What will the code below log to the console? What does this output
//    demonstrate in relation to the output of problem one?

let myObj = { message: 'Greetings from the global scope!' };

function funcTwo(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

funcTwo(myObj); // 'Greetings from the function scope!'

console.log(myObj.message); // 'Greetings from the function scope!'

// 3. What will the code below log to the console?

let messageTwo = 'Hello from the global scope!';

function funcThree() {
  messageTwo = 'Hello from the function scope!';
  console.log(messageTwo);
}

funcThree(); // 'Hello from the function scope!'
console.log(messageTwo); // 'Hello from the function scope!'

// 4. What will the code below log to the console?

let a = 10;
let obj = {
  a
}

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a); // false
console.log(newObj.a === obj.a); // true

// 5. Consider the below:

let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true

// If objects are mutable, why does the second to last line return false?
// Because we are not mutating the object, we are reassign the `animal` variable
// to a different object entirely, the property value of `warthog` no long
// references the same object as the variable `animal`.