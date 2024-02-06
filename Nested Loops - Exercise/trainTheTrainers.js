function trainTheTrainers(input) {
    let index = 0;
    let juryCount = Number(input[index]);
    index++
    let command = input[index];
    index++

    let totalScore = 0;
    let scoreCounter = 0;

    while (command !== "Finish") {
        let presentation = command
        let avrgSum = 0;

        for (let score = 1; score <= juryCount; score++) {
            let currentScore = Number(input[index]);
            index++

            avrgSum += currentScore
            
        }

        
        let avrgScore = avrgSum / juryCount
        console.log(`${presentation} - ${(avrgSum / juryCount).toFixed(2)}.`);

        totalScore += avrgScore
        scoreCounter++

        command = input[index];
        index++
    }

    let totalAvrgScore = totalScore / scoreCounter
    console.log(`Student's final assessment is ${totalAvrgScore.toFixed(2)}.`);

}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"])