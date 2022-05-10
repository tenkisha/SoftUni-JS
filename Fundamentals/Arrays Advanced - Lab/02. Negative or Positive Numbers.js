function posNeg(numbers) {
  let result = [];

  for (let element of numbers) {
    element = Number(element);

    if (element < 0) {
      result.unshift(element);
    } else {
      result.push(element);
    }
  }

  for (let element of result) {
    console.log(element);
  }
}

posNeg([7, -2, 8, 9]);
