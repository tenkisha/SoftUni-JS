function pass(input) {
  let userName = input[0];
  let password = input[1];

  let data = input[2];

  let index = 3;

  while (data !== password) {
    data = input[index];
    index++;
  }

  console.log(`Welcome ${userName}!`);
}

pass(["Nakov", "1234", "pass", "1324", "1234"]);
