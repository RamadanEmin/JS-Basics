function skiTrip(input) {
    let day = Number(input[0]);
    let roomType = input[1];
    let feedBack = input[2];
    let night = day - 1;
    let priceForNight = 0;
    switch (roomType) {
        case "room for one person":
            priceForNight = night * 18.00; break;
        case "apartment":
            priceForNight = night * 25.00;
            if (night < 10) {
                priceForNight *= 0.70;
            } else if (night <= 15) {
                priceForNight *= 0.65;
            } else {
                priceForNight *= 0.50;
            } break;
        case "president apartment":
            priceForNight = night * 35.00;
            if (night < 10) {
                priceForNight *= 0.90;
            } else if (night <= 15) {
                priceForNight *= 0.85;
            } else {
                priceForNight *= 0.80;
            } break;
    }
    if (feedBack === "positive") {
        priceForNight *= 1.25;
    } else if (feedBack === "negative") {
        priceForNight *= 0.90;
    }
console.log(priceForNight.toFixed(2));
}
skiTrip(["30","president apartment","negative"]);

