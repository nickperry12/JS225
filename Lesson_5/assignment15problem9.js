class Animal {
  constructor(name, age, status, species, legCount) {
    this.name = name;
    this.age = age;
    this.status = status;
    this.species = species;
    this.legCount = legCount;
  }

  introduce() {
    return `Hello, my name is ${this.name}` + 
            ` and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status, legCount) {
    super(name, age, status, 'cat', legCount);
  }

  introduce() {
    return `${super.introduce()} Meow meow!`
  }
}

class Dog extends Animal {
  constructor(name, age, status, legCount, master) {
    super(name, age, status, 'dog', legCount);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof woof!`;
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true

let dog = new Dog('Tommy', 3, 'happy', 4, 'Nick');
console.log(dog.greetMaster());
console.log(dog.introduce());