function numberPyramid(input){
    let n = Number(input[0]);

    let buff = "";
    let isBigger = false
    let current = 1

    for(let rows = 1; rows <= n; rows++){
        for(let cols = 1; cols <= rows; cols++){
            if(current > n){
                isBigger = true
                break;
            }
            buff += current + " "
            current++
        }
        console.log(buff);
        buff = "" ;
        if(isBigger){
            break;
        }
    }
   
   
}
numberPyramid(["7"])