function computerFirm(input){
    let index = 0;
    let npcModel = Number(input[index]);
    index++
    let sumSales = 0

    for(let i = 0; i < npcModel; i++){
        let ratingNum = Number(input[index]);
        index++
        let numAsString = String(ratingNum)
        let ratingDigit = numAsString.charAt(2)
        let salesDigit = (numAsString - numAsString.charAt(2)) / 10
        
        
        if()
        
              
    }
console.log(sumSales);
}
computerFirm(["5",
"122",
"156",
"202",
"214",
"185"])