function mergeArrays(arr1, arr2) {
  let resultList = [];
  for (let i = 0; i < arr1.length; i++) {
    let firstListElement = arr1[i];
    let secondListElement = arr2[i];

    if (i % 2 === 0) {
      let sum = Number(firstListElement) + Number(secondListElement);
      resultList.push(sum);
    } else {
      let result = firstListElement + secondListElement;
      resultList.push(result);
    }
  }

  let resultDocument = resultList.join(" - ");
  console.log(resultDocument);
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
