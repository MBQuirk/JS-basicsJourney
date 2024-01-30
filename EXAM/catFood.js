function catFood(input){
    let index = 0
    let catCount = Number(input[index]);
    index++
    
    let smallCats = 0;
    let bigCats = 0;
    let hugeCats = 0;
    let totalfood = 0;

    for(let i = 0; i < catCount; i++){
        let foodQuantity = Number(input[index]);
        index++
        totalfood += foodQuantity
        if(foodQuantity >= 100 && foodQuantity < 200){
            smallCats++
        }else if(foodQuantity >= 200 && foodQuantity < 300){
            bigCats++
        }else if(foodQuantity >= 300 && foodQuantity < 400){
            hugeCats++
        }
    }

    let totalCost = totalfood / 1000 * 12.45
    
    console.log(`Group 1: ${smallCats} cats.`);
    console.log(`Group 2: ${bigCats} cats.`);
    console.log(`Group 3: ${hugeCats} cats.`);
    console.log(`Price for food per day: ${totalCost.toFixed(2)} lv.`);
    
}
catFood(["10",
"256",
"348",
"198",
"322",
"186",
"294",
"321",
"100",
"200",
"300"])