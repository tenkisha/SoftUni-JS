function sumDigits(input) {
  let sum = 0;
  let numberAsString = input.toString();

  for (let char of numberAsString) {
    sum += Number(char);
  }
  console.log(sum);
}

sumDigits(245678)
