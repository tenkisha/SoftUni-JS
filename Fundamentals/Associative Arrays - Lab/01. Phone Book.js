function phoneBook(input) {
  let obj = {};
  for (let element of input) {
    let line = element.split(" ");
    let name = line[0];
    let phone = line[1];

    obj[name] = phone;
  }

  for (let name in obj) {
    console.log(`${name} -> ${obj[name]}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
