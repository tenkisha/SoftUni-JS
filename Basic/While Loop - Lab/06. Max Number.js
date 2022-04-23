function maxNumber(input) {
    let maxNumber = 0;
    let index = 0
    while(input[index] != 'Stop'){
     let n = Number(input[index])
     if(n > maxNumber){
         maxNumber = n
     }
     index++
    }
    console.log(maxNumber)
    
}

maxNumber(['100', '99', '80', '70', "Stop"]);
