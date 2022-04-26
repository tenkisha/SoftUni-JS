function amazingNumber(number) {
    let sum = 0;
    let numberAsString = number.toString();
  
    for (let char of numberAsString) {
      sum += Number(char);
    }
  
    let result = sum.toString().includes('9');
    console.log(result ? `${number} Amazing? True` : `${number} Amazing? False`)
  }

  amazingNumber(1233)