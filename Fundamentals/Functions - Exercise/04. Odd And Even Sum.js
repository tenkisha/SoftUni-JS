function oddAndEvenSum(number) {
  let numToString = number.toString();
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 0; i < numToString.length; i++) {
    numberToString = numToString[i];

    if (numberToString % 2 === 0) {
      evenSum += Number(numberToString);
    } else if (numberToString % 2 !== 0) {
      oddSum += Number(numberToString);
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum} `);
}

oddAndEvenSum(1000435);
