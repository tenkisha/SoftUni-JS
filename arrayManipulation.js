function train(array) {
  let train = array.shift().split(" ").map(Number);
  let maxPeople = Number(array.shift());

  for (let command of array) {
    let currCommand = command.split(" ");

    if (currCommand[0] === "Add") {
      train.push(Number(currCommand[1]))

    }else {
        for (let index = 0; index < train.length; index++) {
            if(train[index] + Number(currCommand[0]) <= maxPeople){
                train[index] += Number(currCommand);
                break;

                
            }
            
        }
    }
  }

  console.log(train.join(' '))
}

train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);
