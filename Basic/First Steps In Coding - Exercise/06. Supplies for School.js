function suppliesForSchool(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);

    let sumPens = pens * 5.80;
    let sumMarkers = markers * 7.20;
    let sumLiters = liters * 1.20;
    
    let moneys = sumPens + sumMarkers + sumLiters;
    let moneysWithDiscount = moneys - (moneys * 0.25);



    console.log(moneysWithDiscount)
}

suppliesForSchool(['2'
    ,'3'
    ,'4'
    ,'25'])