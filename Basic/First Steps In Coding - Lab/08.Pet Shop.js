function petShop(input){
    
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let dogFoodPrize = dogFood * 2.50;
    let catFoodPrize = catFood * 4;
    let totall = dogFoodPrize + catFoodPrize;

    console.log(`${totall} lv`)


}

petShop(['5','4'])