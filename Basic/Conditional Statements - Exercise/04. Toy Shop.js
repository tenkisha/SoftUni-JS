function toyShop(input) {
    price = Number(input[0]);
    puzzle = Number(input[1]);
    doll = Number(input[2]);
    bear = Number(input[3]);
    minion = Number(input[4]);
    truck = Number(input[5]);

    let toyCount = puzzle + doll + bear + minion + truck;
    let toyPrice = puzzle * 2.60 + doll * 3 + bear * 4.10 + minion * 8.20 + truck * 2;

    if (toyCount >= 50) {
        toyPrice = toyPrice * 0.75
    }
    toyPrice = toyPrice * 0.90

    let diff = Math.abs(toyPrice - price)
    if (toyPrice >= price) {
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)

}

toyShop(['4','12','13','7','8','9'])