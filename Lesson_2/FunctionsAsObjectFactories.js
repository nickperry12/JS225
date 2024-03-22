// Practice Problems for Lesson 9 - Functions as Object Factories

// 1. Write a `makeCar` function as shown above.

const makeCar = function createCarObject(accelerationRate, brakeRate) {
  let car = {
    speed: 0,
    accelerationRate,
    brakeRate,

    accelerate() {
      this.speed += this.accelerationRate;
    },

    brake() {
      this.speed = this.speed - this.brakeRate < 0 ? 0 : this.speed - this.brakeRate;
    }
  }

  return car;
}

// 2. Use your new definition of makeCar to create a hatchback car whose rate of
//    acceleration is 9 mph/s.

let hatchBack = makeCar(9, 6);

// 3. Our application now needs to handle braking to slow down. Extend the code
//    from problem 1 to handle specifying a braking rate for each car. Also, add
//    a method that tells the car to apply the brakes for one second. It should
//    work like this:

// > let sedan = makeCar(8, 6);
// > sedan.accelerate();
// > sedan.speed;
// = 8
// > sedan.brake();
// > sedan.speed;
// = 2
// > sedan.brake();
// > sedan.speed;
// = 0

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);