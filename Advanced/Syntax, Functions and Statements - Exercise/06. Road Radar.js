function roadRadar(speed, place) {
  let limit = 0;
  let status;
  let difference = 0;

  if (place == "motorway" && speed <= 130) {
    limit = 130;
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  } else if (place == "motorway" && speed > 130) {
    limit = 130;
    if (difference <= 20) {
      status = "speeding";
    } else if (difference <= 40) {
      status = "excessive speeding";
    } else if (difference > 40) {
      status = "reckless driving";
    }
    difference = speed - limit;
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
    );
  }

  if (place == "interstate" && speed <= 90) {
    limit = 90;
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  } else if (place == "interstate" && speed > 90) {
    limit = 90;
    difference = speed - limit;
    if (difference <= 20) {
      status = "speeding";
    } else if (difference > 20 && difference <= 40) {
      status = "excessive speeding";
    } else if (difference > 40) {
      status = "reckless driving";
    }
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
    );
  }

  if (place == "city" && speed <= 50) {
    limit = 50;
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  } else if (place == "city" && speed > 50) {
    limit = 50;
    difference = speed - limit;
    if (difference <= 20) {
      status = "speeding";
    } else if (difference > 20 && difference <= 40) {
      status = "excessive speeding";
    } else if (difference > 40) {
      status = "reckless driving";
    }
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
    );
  }

  if (place == "residential" && speed <= 20) {
    limit = 20;
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  } else if (place == "residential" && speed > 20) {
    limit = 20;
    difference = speed - limit;
    if (difference <= 20) {
      status = "speeding";
    } else if (difference > 20 && difference <= 40) {
      status = "excessive speeding";
    } else if (difference > 40) {
      status = "reckless driving";
    }
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
    );
  }
}

roadRadar(21, "residential");
