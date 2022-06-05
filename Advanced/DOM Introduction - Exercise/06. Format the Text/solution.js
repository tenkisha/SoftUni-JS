function solve() {
  let textInput = document.getElementById("input");
  let textArr = textInput.value.split(".").filter((s) => s !== "");
  let resultDiv = document.getElementById("output");

  while (textArr.length > 0) {
    let text = textArr.splice(0, 3) + '.'
    let p = document.createElement("p");
    p.textContent = text;
    resultDiv.appendChild(p);
  }
}
