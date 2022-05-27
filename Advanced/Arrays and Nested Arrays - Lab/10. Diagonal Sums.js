function diagonalSum(input) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
 
    for (let i = 0; i < input.length; i++) {
        mainDiagonal += input[i][i];
        secondaryDiagonal += input[i][input.length - 1 - i];
    }
    console.log(mainDiagonal, secondaryDiagonal);
}

diagonalSum([
  [20, 40],
  [10, 60],
]);
