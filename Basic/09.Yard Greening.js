function yardGreening(input){

    let yard = Number(input[0]);
    let prize = yard * 7.61;
 
    let discount = prize * 0.18;
    let endingPrize = prize - discount;


    console.log(`The final price is: ${endingPrize} lv.
The discount is: ${discount} lv.`)

}

yardGreening ("550");