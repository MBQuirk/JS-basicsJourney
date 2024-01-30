function goldMine(input){
    let index = 0;
    let locationCount = Number(input[index]);
    index++

    

    for(let i = 0; i < locationCount; i++){
        let expetedAvrg = Number(input[index]);
        index++
        let days = Number(input[index]);
        index++
        let totalGoldLocs = 0;

        for(let day = 0; day < days; day++){
            let goldPerDay = Number(input[index]);
            index++
            totalGoldLocs += goldPerDay
            
        }
        let avarageGoldPerDay = totalGoldLocs / days

        if(avarageGoldPerDay >= expetedAvrg){
            console.log(`Good job! Average gold per day: ${avarageGoldPerDay.toFixed(2)}.`);
        }else{
            
            console.log(`You need ${(expetedAvrg - avarageGoldPerDay).toFixed(2)} gold.`);
            
        }
        
    }
    

}
goldMine(["1",
"5",
"3",
"10",
"1",
"3"])