function tennisRanklist(input) {
    let index = 0;
    let tournaments = Number(input[index]);
    index++
    let startingPoints = Number(input[index]);
    index++

    let currentPoints = 0;
    let winCounts = 0;

    for (let i = 0; i <tournaments; i++){
        let score = input[index];
        index++
        switch(score){
            case "W":
                winCounts++
                currentPoints += 2000;
                break;
            case "F":
                currentPoints += 1200;
                break;
            case "SF":
            currentPoints += 720;
            break;
        }
    }

    let finalPts = startingPoints + currentPoints;
    let avrgPts = Math.floor(currentPoints / tournaments);
    let winsP = (winCounts / tournaments) * 100;

    console.log(`Final points: ${finalPts}`);
    console.log(`Average points: ${avrgPts}`);
    console.log(`${winsP.toFixed(2)}%`)
}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"]);