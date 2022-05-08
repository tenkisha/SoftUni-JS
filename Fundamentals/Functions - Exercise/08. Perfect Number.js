function perfectNumber(number){

    let indexNum = []
    let sum = 0;

    for(let i = 1;i <= number - 1;i++){
        indexNum = i
        
        if(number % indexNum == 0){
            sum += indexNum
        }
    }
    if(sum == number){
        console.log('We have a perfect number!')
    }else{
        console.log(`It's not so perfect.`)
    }
    
}

perfectNumber(28)