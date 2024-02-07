function excursionCalculator(input){
    let peopleCount = Number(input[0]);
    let season = input[1];

    let price = 0;    
    
    

    if(peopleCount <= 5){
        if(season === "spring"){
            price = 50.00
        }else if(season === "summer"){
            price = 48.50 * 0.85
        }else if(season === "autumn"){
            price = 60.00
        }else if(season === "winter"){
            price = 86.00 * 1.08
        }
    }else if(peopleCount > 5){
        if(season === "spring"){
            price = 48.00
        }else if(season === "summer"){
            price = 45.00 * 0.85
        }else if(season === "autumn"){
            price = 49.50
        }else if(season === "winter"){
            price = 85.00 * 1.08
        }
    }

    

    
    console.log(`${(peopleCount * price).toFixed(2)} leva.`);
}
excursionCalculator(["20",
"winter"])