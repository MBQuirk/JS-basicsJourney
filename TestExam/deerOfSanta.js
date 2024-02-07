function deerOfSanta(input){
    let days = Number(input[0]);
    let foodKg = Number(input[1]);
    let deerOneFood = Number(input[2]);
    let deerTwoFood = Number(input[3]);
    let deerThreeFood = Number(input[4]);

    let totalFoodDeer1 = days * deerOneFood;
    let totalFoodDeer2 = days * deerTwoFood
    let totalFoodDeer3 = days * deerThreeFood

    let neededFood = totalFoodDeer1 + totalFoodDeer2 + totalFoodDeer3

    let difference = Math.abs( foodKg - neededFood)

    if(neededFood <= foodKg){
        console.log(`${Math.floor(difference)} kilos of food left.`);
    }else{
        console.log(`${Math.ceil(difference)} more kilos of food are needed.`);
    }

}
deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])