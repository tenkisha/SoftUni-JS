function processOddNumbers(arr) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    let oddNum = arr[i];
    if (i % 2 !== 0) {
      arr2.push(oddNum * 2);
    }
  }

  console.log(arr2.reverse().join(" "));
}

processOddNumbers([10, 15, 20, 25])
