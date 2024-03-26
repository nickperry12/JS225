// Consider the following classes:
// Refactor these classes so they all use a common superclass, and inherit
// behavior as needed.
class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }

  getWheels() {
    return this.wheels;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }

  info() {
    return `${super.info()}, ${this.payload}lbs`;
  }
}

let truck = new Truck('Dodge', 'Ram', 10000)
let car = new Car('Ford', 'Fusion');
let motorcycle = new Motorcycle('Harley Davidson', 'XML1000');

console.log(truck.info());
console.log(car.info());
console.log(motorcycle.info());