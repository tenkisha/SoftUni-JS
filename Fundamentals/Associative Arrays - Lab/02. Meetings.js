function meetings(input) {
  let week = {};

  for (let line of input) {
    let tokens = line.split(" ");

    let day = tokens[0];
    let name = tokens[1];

    if (week.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
      continue;
    }
    week[day] = name;

    console.log(`Scheduled for ${day}`);
  }

  for (let element in week) {
    console.log(`${element} -> ${week[element]}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
