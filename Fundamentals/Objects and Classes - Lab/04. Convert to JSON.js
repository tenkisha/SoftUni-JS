function convertToJson(name, lastName, hairColor) {
  let obj = {
    name: name,
    lastName: lastName,
    hairColor: hairColor,
  };

  let result = JSON.stringify(obj);

  console.log(result);
}

convertToJson("George", "Jones", "Brown");
