function maxSequenceOfEqualElements(arr) {
  let brCount = 0;
  let firstSequence = [];
  let brFirstSequence = 0;

  for (let i = 0; i < arr.length; i++) {
    brCount = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        brCount++;
      } else {
        break;
      }
    }
    if (brFirstSequence < brCount) {
      brFirstSequence = brCount;
      firstSequence[0] = arr[i];
    }
  }
  let curSec = firstSequence[0];
  firstSequence = [];
  for (let i = 1; i <= brFirstSequence; i++) {
    firstSequence.push(curSec);
  }
  console.log(firstSequence.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
