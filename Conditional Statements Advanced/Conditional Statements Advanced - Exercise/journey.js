function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let holiday;
    let amountSpend = 0;
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            holiday = "Camp";
            amountSpend = budget * 0.30;
        } else if (season === "winter") {
            holiday = "Hotel";
            amountSpend = budget * 0.70;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            holiday = "Camp";
            amountSpend = budget * 0.40;
        } else if (season === "winter") {
            holiday = "Hotel";
            amountSpend = budget * 0.80;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        holiday = "Hotel";
        amountSpend = budget * 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${holiday} - ${amountSpend.toFixed(2)}`);
}
journey(["1500", "summer"]);