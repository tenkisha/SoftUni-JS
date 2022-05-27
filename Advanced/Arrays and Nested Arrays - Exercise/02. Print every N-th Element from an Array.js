function printEvery(input, num) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (i % num == 0) {
      arr.push(input[i]);
    }
  }

  return arr;
}

printEvery(["1", "2", "3", "4", "5"], 6);
