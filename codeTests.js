function Dog(name, weight, breed) {
  this.name = name;
  this.weight = weight;
  this.breed = breed;
  this.bark =  function() {
    console.log('Woof');
  }
}

Dog.prototype.whine = function() {
  console.log('Whimpers!');
}

let maxi = Dog('Maxi', 32, 'Yorkie');
console.log(maxi);
