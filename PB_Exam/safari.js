function safari(input) {
    let budget = Number(input[0]);
    let litersOfFuel = Number(input[1]);
    let day = input[2];
    litersOfFuel *= 2.10;
    let neededMoney = litersOfFuel + 100;
    if (day === "Saturday") {
        neededMoney *= 0.90;
    } else if (day === "Sunday") {
        neededMoney *= 0.80;
    }
    if (budget>=neededMoney) {
        console.log(`Safari time! Money left: ${(budget-neededMoney).toFixed(2)} lv. `);
    } else {
        console.log(`Not enough money! Money needed: ${(neededMoney-budget).toFixed(2)} lv.`);
    }
}
safari(["1000", "10", "Sunday"]);
