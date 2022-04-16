function cinema(input){
    let typeProject = input[0];
    let countRows = Number(input[1]);
    let countColumns = Number(input[2]);

    let income = 0

     if(typeProject === "Premiere"){
         income = countRows * countColumns * 12;
     }
     else if(typeProject === "Normal"){
         income = countRows * countColumns * 7.50;
     }
     else if(typeProject === "Discount"){
         income = countRows * countColumns * 5;
     }
     console.log(`${income.toFixed(2)} leva`)
}

cinema(['Premiere','4','5'])