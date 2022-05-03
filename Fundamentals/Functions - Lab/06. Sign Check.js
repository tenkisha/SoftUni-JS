function signCheck(n1, n2, n3) {
  let sum = n1 * n2 * n3;

  if (sum > 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}

console.log(signCheck(5, 12, -15));
