function multiplyTable(input){
    let num = String(input[0])
    

    let firstDigit = num.charAt(2)
    let secondDigit = num.charAt(1)
    let thirdDigit = num.charAt(0)

    
    if(firstDigit > 0 && secondDigit > 0 && thirdDigit > 0){
        for(let i = 1; i <= firstDigit ; i++){
            for(let j = 1; j <= secondDigit; j++){
                for(let k = 1; k <= thirdDigit; k++){
                    
                    let result = i * j * k
                    console.log(`${i} * ${j} * ${k} = ${result};`);
                    
                }
            }
        }
    }
        
    
    
}
    
multiplyTable(["324"])