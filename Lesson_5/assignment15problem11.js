// What will the following code log?
class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData()); // Logs "ByeBye"
console.log(thing.dupData()); // Logs "HelloHello"

/*
Line 17 invokes the static method `dupData`. Static methods are methods that are
defined on the constructor itself.

Line 18 invokes the `dupData` instance method on the `thing` object.
*/