function catLife(input){
    let breedType = input[0];
    let gender = input[1];

    let catLife = 0;

    if(gender === "m"){
        switch(breedType){
            case "British Shorthair":
                catLife = 13 * 12 / 6;
                break;
            case "Siamese":
                catLife = 15 * 12 / 6;
                break;
            case "Persian":
                catLife = 14 * 12 / 6;
                break;
            case "Ragdoll":
                catLife = 16 * 12 / 6;
                break;
            case "American Shorthair":
                catLife = 12 * 12 / 6;
                break;
            case "Siberian":
                catLife = 11 * 12 / 6;
                break;
            default:
                console.log(`${breedType} is invalid cat!`);
                return;
        }
    }else if(gender === "f"){
        switch(breedType){
            case "British Shorthair":
                catLife = 14 * 12 / 6;
                break;
            case "Siamese":
                catLife = 16 * 12 / 6;
                break;
            case "Persian":
                catLife = 15 * 12 / 6;
                break;
            case "Ragdoll":
                catLife = 17 * 12 / 6;
                break;
            case "American Shorthair":
                catLife = 13 * 12 / 6;
                break;
            case "Siberian":
                catLife = 12 * 12 / 6;
                break;
            default:
                console.log(`${breedType} is invalid cat!`);
                return;
        }
    }
    
        console.log(`${Math.floor(catLife)} cat months`);
    
 

}
catLife(["Siamesse",
"f"])