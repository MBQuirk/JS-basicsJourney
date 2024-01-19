function areaOfFigures(input) {
    let type = input[0];
    let a = Number(input[1]);
    let b = Number(input[2]);

    if (type === "square") {
        area = a * a;
        console.log(area.toFixed(3));
    } else if (type === "rectangle") {
        area = a * b;
        console.log(area.toFixed(3));
    } else if (type === "circle") {
        area = Math.PI * ( a * a);
        console.log(area.toFixed(3));
    } else if(type === "triangle") {
        area = (a * b) / 2;
        console.log(area.toFixed(3))

    }
}

areaOfFigures(["triangle",
"4.5",
"20"]);