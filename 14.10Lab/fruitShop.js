function fruitShop(input) {
    let fruitType = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let sum = 0;

    if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
        if(fruitType === "banana"){
            sum = quantity * 2.50;
            console.log(sum.toFixed(2));
        }else if(fruitType === "apple"){
            sum = quantity * 1.20;
            console.log(sum.toFixed(2));
        }else if(fruitType === "orange"){
            sum = quantity * 0.85;
            console.log(sum.toFixed(2));
        }else if(fruitType === "grapefruit"){
            sum = quantity * 1.45;
            console.log(sum.toFixed(2));
        }else if(fruitType === "kiwi"){
            sum = quantity * 2.70;
            console.log(sum.toFixed(2));
        }else if(fruitType === "pineapple"){
            sum = quantity * 5.50
            console.log(sum.toFixed(2));
        }else if(fruitType === "grapes"){
            sum = quantity * 3.85;
            console.log(sum.toFixed(2));
        }else{
            console.log("error");
        }     
    } else if(day === "Sunday" || day === "Saturday") {
        if(fruitType === "banana"){
            sum = quantity * 2.70;
            console.log(sum.toFixed(2));
        }else if(fruitType === "apple"){
            sum = quantity * 1.25;
            console.log(sum.toFixed(2));
        }else if(fruitType === "orange"){
            sum = quantity * 0.90;
            console.log(sum.toFixed(2));
        }else if(fruitType === "grapefruit"){
            sum = quantity * 1.60;
            console.log(sum.toFixed(2));
        }else if(fruitType === "kiwi"){
            sum = quantity * 3.00;
            console.log(sum.toFixed(2));
        }else if(fruitType === "pineapple"){
            sum = quantity * 5.60;
            console.log(sum.toFixed(2));
        }else if(fruitType === "grapes"){
            sum = quantity * 4.20;
            console.log(sum.toFixed(2));
        }else{
            console.log("error");
        }
    
    

    }else{
        console.log("error")
    }
}


fruitShop(["grapes",
"Tadfgy",
"2"]);