// Buggy Code 2

// A grocery store uses a JavaScript function to calculate discounts on various
// items. They are testing out various percentage discounts but are getting
// unexpected results. Go over the code, and identify the reason why they aren't
// getting the expected discounted prices from the function. Then, modify the
// code so that it produces the correct results.

const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    let discountedPrice = this.price - discount;

    return discountedPrice;
  },
};

console.log(item.discount(20));   // should return 40
// 40
console.log(item.discount(50));   // should return 25
// 20
console.log(item.discount(25));   // should return 37.5
// 15

/*
The issue is we are reassign the value of the `price` property with each call of
the `discount` method -- instead of subtracting the discount from the original
price, its being subtracted from the new value of `price` after each call. To
fix this issue, we can initialize a `discountedPrice` variable, and assign it to
the value of `price` minus `discount`. 
*/