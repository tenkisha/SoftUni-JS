function cleverLily(input) {
  let ageOfLily = Number(input[0]);
  let priceWashMashine = Number(input[1]);
  let priceToy = Number(input[2]);

  let toys = 0;
  let saveMoney = 0;
  let money = 10;

  for (let i = 1; i <= ageOfLily; i++) {
    if (i % 2 !== 0) {
      toys++;
    } else {
      saveMoney += money;
      money += 10;
      saveMoney -= 1;
    }
  }
  saveMoney += toys * priceToy;
  let diff = Math.abs(saveMoney - priceWashMashine);

  if (saveMoney >= priceWashMashine) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else {
    console.log(`No! ${diff.toFixed(2)}`);
  }
}

cleverLily(["10", "170.00", "6"]);
