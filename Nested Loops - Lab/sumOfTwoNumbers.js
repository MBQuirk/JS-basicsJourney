function sumOfTwoNumbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let combCount = 0;
    let isFound = false
    for(let i = start; i <= end; i++){
        for(let j = start; j <= end; j++){
            let sum = i + j;
            combCount++
            if(i + j === magicNum){
                console.log(`Combination N:${combCount} (${i} + ${j} = ${magicNum})`);
                isFound = true
                break;
            
                
            }
            
        }
        
        if(isFound){
            break;
        }
    }
    if(!isFound)
    console.log(`${combCount} combinations - neither equals ${magicNum}`);
    
}
sumOfTwoNumbers(["1",
"10",
"5"])