function fruit(fruit, grams, price) {
  let killo = grams / 1000;
  let money = killo * price;

  console.log(
    `I need $${money.toFixed(2)} to buy ${killo.toFixed(2)} kilograms ${fruit}.`
  );
}

fruit("orange", 2500, 1.8);
