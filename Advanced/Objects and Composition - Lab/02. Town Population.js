function wordPopulation(input) {
  const result = {};

  for (const town of input) {
    const tokens = town.split(" <-> ");
    const name = tokens[0];
    const pop = Number(tokens[1]);
    if (result[name] == undefined) {
      result[name] = pop;
    } else {
      result[name] += pop;
    }
  }
  for (const town in result) {
    console.log(`${town} : ${result[town]}`);
  }         
}

wordPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
