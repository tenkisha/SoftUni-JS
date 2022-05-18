function countString(input, word) {
  let tokens = input.split(" ");

  let count = 0;

  for (let token of tokens) {
    if (token === word) {
      count++;
    }
  }

  console.log(count);
}

countString("This is a word and it also is a sentence", "is");
