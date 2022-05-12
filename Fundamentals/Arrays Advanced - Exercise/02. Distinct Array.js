function distinctArray(numbers){

    let array = [];

    for(let nums of numbers){
        if(!array.includes(nums)){
            array.push(nums)
        }
    }

    console.log(array.join(' '))
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])