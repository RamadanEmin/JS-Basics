function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let numberOfDays = Number(input[3]);
    let price = 0;
    switch (destination) {
        case "Dubai":
            if (season === "Winter") {
                price = numberOfDays * 45000 * 0.70;
            } else if (season === "Summer") {
                price = numberOfDays * 40000 * 0.70;
            }
            break;
        case "Sofia":
            if (season === "Winter") {
                price = numberOfDays * 17000 * 1.25;
            } else if (season === "Summer") {
                price = numberOfDays * 12500 * 1.25;
            }
            break;
        case "London":
            if (season === "Winter") {
                price = numberOfDays * 24000;
            } else if (season === "Summer") {
                price = numberOfDays * 20250;
            }
            break;
    }
    if (budget >= price) {
        console.log(`The budget for the movie is enough! We have ${(budget - price).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(price - budget).toFixed(2)} leva more!`);
    }
}
movieDestination(["400000", "Sofia", "Winter", "20"]);
