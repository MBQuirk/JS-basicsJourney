function catDiet(input){
    let fatPerc = Number(input[0]);
    let proteinPerc = Number(input[1])
    let carbsPerc = Number(input[2]);
    let calories = Number(input[3]);
    let waterPerc = Number(input[4]) / 100

    let totalFats = ((calories * fatPerc) / 100) / 9
    let totalProtein = ((calories * proteinPerc) / 100) / 4
    let totalCarbs = ((calories * carbsPerc) / 100) / 4

    let foodWeight = totalFats + totalProtein + totalCarbs
    let caloriesOneGram = calories / foodWeight
    
    let water = caloriesOneGram * waterPerc
    let clearCalories = caloriesOneGram - water

    console.log(clearCalories.toFixed(4));

}
catDiet(["20",
"60",
"20",
"1800",
"50"])