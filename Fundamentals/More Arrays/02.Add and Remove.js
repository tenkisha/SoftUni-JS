function addAndRemove(input) {
  let counter = 0;
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    let command = input[i];
    if (command == "add") {
      counter++;
      arr.push(counter);
    } else if (command == "remove") {
      counter++;
      arr.pop(2);
    }
  }


  if(arr.length == 0){
      console.log('Empty')
  }else{
    console.log(arr.join(' '));
  }
}

addAndRemove(["add", "add", "add", "add"]);

addAndRemove(["add", "add", "remove", "add", "add"]);

addAndRemove(['remove', 'remove', 'remove'])
