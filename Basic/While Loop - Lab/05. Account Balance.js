function accBalance(input) {
  let sum = 0;
  let index = 0;
  while (input[index] != "NoMoreMoney") {
    if (input[index] != "NoMoreMoney") {
      sum += Number(input[index]);
      let fin = input[index];
      console.log(`Increase: ${fin}`);
    }

    if (input[index] < 0) {
      console.log(`Invalid operation!`);
      console.log(sum.toFixed(2));
    }
    index++;
  }
  console.log(`Total: ${sum.toFixed(2)}`);
}

accBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
