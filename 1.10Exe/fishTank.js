function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percentTaken = Number(input[3]) / 100;

    let tankVolume = lenght * width * hight;
    let VolumeInLitters = tankVolume * 0.001;
    let takenVolume = VolumeInLitters * percentTaken;
    let neededWater = VolumeInLitters - takenVolume;

    console.log(neededWater);
}

fishTank(["85 ","75 ","47 ","17 "]);