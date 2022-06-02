function subtract() {
  let firstNumber = document.getElementById("firstNumber");
  let firstNumAsNumber = Number(firstNumber.value);
  let secondNumber = document.getElementById("secondNumber");
  let secNumAsNumber = Number(secondNumber.value);

  let result = firstNumAsNumber - secNumAsNumber;
  let resultElement = document.getElementById("result");
  resultElement.textContent = result;
}
