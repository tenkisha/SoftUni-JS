function gdc(a, b) {
  let firstNumber = a;
  let secondNumber = b;

  while (firstNumber != secondNumber) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  console.log(firstNumber);
}

gdc(2154, 458);
