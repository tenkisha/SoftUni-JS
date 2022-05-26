function negPos(input) {
    let newArr = [];
  
    for (let el of input) {
      if (el < 0) {
        newArr.unshift(el);
      }
  
      if (el >= 0) {
        newArr.push(el);
      }
    }
  
    console.log(newArr.join(" "));
  }

  negPos([7, -2, 8, 9])