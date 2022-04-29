function dayOfWeek(day){
    let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    let index = day - 1
    
    if(day >= 1 && day <= 7){
    days[index]
    console.log(days[index])
    }else{
        console.log("Invalid day!")
    }
    
    }

    dayOfWeek(3)