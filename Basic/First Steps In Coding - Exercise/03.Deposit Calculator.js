function calculator(input){
    let  deposit = Number(input[0])
    let date = Number(input[1])
    let percent = Number(input[2])

    let lihva = deposit * percent /100
    let mesechnaLihva = lihva / 12
    let sum = deposit + (date * mesechnaLihva) 
    console.log(sum)
}

calculator(['2','3','5'])