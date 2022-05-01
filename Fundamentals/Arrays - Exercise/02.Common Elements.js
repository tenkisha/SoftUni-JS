function commonElements(arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    let firstList = arrayOne[i];

    for (let r = 0; r < arrayTwo.length; r++) {
      let secondList = arrayTwo[r];
      if (firstList === secondList) {
        console.log(secondList);
      }
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
