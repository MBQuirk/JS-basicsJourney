function foodDelivery(input) {
    let chickenMenu =Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegieMenu = Number(input[2]);

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.40;
    let vegieMenuPrice = vegieMenu * 8.15;
    let menuSumPrice = chickenMenuPrice + fishMenuPrice + vegieMenuPrice;
    let desertPrice = menuSumPrice * 0.20;

    let totalPrice = menuSumPrice + desertPrice + 2.50;

    console.log(totalPrice);
}

foodDelivery(["2 ","4 ","3 "]);