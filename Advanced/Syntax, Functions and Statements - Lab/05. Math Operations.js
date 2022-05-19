function mathOperation(num1, num2, operator) {
  let result = 0;

  if (operator == "+") {
    console.log((result = num1 + num2));
  } else if (operator == "-") {
    console.log((result = num1 - num2));
  } else if (operator == "*") {
    console.log((result = num1 * num2));
  } else if (operator == "/") {
    console.log((result = num1 / num2));
  } else if (operator == "%") {
    console.log((result = num1 % num2));
  } else if (operator == "**") {
    console.log((result = num1 ** num2));
  }
}

mathOperation(1, 9, "*");
