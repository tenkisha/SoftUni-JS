function carWash(commands) {
  let value = 0;

  for (let i = 0; i < commands.length; i++) {
    let carWashes = commands[i];

    if (carWashes === "soap") {
      value += 10;
    } else if (carWashes === "water") {
      value += value * 0.2;
    } else if (carWashes === "vacuum cleaner") {
      value += value * 0.25;
    } else if (carWashes === "mud") {
      value -= value * 0.1;
    }

    for (let j = 0; j < carWashes; j++) {}
  }

  return `The car is ${value.toFixed(2)}% clean.`;
}

console.log(carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"]));
