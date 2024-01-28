function vetParking(input){
    let days = Number(input[0]);
    let hoursPerDay = Number(input[1]);

    let price = 0;
    

    for(let d = 1; d <= days; d++){       
        let dailyCost = 0

        for(let h = 1; h <= hoursPerDay; h++){
            if(d % 2 === 0 && h % 2 !== 0){
                dailyCost += 2.50
            
            }else if(d % 2 !== 0 && h % 2 === 0){
                dailyCost += 1.25
                
            }else{
                dailyCost += 1
                
            }
        }
       price += dailyCost
       console.log(`Day: ${d} - ${dailyCost.toFixed(2)} leva`);
    }

    console.log(`Total: ${price.toFixed(2)} leva`);
    
    
}
vetParking(["2",
"5"])	