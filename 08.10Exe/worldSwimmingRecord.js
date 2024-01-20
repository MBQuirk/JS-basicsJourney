function worldSwimmingRecord(input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let timeSwiming = distance * secondsPerMeter;
    let slowing = Math.floor(distance / 15) * 12.5;
    let sumTime = (timeSwiming + slowing);

    let difference = sumTime - record;

    if(record > sumTime) {
        console.log(`Yes, he succeeded! The new world record is ${sumTime.toFixed(2)} seconds.`);

    } else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }

}

worldSwimmingRecord(["55555.67",
"3017",
"5.03"]);