function integer(firstNumber, secondNumber, thirdNumber) {
  let sum = firstNumber + secondNumber + thirdNumber;
  if (sum % 1 == 0) {
    console.log(`${sum} - Integer`);
  } else if (sum % 1 !== 0) {
    console.log(`${sum} - Float`);
  }
}
integer(9, 100, 1.1);
