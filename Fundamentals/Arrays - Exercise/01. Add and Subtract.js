function addAndSubtract(array) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNumber = array[i];
    let newNumber = 0;

    if (currentNumber % 2 == 0) {
      newNumber = currentNumber + i;
      array[i] = newNumber;
    } else {
      newNumber = currentNumber - i;
      array[i] = newNumber;
    }
    sum1 += currentNumber;
    sum2 += newNumber;
  }
  console.log(array);
  console.log(sum1);
  console.log(sum2);
}

addAndSubtract([5, 15, 23, 56, 35]);
