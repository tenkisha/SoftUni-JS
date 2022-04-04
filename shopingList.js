function shopingList(input){

    let stocks = input.shift().split('!')

    

    for(let i = 0;i < stocks.length;i++){
        let items = stocks[i]
        
        for(let command of input){
            let firstCommand = command.split(" ")
        
    
                    if(items.includes(firstCommand[1])){
                        break;
    
                    }else if(firstCommand[0] == 'Urgent'){
                        let newStocks = stocks.split()
                        stocks.unshift(firstCommand[1])
                        console.log(stocks)
                    }
                
                
                
            
        
        }
    }

    console.log(stocks)

}

shopingList((["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
)