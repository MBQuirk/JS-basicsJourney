function yardGreening(input) {
    let sqmet = Number(input[0]);
    let price = sqmet * 7.61;
    let dscnt = 0.18 *price;
    let finprice = price - dscnt;

    console.log(`The final price is: ${finprice} lv.`);
    console.log(`The discount is: ${dscnt} lv.`);
}

yardGreening([550]);