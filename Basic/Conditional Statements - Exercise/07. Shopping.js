function shopping(input) {
    budget = Number(input[0]);
    videocards = Number(input[1]);
    procesors = Number(input[2]);
    ramMemory = Number(input[3]);

    let priceVideocard = videocards * 250;
    let priceProcesor = priceVideocard * 0.35;

    let countProcesors = procesors * priceProcesor;

    let priceRam = priceVideocard * 0.10;
    let countRam = ramMemory * priceRam;

    let allSum = priceVideocard + countProcesors + countRam;

    if(videocards > procesors){
        allSum = allSum * 0.85
    }
    let leftSum = budget - allSum;
    let needMoney =Math.abs(budget - allSum);
    if(allSum <= budget){
        console.log(`You have ${leftSum.toFixed(2)} leva left!`)
    } else{
        console.log(`Not enough money! You need ${needMoney.toFixed(2)} leva more!`)
    }

}

shopping(['100','2','4','8'])