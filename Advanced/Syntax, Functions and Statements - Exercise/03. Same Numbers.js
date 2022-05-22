function sameNumber(input) {
  input = String(input);
  let count = 0;
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    counter += Number(input[i]);
    let firstDigit = input[0];
    if (input[i] == firstDigit) {
      count++;
    }
  }

  if (count == input.length) {
    console.log("true");
    console.log(counter);
  } else {
    console.log("false");
    console.log(counter);
  }
}

sameNumber(2222222);
