function careOfPuppy(input) {
    let index = 0;
    let amountOfFood = Number(input[index++]);
    amountOfFood = amountOfFood * 1000;
    let command = input[index++];
    while (command !== "Adopted") {
        let food = Number(command);
        amountOfFood -= food;
        command = input[index++];
    }
    if (amountOfFood >= 0) {
        console.log(`Food is enough! Leftovers: ${amountOfFood} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(amountOfFood)} grams more.`);
    }
}
careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
