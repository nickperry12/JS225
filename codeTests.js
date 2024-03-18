let array = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2]
]

function transpose(array) {
  return array[0].map((col, colIdx) => {
    return array.map(row => row[colIdx])
  });
}

array = transpose(array);

console.log(array);

array.forEach((subarr, idx) => {
  array[idx] = subarr.map(item => {
    if (item) {
      return item;
    } else {
      return 0;
    }
  })
});

console.log(array);