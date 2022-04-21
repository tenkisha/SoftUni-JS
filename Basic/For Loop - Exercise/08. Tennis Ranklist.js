function tennisRanklist(input) {
  let index = 0;
  let tournaments = Number(input[index]);
  index++;
  let startpoint = Number(input[index]);
  index++;
  let wins = 0;
  let score = 0;
  for (let i = 0; i <= tournaments; i++) {
    let etap = input[index];
    index++;

    if (etap === "W") {
      wins++;
      score += 2000;
    } else if (etap === "F") {
      score += 1200;
    } else if (etap === "SF") {
      score += 720;
    }
  }

  let percentWins = (wins / tournaments) * 100;

  console.log(`Final points: ${score + startpoint}`);
  console.log(`Average points: ${Math.floor(score / tournaments)}`);
  console.log(`${percentWins.toFixed(2)}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
