function odd(input) {
  let newArr = [];

  for (let i = 0; i < input.length; i++) {
    if (i % 2 != 0) {
      newArr.push(input[i] * 2);
    }
  }

  return newArr.reverse();
}

odd([10, 15, 20, 25]);
