function moon(input){
    let speed = Number(input[0]);
    let littersPerHunder = Number(input[1]);

    let distance = 384400;
    let holeDistance = 2 * distance;

    let timeForTravel = holeDistance / speed;
    let totalTime = Math.ceil(timeForTravel + 3);

    let totalFuel = (holeDistance * littersPerHunder) / 100;

    console.log(totalTime);
    console.log(totalFuel);


}
moon(["10000",
"5"])