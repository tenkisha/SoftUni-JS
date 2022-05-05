function printElement(input) {
  let count = input.pop();
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (i % count == 0) {
      arr.push(input[i]);
    }
  }

  console.log(arr.join(' '));
}

printElement(["5", "20", "31", "4", "20", "2"]);
printElement(["dsa", "asd", "test", "test", "2"]);
