function solve(input) {
  let regexWords = /(\w+)/g;
  let regexMatches = input.match(regexWords);
  let arrUpperCase = [];

  for (let i = 0; i < regexMatches.length; i++) {
    arrUpperCase.push(regexMatches[i].toUpperCase());
  }

  console.log(arrUpperCase.join(", "));
}

solve("Hi, how are you?");
