function trekkingMania(input) {
  let index = 0;
  let numOfGroups = Number(input[index]);
  index++;
  let totalPeopleInGroups = 0;

  let musalaCount = 0;
  let monblanCount = 0;
  let kilimandjCount = 0;
  let k2Count = 0;
  let everestCount = 0;

  for (let i = 0; i < numOfGroups; i++) {
    let numOfPeopleInGroups = Number(input[index]);
    index++;

    totalPeopleInGroups += numOfPeopleInGroups;

    if (numOfPeopleInGroups <= 5) {
      musalaCount += numOfPeopleInGroups;
    } else if (numOfPeopleInGroups > 5 && numOfPeopleInGroups <= 12) {
      monblanCount += numOfPeopleInGroups;
    } else if (numOfPeopleInGroups > 12 && numOfPeopleInGroups <= 25) {
      kilimandjCount += numOfPeopleInGroups;
    } else if (numOfPeopleInGroups > 25 && numOfPeopleInGroups <= 40) {
      k2Count += numOfPeopleInGroups;
    } else {
      everestCount += numOfPeopleInGroups;
    }
  }
  let percMusala = (musalaCount / totalPeopleInGroups) * 100;
  let percMonblan = (monblanCount / totalPeopleInGroups) * 100;
  let percKilimandjaro = (kilimandjCount / totalPeopleInGroups) * 100;
  let percK2 = (k2Count / totalPeopleInGroups) * 100;
  let percEverest = (everestCount / totalPeopleInGroups) * 100;

  console.log(`${percMusala.toFixed(2)}%`);
  console.log(`${percMonblan.toFixed(2)}%`);
  console.log(`${percKilimandjaro.toFixed(2)}%`);
  console.log(`${percK2.toFixed(2)}%`);
  console.log(`${percEverest.toFixed(2)}%`);
}

trekkingMania(["10", "10", "5", "1", "100", "12", "26"]);
