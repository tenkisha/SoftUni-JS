function convertToObj(objAsString) {
  let object = JSON.parse(objAsString);

  for (let key of Object.keys(object)) {
    console.log(`${key}: ${object[key]}`);
  }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
