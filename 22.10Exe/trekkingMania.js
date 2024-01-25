function trekkingMania(input) {
    let index = 0;
    let groupCount = Number(input[index]);
    index++
    
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    let sumPpl = 0;
    

    for (let i = 0; i < groupCount; i++){
        let peopleInGroup = Number(input[index]);
        index++
        
        if(peopleInGroup <= 5){
            musala += peopleInGroup
        }else if(peopleInGroup >=6 && peopleInGroup <= 12){
            monblan += peopleInGroup
        }else if(peopleInGroup >= 13 && peopleInGroup <= 25){
            kilimandjaro += peopleInGroup
        }else if(peopleInGroup >= 26 && peopleInGroup <= 40){
            k2 += peopleInGroup
        }else{
            everest += peopleInGroup
        }
        sumPpl = musala + monblan + kilimandjaro + k2 + everest
    }
    
    let percPplMusala = musala / sumPpl * 100;
    let percPplMonblan = monblan / sumPpl * 100;
    let percPplKalimandjaro = kilimandjaro / sumPpl * 100;
    let percPplK2 = k2 / sumPpl * 100;
    let percPplEverest = everest / sumPpl * 100;
    console.log(percPplMusala.toFixed(2) + "%")
    console.log(percPplMonblan.toFixed(2) + "%");
    console.log(percPplKalimandjaro.toFixed(2) + "%");
    console.log(percPplK2.toFixed(2) + "%");
    console.log(percPplEverest.toFixed(2) + "%");

}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);