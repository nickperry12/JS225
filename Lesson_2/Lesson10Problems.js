// Lesson 10 Problems - Functions as Object Factories

// In these problems we'll be developing a factory function for object
// representing countries.

// 1. Consider the code below:

// let chile = {
//   name: 'The Republic of Chile',
//   continent: 'South America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// let canada = {
//   name: 'Canada',
//   continent: 'North America',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// let southAfrica = {
//   name: 'The Republic of South Africa',
//   continent: 'Africa',
//   getDescription() {
//     return this.name + ' is located in ' + this.continent + '.';
//   },
// };

// Think about what is necessary and unnecessary in this code. Where is there
// duplication?

/*
There is duplication in the properties of each Object. They all share the same
properties but have different values for each property. The properties are
necessary for each one, but we can absract away the values and generate those
using a function. We don't need to instantiate each object on it's own and can
instead us a function that generates it, passing in arguments to set the values
of each object.
*/

// 2. Given our observations about the code above, implement a factory function
//    for our country objects following the template laid out below:

const makeCountry = function generateCountryObject(name, continent, visited = false) {
  let country = {
    name,
    continent,
    visited: false,
    getDescription() {
      let visitStatus = this.visited ?
                        `I have visited ${this.name}` : 
                        `I haven't visited ${this.name}`;

      return `${this.name} is located in ${this.continent}. ${visitStatus}.`;
    },

    visitCountry() {
      this.visited = true;
    },
  }

  return country;
}

let chile = makeCountry('The Republic of Chile', 'South America');
let canada = makeCountry('Canada', 'North America');
let southAfrica = makeCountry('The Republic of South Africa', 'Africa');

console.log(chile.getDescription());       // "The Republic of Chile is located in South America."
console.log(canada.getDescription());      // "Canada is located in North America."
console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."

// 3. We've decided that we want to track which countries we've visited, and
//    which we haven't. Alter the factory function so that the object it returns
//    includes a property visited with a value of false.


// 4. This situation seems a bit problematic, though. Suppose we want to add a
//    country that we've already visited. Alter the factory function to use an
//    optional visited parameter with a default value of false.

// 5. Let's add a method to our country objects that lets us visit them.
//    Implement a method visitCountry that sets the visited property to true.

// 6. Finally, let's update our getDescription function to reflect the visited
//    data. Assuming that canada.visited is false, your code should look like
//    this:

console.log(canada.getDescription()); // "Canada is located in North America. I haven't visited Canada."
canada.visitCountry();
console.log(canada.getDescription()); // "Canada is located in North America. I have visited Canada."