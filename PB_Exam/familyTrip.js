function familyTrip(input) {
    let budget = Number(input[0]);
    let numberOfNights = Number(input[1]);
    let priceForNight = Number(input[2]);
    let additionalCosts = Number(input[3]);
    let money = 0;
    if (numberOfNights > 7) {
        priceForNight *= 0.95;
    }
    money = numberOfNights * priceForNight + (additionalCosts * budget) / 100;
    if (money <= budget) {
        console.log(`Ivanovi will be left with ${(budget - money).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(money - budget).toFixed(2)} leva needed.`);
    }
}
familyTrip(["500","7","66","15"]);

