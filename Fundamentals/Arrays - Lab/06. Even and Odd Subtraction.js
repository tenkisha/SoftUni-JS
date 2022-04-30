function evenAndOdds(array) {
  let sumEven = 0;
  let sumOdds = 0;

  for (let i = 0; i <= array.length; i++) {}
  for (let num of array) {
    if (num % 2 == 0) {
      sumEven += num;
    } else {
      sumOdds += num;
    }
  }

  let result = sumEven - sumOdds;
  console.log(result);
}

evenAndOdds([3,5,7,9]);
