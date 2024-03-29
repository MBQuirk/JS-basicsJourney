function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let sum = 0;

    switch (flowerType) {
        case "Roses":
            sum = flowerCount * 5;
            if (flowerCount > 80) {
                sum = sum * 0.90;
            }
            break;
        case "Dahlias":
            sum = flowerCount * 3.80;
            if (flowerCount > 90) {
                sum = sum * 0.85;
            }
            break;
        case "Tulips":
            sum = flowerCount * 2.80;
            if (flowerCount > 80) {
                sum = sum * 0.85;
            }
            break;
        case "Narcissus":
            sum = flowerCount * 3;
            if (flowerCount < 120) {
                sum = sum * 1.15;
            }
            break;
        case "Gladiolus":
            sum = flowerCount * 2.5;
            if (flowerCount < 80) {
                sum = sum * 1.20;
            }
            break;
    }

    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
    }

}

newHouse(["Narcissus",
"119",
"360"]);
