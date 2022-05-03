function calculator(a, b, operator) {
  if (operator === "multiply") {
    return a * b;
  } else if (operator === "divide") {
    return a / b;
  } else if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  }
}

console.log(calculator(5, 5, "multiply"));
