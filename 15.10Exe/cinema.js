function cinema(input) {
    let type = input[0];
    let rowsR = Number(input[1]);
    let columnsC = Number(input[2]);
    let income = 0;

    if(type === "Premiere"){
        income = rowsR * columnsC * 12;
    }else if(type === "Normal"){
        income = rowsR * columnsC * 7.50;
    }else if(type === "Discount"){
        income = rowsR * columnsC * 5;
    }
    console.log(`${income.toFixed(2)} leva`)
}
cinema(["Normal",
"21",
"13"]);