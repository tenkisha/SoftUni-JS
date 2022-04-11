function sumSeconds(input) {
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let lastTime = Number(input[2]);

    let allTimes = firstTime + secondTime + lastTime;

    let timeInMin = Math.floor(allTimes / 60);
    let seconds = allTimes % 60;

    if (seconds < 10) {
        console.log(`${timeInMin}:0${seconds}`)
    } else {
        console.log(`${timeInMin}:${seconds}`)
    }

}

sumSeconds(['5','11','15'])