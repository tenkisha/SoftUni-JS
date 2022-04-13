function worldRecord(input) {
  recordInSec = Number(input[0]);
  fieldInMetres = Number(input[1]);
  secForMeter = Number(input[2]);

  let secForFinish = fieldInMetres * secForMeter;
  let ivanAddTime = Math.floor(fieldInMetres / 15) * 12.5;

  let allTime = secForFinish + ivanAddTime;

  let missingSec = allTime - recordInSec;

  if (allTime < recordInSec) {
    console.log(
      `Yes, he succeeded! The new world record is ${allTime.toFixed(
        2
      )} seconds.`
    );
  } else if (allTime >= recordInSec) {
    console.log(
      `No, he failed! He was ${missingSec.toFixed(2)} seconds slower.`
    );
  }
}

worldRecord(["10464", "1500", "20"]);
