function hoursPlus15(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let hoursInMinutes = hours * 60 + minutes;
  hoursInMinutes = hoursInMinutes + 15;

  let h = Math.floor(hoursInMinutes / 60);
  let m = hoursInMinutes % 60;

  if (h >= 24) {
    h = 0;
  }
  if (m < 10) {
    console.log(`${h}:0${m}`);
  } else console.log(`${h}:${m}`);
}

hoursPlus15(["12", "49"]);
