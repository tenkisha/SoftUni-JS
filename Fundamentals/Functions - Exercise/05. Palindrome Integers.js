function palindrome(array) {
  for (let i = 0; i < array.length; i++) {
    arrayToNum = array[i];

    for (let j = 0; j < arrayToNum.length; j++) {}

    let reversedNum = Number(
      arrayToNum.toString().split("").reverse().join("")
    );

    if (arrayToNum === reversedNum) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

palindrome([123,323,421,121]);
