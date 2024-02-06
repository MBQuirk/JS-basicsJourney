function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++
    let primeSum = 0;
    let nonPrimeSum = 0;

    while (command !== "stop") {
        let currentNum = Number(command)
        let isPrime = true

        if (currentNum < 0) {
            console.log(`Number is negative.`);
            command = input[index];
            index++
            continue;
        }
        for (let i = 2; i < currentNum; i++) {


            if (currentNum % i === 0) {
                isPrime = false;
               
                break;
            }

        }
        if (isPrime) {
            primeSum += currentNum;
        }else{
            nonPrimeSum += currentNum
        }


        command = input[index];
        index++
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);


}
sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"])