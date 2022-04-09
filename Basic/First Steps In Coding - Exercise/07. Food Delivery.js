function foodDelivery(input){

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veggieMenu = Number(input[2]);

    let sum = chickenMenu * 10.35 + fishMenu * 12.40 + veggieMenu * 8.15;
    

    let totalSum = sum + sum * 0.20;
    let sumWithDelivery = totalSum + 2.5;


    console.log(sumWithDelivery)

}

foodDelivery(['5','3','10'])