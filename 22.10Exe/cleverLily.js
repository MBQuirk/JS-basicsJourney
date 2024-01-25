function cleverLily(input) {
    let age = Number(input[0]);
    let washMachPrice = Number(input[1]);
    let toysPrice = Number(input[2]);

    let sum = 0;
    let toysCount = 0; 
    let currentSum = 10;

    for(let i = 1; i <= age; i++){
        if(i % 2 === 0){
            sum += currentSum;
            currentSum += 10;
            sum--;
        }else{
            toysCount++;
        }
    }
    sum += toysCount * toysPrice;
  
    if(sum >= washMachPrice){
        let n = Math.abs(sum - washMachPrice);
        console.log(`Yes! ${n.toFixed(2)}`);
    }else{
        let m = Math.abs(sum - washMachPrice)
        console.log(`No! ${m.toFixed(2)}`);
    }
}

cleverLily(["21",
"1570.98",
"3"]);