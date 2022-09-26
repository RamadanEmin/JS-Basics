function fisingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = input[2];
    let boatRentPrice = 0;
    switch (season) {
        case "Spring": boatRentPrice = 3000; break;
        case "Summer":
        case "Autumn": boatRentPrice = 4200; break;
        case "Winter": boatRentPrice = 2600; break;
    }
    if (fishermen <= 6) {
        boatRentPrice *= 0.90;
    } else if (fishermen >= 7 && fishermen <= 11) {
        boatRentPrice *= 0.85;
    } else if (fishermen >= 12) {
        boatRentPrice *= 0.75;
    }
    if (fishermen % 2 === 0 && season !== "Autumn") {
        boatRentPrice *= 0.95;
    }
    if (budget >= boatRentPrice) {
        console.log(`Yes! You have ${(budget - boatRentPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatRentPrice - budget).toFixed(2)} leva.`);
    }
}
fisingBoat(["3600","Autumn","6"]);

