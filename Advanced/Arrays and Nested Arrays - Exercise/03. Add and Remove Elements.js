function addAndRemove(input) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "add") {
      arr.push(i + 1);
    } else if (input[i] == "remove") {
      arr.pop();
    }
  }

  if (arr.length == 0) {
    console.log("Empty");
  } else {
    for (let el of arr) {
      console.log(el);
    }
  }
}

addAndRemove(['remove', 
'remove', 
'remove']
);
