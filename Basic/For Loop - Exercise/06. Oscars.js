function demo(input) {
 
    let index=0;
    let name = input[index++];
    let startPoints = Number(input[index++]);
    let countJurry = Number(input[index++]);
    let maxResult = 1250.5;
    let isEnough = false;
 
    for(let i =0; i < countJurry; i++){
        let actorName = input[index++];
        let score = Number(input[index++]);
        startPoints += (actorName.length*score)/2;
 
        if(startPoints > maxResult){
            console.log(`Congratulations, ${name} got a nominee for leading role with ${startPoints.toFixed(1)}!`);
            isEnough = true;
            break;
        }
    }
    let diff = Math.abs(startPoints-maxResult);
    if(!isEnough){
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }
 
}

demo()