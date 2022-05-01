function rotation(array, numOfRotation) {
  for (let i = 0; i < numOfRotation; i++) {
    let firstElement = array[0];

    for (let j = 0; j < array.length - 1; j++) {
      array[j] = array[j + 1];
    }
    let lastIndex = array.length - 1;
    array[lastIndex] = firstElement;
  }
  console.log(array.join(" "));
}

rotation([32, 21, 61, 1], 4);
