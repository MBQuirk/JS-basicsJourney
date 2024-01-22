function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);

    let examTimeInMinutes = examHour * 60 + examMinutes;
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinutes;


    if(arrivalTimeInMinutes > examTimeInMinutes){
        console.log(`Late`);
        let difference = arrivalTimeInMinutes - examTimeInMinutes;
        let hours = Math.floor(difference/60);
        let minutes = difference % 60;
        if(difference >= 60){
            if(minutes < 10){
                console.log(`${hours}:0${minutes} hours after the start`);
            }else{
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }else{
            console.log(`${minutes} minutes after the start`);
        }
    }else if((examTimeInMinutes - arrivalTimeInMinutes) > 30){
        console.log(`Early`);
        let difference = examTimeInMinutes - arrivalTimeInMinutes;
        let hours = Math.floor(difference / 60);
        let minutes = difference % 60;
        if(difference >= 60){
            if(minutes < 10){
                console.log(`${hours}:0${minutes} hours before the start`);
            }else{
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }else{
            console.log(`${minutes} minutes before the start`);
        }
    }else{
        console.log(`On time`);
        let difference = examTimeInMinutes - arrivalTimeInMinutes;
        let minutes = difference % 60;
        if(difference > 0){
        console.log(`${minutes} minutes before the start`);
        }
        
    }

}

onTimeForTheExam(["10",
"00",
"10",
"00"]);