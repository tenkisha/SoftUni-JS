function basketballEquipment(input){
    let trainers = Number(input[0]);

    let suit = trainers * 0.60;
    let equipment = suit * 0.80;
    let ball = equipment / 4;
    let accessories = ball / 5;
    let basketballEquipment = trainers + suit + equipment + accessories + ball;
   
    console.log(basketballEquipment)
}

basketballEquipment('365')