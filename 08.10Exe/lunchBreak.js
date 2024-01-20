function lunchBreak(input) {
    let name = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime / 8;
    let relaxTIme = breakTime / 4;
   
    let freeBreak = breakTime - (lunchTime + relaxTIme);


    if(freeBreak > episodeTime) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(freeBreak - episodeTime)} minutes free time.`);
    } else if(freeBreak >= episodeTime) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(freeBreak - episodeTime)} minutes free time.`);
    } else if(freeBreak <= episodeTime) {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episodeTime - freeBreak)} more minutes.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episodeTime - freeBreak)} more minutes.`);
    }

}

lunchBreak(["Game of Thrones",
"60",
"96"])
;
