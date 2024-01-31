function numbersNto1(input) {
    let numAsString = input[0];
    let sum = 0;

    for(let i = 0; i < numAsString.length; i++){
        let num = Number(numAsString[i])
        sum += num
    }
    console.log(sum)
}
numbersNto1(["1234"])