function cinema(input) {
    let projectionType = input[0];
    let lines = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;
    if (projectionType === "Premiere") {
        income = lines * columns * 12.00;
    } else if (projectionType === "Normal") {
        income = lines * columns * 7.50;
    } else if (projectionType === "Discount") {
        income = lines * columns * 5.00;
    }
    console.log(`${income.toFixed(2)} leva`);
}
cinema(["Premiere", "10", "12"]);
