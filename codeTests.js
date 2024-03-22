let Foo = function() {
  this.a = 'hello';
  this.b = 'goodbye';
}

let bar = new Foo();

console.log(bar);
Foo.prototype.speak = function() {
  console.log('hello');
}
let qux = new Foo();

bar.speak();
qux.speak();