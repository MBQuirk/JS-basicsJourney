function radianstoDegrees(input) {
    let rad = Number(input[0]);
    let degr = rad * 180 / Math.PI;

    console.log(degr);
}

radianstoDegrees(["3.1416"])