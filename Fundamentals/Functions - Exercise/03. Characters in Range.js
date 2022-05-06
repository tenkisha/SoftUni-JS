function charInRange(char1, char2) {
  let num1 = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
  let num2 = Math.max(char2.charCodeAt(0), char1.charCodeAt(0));

  let numRange = [];

  for (let i = num1 + 1; i < num2; i++) {
    numRange.push(String.fromCharCode(i));
  }

  console.log(numRange.join(" "));
}

charInRange("#", ":");
