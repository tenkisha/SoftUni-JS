function solve(arr, num) {
  let firstL = arr.length;
  let newArr = [];

  for (i = 0; i < firstL; i++) {
    let numFirst = arr[i];

    for (j = i + 1; j < firstL; j++) {
      let numSecond = arr[j];
      newArr = [];
      let result = numFirst + numSecond;
      if (result === num) {
        newArr.push(numFirst + " " + numSecond);
        console.log(newArr.join(" "));
      }
    }
  }
}

solve([1, 7, 6, 2, 19, 23], 8);
