function easterDecoration(input){
    let index = 0;
    let clientCount = Number(input[index]);
    index++

    let totalSum = 0;
    let clients = 0;
    
    for(let i = 0; i < clientCount; i++){
        let command = input[index]
        index++
        let itemsCount = 0
        let currentSum = 0
        
        while(command !== "Finish"){
            itemsCount++
            switch(command){
                case "basket":
                    currentSum += 1.50;
                    break;
                case "wreath":
                    currentSum += 3.80;
                    break;
                case "chocolate bunny":
                    currentSum += 7;
                    break;
            }
            command = input[index];
            index++
        }
        if(itemsCount % 2 === 0){
            currentSum = currentSum * 0.8
        }
        console.log(`You purchased ${itemsCount} items for ${currentSum.toFixed(2)} leva.`);
        totalSum += currentSum
        clients++

        
    }
    let avarageBill = totalSum / clients
    console.log(`Average bill per client is: ${avarageBill.toFixed(2)} leva.`);

    

}
easterDecoration(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])