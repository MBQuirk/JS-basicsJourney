function  barcodeGenerator(input){
    let startNum = String(input[0]);
    let endNum = String(input[1]);

    let aStart = Number(startNum[0]);
    let bStart = Number(startNum[1]);
    let cStart = Number(startNum[2]);
    let dStart = Number(startNum[3]);

    let aEnd = Number(endNum[0]);
    let bEnd = Number(endNum[1]);
    let cEnd = Number(endNum[2]);
    let dEnd = Number(endNum[3]);

    let buff = "";

    for(let a = aStart; a <= aEnd; a++){
        for(let b = bStart; b <= bEnd; b++){
            for(let c = cStart; c <= cEnd; c++){
                for(let d = dStart; d <= dEnd; d++){
                    if(a % 2 !== 0 && b % 2 !==0 && c % 2 !== 0 && d % 2 !== 0){
                        buff += `${a}${b}${c}${d} `
                    }
                }
            }
        }
    }
console.log(buff);
}
barcodeGenerator(["2345", 
    "6789"])