// Testing Object Equality

// In JavaScript, comparing two objects either with == or === checks for object
// identity. In other words, the comparison evaluates as true if it's the same
// object on either side of == or ===. This is a limitation, in a sense, because
// sometimes we need to check if two objects have the same key/value pairs.
// JavaScript doesn't give us a way to do that.

// Write a function objectsEqual that accepts two object arguments and returns
// true or false depending on whether the objects have the same key/value pairs.

/*
We want to create a function thatt accepts two objects as arguments, and returns
a boolean -- `true` if both objects are equal, i.e., they have the same
key-value pairs, or `false` if they do not.

Rules:
1. They must contain the same key-value pairs
2. They do not need to be in the same order as Objects are not ordered as they
   are not iterable.
3. If the amount of key-val pairs in each object is not equal to one another,
   return `false`.

-- Modeling:

I: {a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'} O: true

We can get a list of entries from each object
=>

obj1
[
  [a, 'foo'], [b, 'bar'],
]

obj2
[
  [b, 'bar'], [a, 'foo']
]

Sort the entries by the string at the first index of each entry

obj2
=>
[
  [a, bar], [b, foo]
]

Next we want to iterate through each object and compare the elements at each
index
- a `for` loop might be best for this as we can use the current num on iteration
  to check both indices of each entry

-- Algorithm:

Initialize `entriesA` to the entries of `obj1` Initialize `entriesB` to the
entries of `obj2`
- Sort the entries by the key at index 0

If the length of `entriesA` and `entriesB` are not the same
- Return `false`

Iterate through the nums of `0` to the length of `entriesA` minus 1
- Check to see if the values at index 0 and 1 at the index `num` position of
  `entriesA` and `entriesB` are the same
  - If they are not, return `false`
- If iteration completes, return `true`

*/
function objectsEqual(obj1, obj2) {
  let entriesA = Object.entries(obj1).sort();
  let entriesB = Object.entries(obj2).sort();

  if (entriesA.length !== entriesB.length) return false;

  for (let i = 0; i < entriesA.length; i += 1) {
    if (entriesA[i][0] !== entriesB[i][0] ||
        entriesA[i][1] !== entriesB[i][1]) {
          return false;
        }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'bar', b: 'foo'}))   // false
