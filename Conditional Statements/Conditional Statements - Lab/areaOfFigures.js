function areaOfFigures(input) {
    let figures = input[0];
    let area = 0;
    if (figures === "square") {
        let sideLength = Number(input[1]);
        area = sideLength * sideLength;
    } else if (figures === "rectangle") {
        let sideLength = Number(input[1]);
        let sideLength2 = Number(input[2]);
        area = sideLength * sideLength2;
    } else if (figures === "circle") {
        let radius = Number(input[1]);
        area = Math.pow(radius, 2) * Math.PI;
    } else if (figures === "triangle") {
        let sideLength = Number(input[1]);
        let sideHeight = Number(input[2]);
        area = (sideLength * sideHeight) / 2;
    } else {
        console.log("Wrong figures!")
    }
    console.log(area.toFixed(3));
}
areaOfFigures(["triangle","4.5","20"]);
