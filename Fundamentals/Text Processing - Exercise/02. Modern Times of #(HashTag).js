function modernTimes(input) {
  input = input.split(" ");

  let arr = [];
  for (let word of input) {
    if (word.includes("#") && word.length > 1) {
      arr.push(word.substring(1));
    }
  }
  let final = [];
  for (let el of arr) {
    let array = el.split("");
    let arrayL = array.length;
    let flag = true;

    for (let i = 0; i < arrayL; i++) {
      let currentCode = array[i].charCodeAt(0);

      if (
        (currentCode < 97 || currentCode > 122) &&
        (currentCode < 65 || currentCode > 90)
      ) {
        flag = false;
      }
    }
    if (flag) {
      final.push(el);
    }
  }
  console.log(final.join("\n"));
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
