function renovation(input) {
    let index = 0;
    let wallHeights = Number(input[index++]);
    let wallWidth = Number(input[index++]);
    let dropoutSection = Number(input[index++]);
    let command = input[index++];
    let isTired = true;
    let space = (wallHeights * wallWidth * 4);
    let paintArea = Math.ceil(space - (space * dropoutSection) / 100);
    while (command !== "Tired!") {
        let paint = Number(command);
        paintArea -= paint;
        if (paintArea === 0) {
            isTired = false;
            console.log("All walls are painted! Great job, Pesho!");
            break;
        }
        if (paintArea < 0) {
            isTired = false;
            console.log(`All walls are painted and you have ${Math.abs(paintArea.toFixed(0))} l paint left!`);
            break;
        }
        command = input[index++];
    }
    if (isTired) {
        console.log(`${paintArea} quadratic m left.`);
    }
}
renovation(["2","3","25","6","7","8"]);

