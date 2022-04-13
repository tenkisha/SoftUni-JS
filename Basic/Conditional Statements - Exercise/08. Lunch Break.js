function lunchBreak(input) {
    let nameSerial = (input[0]);
    let timeSerial = Number(input[1]);
    let timeForRest = Number(input[2]);

    let lunchTime = timeForRest * 1/8;
    let relaxTime = timeForRest * 1/4;
    let leftTime = timeForRest - lunchTime - relaxTime;
    
    let freeTime = Math.abs(leftTime - timeSerial)
    if (leftTime >= timeSerial) {
        console.log(`You have enough time to watch ${nameSerial} and left with ${Math.ceil(freeTime)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${nameSerial}, you need ${Math.ceil(freeTime)} more minutes.`)
    }
}

lunchBreak(['Friends','30','15'])