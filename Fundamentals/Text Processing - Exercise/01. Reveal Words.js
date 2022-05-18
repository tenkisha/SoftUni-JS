function revealWords(words, text) {
    words = words.split(', ')
  
    for(let word of words){
  
      let template = '*'.repeat(word.length)
      text = text.replace(template,word)
    }
    console.log(text)
  }

revealWords(
  "great",
  "softuni is ***** place for learning new programming languages"
);

console.log("-----");

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
