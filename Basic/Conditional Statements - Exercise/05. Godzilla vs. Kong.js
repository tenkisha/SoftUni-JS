function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extraCount = Number(input[1]);
    let clothingPrice = Number(input[2]);

    let decoration = budget * 0.10;
    let totalClothingPrice = 0;

    if (extraCount > 150) {
        totalClothingPrice = extraCount * (clothingPrice * 0.90)
    } else {
        totalClothingPrice = extraCount * clothingPrice
    }

    let totalPrice = totalClothingPrice + decoration
    let diff = Math.abs(totalPrice - budget)
    if (totalPrice > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }
}

godzillaVsKong(['14','35','20'])