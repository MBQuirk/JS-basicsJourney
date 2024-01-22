function skiTrip(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let score = input[2];
    let nights = days -1;
    let finalPrice = 0;


    switch(roomType){
        case `room for one person`:
            finalPrice = nights * 18;
        break;

        case `apartment`:
            finalPrice = nights * 25;
            if(days < 10){
                finalPrice = finalPrice * 0.70;
            }else if(days >= 10 &&  days <= 15){
                finalPrice = finalPrice * 0.65;
            }else if(days > 15){
                finalPrice = finalPrice * 0.50;
            }
        break;

        case `president apartment`:
            finalPrice = nights * 35;
            if(days < 10){
                finalPrice = finalPrice * 0.90;
            }else if(days >= 10 &&  days <= 15){
                finalPrice = finalPrice * 0.85;
            }else if(days > 15){
                finalPrice = finalPrice * 0.80;
            }
        break;
    }

    if(score === "positive"){
        finalPrice = finalPrice * 1.25;
    }else{
        finalPrice = finalPrice * 0.90;
    }
    console.log(finalPrice.toFixed(2));

}

skiTrip(["2",
"apartment",
"positive"]);