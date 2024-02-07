function excursionSale(input){
    let index = 0;
    let seaExcurs = Number(input[index]);
    index++
    let mountainExcurs = Number(input[index]);
    index++
    let command = "";

    let priceSea = 680;
    let priceMountain = 499;
    let profit = 0;
    

    while(command !== "Stop"){  
      if(command === "sea"){
         profit += priceSea
         seaExcurs--
         if(seaExcurs = 0){
            break
         }
      }else if(command === "mountain"){
         profit += priceMountain
         mountainExcurs--
         if(mountainExcurs = 0){
            break
         }
      }
      
        command = input[index];
        index++
    }

   if(seaExcurs === 0 && mountainExcurs === 0){
      console.log(`Good job! Everything is sold.`);
      console.log(`Profit: ${profit} leva.`);
   }else{
      console.log(`Profit: ${profit} leva.`);
   }

}    
excursionSale(["2",
"2",
"sea",
"mountain",
"sea",
"sea",
"mountain"])