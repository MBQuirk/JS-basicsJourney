function moving(input){
    let index = 0
    let w = Number(input[index]);
    index++
    let l = Number(input[index]);
    index++
    let h = Number(input[index]);
    index++
    let freeSpace = w * l * h
    let command = input[index]
    index++

    let volumeBox = 0

    while(command !== "Done"){
        let currentBox = Number(command);
        volumeBox += currentBox

        if(volumeBox >= freeSpace){
            break;
        }

        command = input[index];
        index++
    }
    if(command === "Done"){
        console.log(`${freeSpace - volumeBox} Cubic meters left.`);
    }else{
        console.log(`No more free space! You need ${volumeBox - freeSpace} Cubic meters more.`);
    }

}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])