function mathPower(n, x) {
  let sum = 1;
  for (let i = 1; i <= x; i++) {
    sum *= n;
  }
  console.log(sum);
}

mathPower(2, 8);
