function extractFile(input) {
  let index = input.lastIndexOf("\\");
  let name = input.substring(index + 1).split(".");

  let extension = name.pop();

  console.log(`File name: ${name.join(".")}`);
  console.log(`File extension: ${extension}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
