/*
⦁	Брой пакети химикали - цяло число в интервала [0...100]
⦁	Брой пакети маркери - цяло число в интервала [0...100]
⦁	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
⦁	Процент намаление - цяло число в интервала [0...100]
 */

function suppliesForSchool(input) {
    let pencilCount = Number(input[0]);
    let markerCount = Number(input[1]);
    let detergent = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let pencilPrice = pencilCount * 5.80;
    let markerPrice = markerCount * 7.20;
    let detergentPrice = detergent * 1.20;

    let currentSum = pencilPrice + markerPrice + detergentPrice;
    let totalSum = currentSum - (currentSum * discount);

    console.log(totalSum);

}

suppliesForSchool(["2 ",
"3 ",
"4 ",
"25 "])