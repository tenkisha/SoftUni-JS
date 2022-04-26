function printAndSum(n1, n2) {
  let counter = 0;
  let sum = 0;
  arr = [];
  for (let i = n1; i <= n2; i++) {
    sum += i;
    arr.push(i);
    counter++;
  }
  console.log(arr.join(" "));
  console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
