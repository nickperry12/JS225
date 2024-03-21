function makeCounterLogger(firstNum) {
  return function(secondNum) {
    if (firstNum < secondNum) {
      for (let i = firstNum; i <= secondNum; i += 1) {
        console.log(i);
      }
    } else if (firstNum > secondNum) {
      for (let i = firstNum; i >= secondNum; i -= 1) {
        console.log(i);
      } 
    } else {
        console.log(firstNum);
    }
  }
}

let countlog = makeCounterLogger(5);

countlog(8);
// 5
// 6
// 7
// 8
countlog(2);
// 5
// 4
// 3
// 2