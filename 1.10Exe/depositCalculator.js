/*
⦁	Депозирана сума – реално число в интервала [100.00 … 10000.00]
⦁	Срок на депозита (в месеци) – цяло число в интервала [1…12]
⦁	Годишен лихвен процент – реално число в интервала [0.00 …100.00]

*/

function depositCalculator(input) {
    let deposit = Number(input[0]);
    let time = Number(input[1]);
    let annualInterest = Number(input[2]) / 100 ;

    let sum = deposit + time * ((annualInterest * deposit) / 12);

    console.log(sum);
}

depositCalculator(["200 ","3 ","5.7 "])
