function easterGuests(input = []) {
    const numberOfGuests = Number(input[0]);
    const availableBudget = Number(input[1]);
    const priceForEasterBreads = 4;
    const priceForEggs = 0.45;
    const boughtEasterBreads = Math.ceil(numberOfGuests / 3);
    const boughtEggs = 2 * numberOfGuests;
    const totalPrice = boughtEasterBreads * priceForEasterBreads + boughtEggs * priceForEggs;
    if (totalPrice <= availableBudget) {
        console.log(`Lyubo bought ${boughtEasterBreads} Easter bread and ${boughtEggs} eggs.`);
        console.log(`He has ${(availableBudget - totalPrice).toFixed(2)} lv. left.`);
    } else {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${(totalPrice - availableBudget).toFixed(2)} lv. more.`);
    }
}
easterGuests(["10", "35"]);
easterGuests(["9", "12"]);
