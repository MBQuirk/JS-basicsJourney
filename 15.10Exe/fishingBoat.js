function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);

    let rentalPrice = 0;

    if(season === "Spring"){
        rentalPrice = 3000;
    }else if( season === "Summer" || season === "Autumn"){
        rentalPrice = 4200;
    }else if(season === "Winter"){
        rentalPrice = 2600;
    }

    if(fisherCount <= 6){
        rentalPrice = rentalPrice * 0.90;
    }else if(fisherCount >= 7 && fisherCount <= 11){
        rentalPrice = rentalPrice * 0.85;
    }else if(fisherCount > 12){
        rentalPrice = rentalPrice * 0.75;
    }

    if(fisherCount % 2 === 0 && season !== "Autumn"){
        rentalPrice = rentalPrice * 0.95
    }

    if(budget >= rentalPrice){
        console.log(`Yes! You have ${(budget - rentalPrice).toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money! You need ${(rentalPrice - budget).toFixed(2)} leva.`);
    }

}

fishingBoat(["2000",
"Winter",
"13"]);