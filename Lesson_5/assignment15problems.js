// Problems 1 - 8 from Assignment 15

class Cat {
  constructor(name = 'Kitty') {
    this.name = name;
  }

  greet() {
    console.log(`Meow! My name is ${this.name}!`);
  }

  rename(newName) {
    this.name = newName;
  }

  static genericGreeting() {
    console.log('Hello! I\'m a Cat!')
  }
}

let kitty = new Cat("Muffin-paws");
kitty.greet();
kitty.rename('Pepsi');
console.log(kitty.name);
Cat.genericGreeting();

class Rectangle {
  constructor(width = 0, length = 0) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  getArea() {
    return Math.pow(5, 2);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

class Cat2 {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat2.prototype);
console.log(fakeCat instanceof Cat2); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat3 extends Pet {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  info() {
    return (`My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`)
  }
}

let pudding = new Cat3('Pudding', 7, 'black and white');
let butterscotch = new Cat3('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());

// Expected Output:

// My cat Pudding is 7 years old and has black and white fur.
// My cat Butterscotch is 10 years old and has tan and white fur.