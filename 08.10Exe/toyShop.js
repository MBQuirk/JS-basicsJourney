function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlePrice = puzzleCount * 2.60;
    let dollsPrice = dollsCount * 3;
    let bearsPrice = bearsCount * 4.10;
    let minionsPrice = minionsCount * 8.20;
    let trucksPrice = trucksCount * 2;

    let toyCount = puzzleCount + dollsCount + bearsCount + minionsCount + trucksCount;
    let sumPrice = puzzlePrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;

    if (toyCount >= 50) {
        let discount = sumPrice * 0.25;
        sumPrice = sumPrice - discount;
        
    }

    let rent = sumPrice * 0.10;
    let finalPrice = sumPrice - rent;
    let moneyLeft = finalPrice - tripPrice;
    let moneyNeed = tripPrice - finalPrice;

    if (finalPrice >= tripPrice) {
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);

    } else {
        console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`);
    }
}

toyShop
(["40.8",
"20",
"25",
"30",
"50",
"10"]);