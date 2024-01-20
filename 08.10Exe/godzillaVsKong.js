function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let clothsPrice = Number(input[2]);

    let decoration = budget * 0.10;
    let clothing = statistCount * clothsPrice;

    if (statistCount > 150) {
        let discount = clothing * 0.10;
        clothing = clothing - discount;
    }

    let expenses = decoration + clothing;

    let moneyLeft = budget - expenses
    let moneyNeed = expenses - budget;

    if (decoration + clothing > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeed.toFixed(2)} leva more.`);

    } else if (decoration + clothing <= budget) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["9587.88",
"222",
"55.68"]);
