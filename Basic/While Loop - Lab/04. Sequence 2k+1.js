function sequence(input) {
  let num = Number(input);
  let k = 1;

  while (k <= num) {
    console.log(k);
    k = k * 2 + 1;
  }
}

sequence(3);
