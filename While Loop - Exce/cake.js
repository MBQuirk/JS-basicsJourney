function cake(input){
    let index = 0;

    let w = Number(input[index]);
    index++
    let l = Number(input[index]);
    index++
    let cakeArea = w * l
    let command = input[index];
    index++
    let piecesCount = 0

    while(command !== "STOP"){
        let currentPiece = Number(command);
       cakeArea -= currentPiece
       piecesCount += currentPiece

       if(cakeArea <= 0 ){
        break;
       }
        
       command = input[index];
       index++
    }
   
    if(command === "STOP" && cakeArea > 0){
        console.log(`${cakeArea} pieces are left.`);
    }else{
        console.log(`No more cake left! You need ${Math.abs(cakeArea)} pieces more.`);
    }
   
    
}
cake(["10",
"2",
"2",
"4",
"6",
"STOP"])