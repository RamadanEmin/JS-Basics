function addBags(input = []) {
    let priceOfLuggage = Number(input.shift());
    const kilogramsOfLuggage = Number(input.shift());
    const daysUntilTravel = Number(input.shift());
    const numberOfLuggage = Number(input.shift());
    if (kilogramsOfLuggage < 10) {
        priceOfLuggage *= 0.20;
    } else if (10 <= kilogramsOfLuggage && kilogramsOfLuggage <= 20) {
        priceOfLuggage *= 0.50;
    }
    if (daysUntilTravel > 30) {
        priceOfLuggage *= 1.10;
    } else if (7 <= daysUntilTravel && daysUntilTravel <= 30) {
        priceOfLuggage *= 1.15;
    } else if (7 > daysUntilTravel) {
        priceOfLuggage *= 1.40;
    }
    priceOfLuggage *= numberOfLuggage;
    console.log(`The total price of bags is: ${priceOfLuggage.toFixed(2)} lv. `);
}
addBags([
    "25.50",
    "5",
    "36",
    "6"])

