function skiTrip(input) {
  let days = Number(input[0]);
  let typeOfRoom = input[1];
  let evaluation = input[2];

  let priceNight = 0;

  if (typeOfRoom === "room for one person") {
    if (days < 10 || days >= 10) {
      priceNight = (days - 1) * 18;
    }
  } else if (typeOfRoom === "apartment") {
    if (days < 10) {
      priceNight = (days - 1) * 25 * 0.7;
    } else if (days >= 10 && days <= 15) {
      priceNight = (days - 1) * 25 * 0.65;
    } else if (days > 15) {
      priceNight = (days - 1) * 25 * 0.5;
    }
  } else if (typeOfRoom === "president apartment") {
    if (days < 10) {
      priceNight = (days - 1) * 35 * 0.9;
    } else if (days >= 10 && days <= 15) {
      priceNight = (days - 1) * 35 * 0.85;
    } else if (days > 15) {
      priceNight = (days - 1) * 35 * 0.8;
    }
  }
  if (evaluation === "positive") {
    priceNight = priceNight + priceNight * 0.25;
  } else if (evaluation === "negative") {
    priceNight = priceNight - priceNight * 0.1;
  }
  console.log(priceNight.toFixed(2));
}

skiTrip(["14", "apartment", "positive"]);
