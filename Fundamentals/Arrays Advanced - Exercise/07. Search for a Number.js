function searchNumber(numbers, sortArray) {
  let newArray = [];

  let sum = 0;

  for (let i = 0; i < sortArray[0]; i++) {
    newArray.push(numbers[i]);
  }

  newArray.splice(0, sortArray[1]);

  for (let num of newArray) {
    if (num == sortArray[2]) {
      sum++;
    }
  }

  console.log(`Number ${sortArray[2]} occurs ${sum} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
