function condense(nums) {
  let condensed = [];
  let sum = 0;
  for (let n of nums) {
    condensed.push(n);
  }
  while (condensed.length > 1) {
    let temp = [];
    for (let i = 0; i < condensed.length - 1; i++) {
      temp.push(condensed[i] + condensed[i + 1]);
    }
    condensed = temp;
  }
  console.log(condensed[0]);
}

condense([5, 0, 4, 1, 2]);
