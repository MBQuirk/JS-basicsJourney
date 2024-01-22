 function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let expenses = 0;
    let restingPlace = "";


    if(budget <= 100){
        destination = "Bulgaria";
        if(season === "summer"){
            restingPlace = "Camp";
            expenses = budget * 0.30;
        }else if(season === "winter"){
            restingPlace = "Hotel";
            expenses = budget * 0.70;
        }
    }else if(budget > 100 && budget <= 1000){
        destination = "Balkans";
        if(season === "summer"){
            restingPlace = "Camp";
            expenses = budget * 0.40;
        }else if(season === "winter"){
            restingPlace = "Hotel";
            expenses = budget * 0.80;
        }
    }else if(budget > 1000){
        destination = "Europe";
        restingPlace = "Hotel";
        expenses = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${restingPlace} - ${expenses.toFixed(2)}`);
 }

 journey(["50", "summer"]);