function operationsBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let symbol = input[2];
    let result = 0;

    switch(symbol){
        case `+`:
        result = num1 + num2;
            if(result % 2 === 0){
                console.log(`${num1} ${symbol} ${num2} = ${result} - even`);
            }else{
                console.log(`${num1} ${symbol} ${num2} = ${result} - odd`);
            }
            break;

        case `-`:
            result = num1 - num2;
            if(result % 2 === 0){
                console.log(`${num1} ${symbol} ${num2} = ${result} - even`);
            }else{
                console.log(`${num1} ${symbol} ${num2} = ${result} - odd`);
            }
            break;

        case `*`:
            result = num1 * num2;
            if(result % 2 === 0){
                console.log(`${num1} ${symbol} ${num2} = ${result} - even`);
            }else{
                console.log(`${num1} ${symbol} ${num2} = ${result} - odd`);
            }
            break;

        case `/`:
            result = num1 / num2;
            if(num2 !== 0){
                console.log(`${num1} ${symbol} ${num2} = ${result.toFixed(2)}`);
            }else {
                console.log(`Cannot divide ${num1} by zero`);
            }
            break;

        case `%`:
            result = num1 % num2;
            if(num2 !== 0){
                console.log(`${num1} ${symbol} ${num2} = ${result}`);
            }else {
                console.log(`Cannot divide ${num1} by zero`);
            }
            break;
    }

}

operationsBetweenNumbers(["10",
"0",
"%"]);