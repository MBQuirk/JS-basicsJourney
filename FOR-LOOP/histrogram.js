function histrogram(input) {
    let index = 0;

    let num = Number(input[index]);
    index++

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for(let i = 0; i < num; i++){
        let currentNum = input[index];
        index++
        
        if(currentNum < 200){
            p1Counter++
        }else if(currentNum >= 200 && currentNum <= 399){
            p2Counter++
        }else if(currentNum >= 400 && currentNum <= 599){
            p3Counter++
        }else if(currentNum >= 600 && currentNum <= 799){
            p4Counter++
        }else{
            p5Counter++
        }

        
    }

    let p1Perc = p1Counter / num * 100;
    let p2Perc = p2Counter / num * 100;
    let p3Perc = p3Counter / num * 100;
    let p4Perc = p4Counter / num * 100;
    let p5Perc = p5Counter / num * 100;
    console.log(`${p1Perc.toFixed(2)}%`);
    console.log(`${p2Perc.toFixed(2)}%`);
    console.log(`${p3Perc.toFixed(2)}%`);
    console.log(`${p4Perc.toFixed(2)}%`);
    console.log(`${p5Perc.toFixed(2)}%`);

}
histrogram(["3",
"1",
"2",
"999"])