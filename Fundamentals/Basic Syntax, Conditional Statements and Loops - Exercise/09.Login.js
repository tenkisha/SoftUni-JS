function login(input) {
  let userName = input.shift();
  let counter = 0;
  for (let el of input) {
    el = el.split("").reverse().join("");

    counter++;
    if (counter == 4) {
      console.log(`User ${userName} blocked!`);
      break;
    }
    if (el == userName) {
      console.log(`User ${userName} logged in.`);
    } else {
      console.log(`Incorrect password. Try again.`);
    }
  }
}

login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
