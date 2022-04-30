function reverseInPlace(array) {
  let reverse = "";
  for (let i = array.length - 1; i >= 0; i--) {
    reverse += array[i] + " ";
  }

  console.log(reverse);
}

reverseInPlace(["a", "b", "c", "d", "e"]);
