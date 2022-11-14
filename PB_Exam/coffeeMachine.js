function coffeeMachine(input) {
    let drink = input[0];
    let sugar = input[1];
    let drinkCount = Number(input[2]);
    let totalSum = 0;
    switch (drink) {
        case "Espresso":
            switch (sugar) {
                case "Without": totalSum = (drinkCount * 0.90) * 0.65;
                    break;
                case "Normal": totalSum = drinkCount * 1.00;
                    break;
                case "Extra": totalSum = drinkCount * 1.20;
                    break;
            }
            break;
        case "Cappuccino":
            switch (sugar) {
                case "Without": totalSum = (drinkCount * 1.00) * 0.65;
                    break;
                case "Normal": totalSum = drinkCount * 1.20;
                    break;
                case "Extra": totalSum = drinkCount * 1.60;
                    break;
            }
            break;
        case "Tea":
            switch (sugar) {
                case "Without": totalSum = (drinkCount * 0.50) * 0.65;
                    break;
                case "Normal": totalSum = drinkCount * 0.60;
                    break;
                case "Extra": totalSum = drinkCount * 0.70;
                    break;
            }
            break;
    }
    if (drink === "Espresso" && drinkCount >= 5) {
        totalSum *= 0.75;
    }
    if (totalSum > 15) {
        totalSum *= 0.80;
    }
console.log(`You bought ${drinkCount} cups of ${drink} for ${totalSum.toFixed(2)} lv.`);
}
coffeeMachine(["Espresso", "Without", "10"]);
