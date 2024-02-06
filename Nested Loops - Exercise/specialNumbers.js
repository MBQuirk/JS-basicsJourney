function specialNumbers(input){
    let num = Number(input[0]);
    let buff = "";


    for(let currentNum = 1111; currentNum <= 9999; currentNum++ ){
        let numAsString = String(currentNum);
        let isSpecial = true

        for(let index = 0; index < numAsString.length; index++){
            let currentDigit = Number(numAsString[index]);
            
            if(num % currentDigit !== 0){
                isSpecial = false  
            
            }           
            
        }
        
         if(isSpecial){
          buff += `${currentNum} `;
        }

      
    }
   console.log(buff);
}
specialNumbers(["3"])