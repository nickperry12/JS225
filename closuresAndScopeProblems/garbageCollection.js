// Garbage Collection

// Read the following code carefully. Will the JavaScript garbage collection
// mechanism garbage collect the array assigned to the variable array after the
// function pushIt is called on line 11?
function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
console.log(pushIt());
// more code
/*
No, it won't be eligible for garbage collection as the closure that the array
is apart of still exists. As long as that closure exists, the array will not
be eligible to be garbage collected.
*/