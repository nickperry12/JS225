// Lesson 11 - Object Orientation

// In these problems we'll be building an object-oriented inventory management
// system.

// 1. Suppose we want to use code to keep track of products in our hardware
//    store's inventory. A first stab might look something like this:

let scissorsId = 0;
let scissorsName = 'Scissors';
let scissorsStock = 8;
let scissorsPrice = 10;

let drillId = 1;
let drillName = 'Cordless Drill';
let drillStock = 15;
let drillPrice = 45;

// This code presents a number of problems, however. What if we want to add
// another kind of drill? Given what we've learned about object orientation in
// the previous assignment, how could we use objects to organize these two
// groups of data?
/*
We can create an "object factory" type of function that produces drill objects.
This encapsulates the properties and behaviors of the drill into an object.
*/

const createProduct = function createProductObject(id, name, stock, price) {
  let drill = {
    id,
    name,
    stock,
    price,

    setPrice(price) {
      if (price < 0) {
        console.log("Invalid price. Please enter a non-negative number.");
        return;
      }

      this.price = price;
    },

    describe() {
      return `ID: ${this.id}\n` +
             `Name: ${this.name}\n` +
             `Stock: ${this.stock}\n` +
             `Price: $${this.price}`;
    }
  }

  return drill;
}

let products = {
  products: [],

  listProducts() {
    this.products.forEach(product => console.log(product));
  },

  addToProducts(product) {
    this.products.push(product);
  }
}

// 2. Our new organization also makes it easier to write functions dealing with
//    the products, because we can now take advantage of conventions in the
//    objects' data. Create a function that takes one of our product objects as
//    an argument, and sets the object's price to a non-negative number of our
//    choosing, passed in as a second argument. If the new price is negative,
//    alert the user that the new price is invalid.

// See above

// 3. It would also be useful to have the ability to output descriptions of our
//    product objects. Implement such a function following the example below:

// See above

let ultraDrill = createProduct(1, "Ultra Drill", 5, 79.99);
console.log(ultraDrill.describe());

// 4. We want our code to take an object-oriented approach to keeping track of
//    the products, and although the functions we just wrote work fine, since
//    they are manipulating data in the objects, we should place them in the
//    objects themselves. Rewrite the code such that the functions
//    describeProduct and setProductPrice become methods describe and setPrice
//    on both our scissors and drill objects.

// See above

// 5. This solution has brought us closer to our object-oriented ideal, but has
//    also introduced some inefficiency, insofar as our setPrice and describe
//    methods are duplicated in each object, and we will have to type out this
//    code for each new object we want to create. One solution to this problem
//    is to stop manually creating each object, and instead use a factory
//    function to generate them. Create a new function createProduct which takes
//    arguments for id, name, stock, and price and also adds setPrice and
//    describe to the new object.

// See above

// 6. Finally, remove the scissors and drill object-literal object creations
//    from the code, and recreate these objects using our createProduct factory
//    function, along with two or three more products of your choosing

let scissors = createProduct(2, "Scissors", 30, 5.99);
let drill = createProduct(3, "Drill Bit", 100, 1.99);
let waterBottle = createProduct(4, "Water Bottle", 25, 10.99);
let officeChair = createProduct(5, "Office Chair", 10, 99.99);

products.addToProducts(scissors);
products.addToProducts(drill);
products.addToProducts(waterBottle);
products.addToProducts(officeChair);

products.listProducts();