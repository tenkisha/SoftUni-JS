function timeToWalk(steps,lengthStep,speed){

    let stepsNumber = steps
    let stepsLenght = lengthStep
    let speedInKm = speed
    let count = 0

    let length = (stepsNumber * stepsLenght) 

    let stepsForHour = length / speedInKm

    console.log(stepsForHour)




    
    

}

timeToWalk(4000, 0.60, 5)