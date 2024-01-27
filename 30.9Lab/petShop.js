function petShop(input) {
    let dogf = Number(input[0]);
    let catf = Number(input[1]);
    let pdogf = dogf * 2.50;
    let pcatf = catf * 4;
    let sum = pdogf + pcatf;

    console.log([sum]);
}

petShop(["4","5"]);