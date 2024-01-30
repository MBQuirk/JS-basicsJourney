function puppyCare(input){
    let index = 0;
    let foodInKG = Number(input[index]);
    index++
    let command = "";

    let totalFoodEaten = 0


    while(command !== "Adopted"){
        let foodPerMeal = Number(command)
        totalFoodEaten += foodPerMeal
        
        
        command = input[index]
        index++
    }

    let neededFood = Math.abs(foodInKG * 1000 - totalFoodEaten);

    if(totalFoodEaten <= foodInKG * 1000){
        console.log(`Food is enough! Leftovers: ${neededFood} grams.`);
    }else{
        console.log(`Food is not enough. You need ${neededFood} grams more.`);
    }
    
}
puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])