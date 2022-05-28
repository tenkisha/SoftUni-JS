function listOfNames(input) {
  let sum = 0;

  input = input.sort();
  for (let el of input) {
    sum += 1;
    console.log(`${sum}.${el}`);
  }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
