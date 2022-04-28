function calculator(num1, operator, num2) {
  let sum = 0;

  switch (operator) {
    case "+":
      if (operator == "+") {
        console.log((sum = (num1 + num2).toFixed(2)));
        break;
      }
    case "-":
      if (operator == "-") {
        console.log((sum = (num1 - num2).toFixed(2)));
        break;
      }
    case "/":
      if (operator == "/") {
        console.log((sum = (num1 / num2).toFixed(2)));
        break;
      }
    case "*":
      if (operator == "*") {
        console.log((sum = (num1 * num2).toFixed(2)));
      }
  }
}

calculator(5, "+", 10);
