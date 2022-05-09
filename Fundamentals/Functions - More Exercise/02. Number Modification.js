function numberModification(number) {
  let sum = 0;
  let numToString = number.toString();
  for (let i = 0; i < numToString.length; i++) {
    sum += Number(numToString[i]);
  }
  sum /= numToString.length;

  while (sum < 5) {
    for (let j = 0; j < numToString.length; j++) {
      sum += Number(numToString[j]);
    }
    sum /= numToString.length;

    numToString += 9;
  }
  console.log(numToString);
}

numberModification(101)
