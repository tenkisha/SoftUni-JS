function substring(words, text) {
  let arr = text.split(" ");
  let newaArr = [];

  for (let word of arr) {
    let lowerWord = word.toLocaleLowerCase();
    newaArr.push(lowerWord);
  }

  if (newaArr.includes(words)) {
    console.log(words);
  } else if (!newaArr.includes(words)) {
    console.log(`${words} not found!`);
  }
}

substring("javascript", "JavaScript is the best programming language");
