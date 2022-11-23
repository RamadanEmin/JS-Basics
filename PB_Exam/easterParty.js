function easterParty(input = []) {
    const numberOfGuests = Number(input[0]);
    let envelopePrice = Number(input[1]);
    const budget = Number(input[2]);
    const cakePrice = budget * 0.10;
    if (numberOfGuests > 20) {
        envelopePrice *= 0.75;
    } else if (15 < numberOfGuests && numberOfGuests <= 20) {
        envelopePrice *= 0.80;
    } else if (10 <= numberOfGuests && numberOfGuests <= 15) {
        envelopePrice *= 0.85;
    }
    const totalPrice = envelopePrice * numberOfGuests + cakePrice;
    if (budget >= totalPrice) {
        console.log(`It is party time! ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(totalPrice - budget).toFixed(2)} leva needed.`);
    }
}
easterParty(["18", "30", "450"]);
easterParty(["8", "25", "340"]);
easterParty(["24", "35", "550"]);
