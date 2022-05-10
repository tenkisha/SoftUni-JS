function firstAndlast(input) {
  let first = input.shift();
  let last = input.pop();

  console.log(Number(first) + Number(last));
}

firstAndlast([20, 30, 40]);
