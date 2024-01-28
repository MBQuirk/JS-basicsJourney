function divisionWithoutRemainder(input){
    let index = 0;
    let numCount = Number(input[index]);
    index++
    
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;

    for( let i = 1; i <= numCount; i++){
        let num = Number(input[index]);
        index++
        if(num % 2 === 0){
            num1++
        }
        if(num % 3 === 0){
            num2++
        }
        if(num % 4 === 0){
            num3++
        }

    }
    let p1 = num1 / numCount * 100;
    let p2 = num2 / numCount * 100;
    let p3 = num3 / numCount * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
}
divisionWithoutRemainder(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])