function literature(input) {
  let pages = Number(input[0]);
  let pagesForHour = Number(input[1]);
  let days = Number(input[2]);

  let hoursForReading = pages / pagesForHour;
  let hoursForDay = hoursForReading / days;

  console.log(hoursForDay);
}

literature(["212", "20", "2"]);
