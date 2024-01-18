

function repainting(input) {
    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hrsMasters = Number(input[3]);

    let naylonPrice = (naylon + 2)* 1.50;
    let addedPaint = paint * 0.10;
    let paintPrice = (paint + addedPaint) * 14.50;
    let razreditelPrice = razreditel * 5;
    let totalMatsPrice = naylonPrice + paintPrice + razreditelPrice + 0.40
    let masterPrice = (totalMatsPrice * 0.30) * hrsMasters;
    
    let finalPrice = masterPrice + totalMatsPrice;

    console.log(finalPrice);


}

repainting(["10 ",
"11 ",
"4 ",
"8 "]);