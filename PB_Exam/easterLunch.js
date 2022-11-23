function easterLunch(input = []) {
    const numberOfEasterBread = Number(input[0]);
    const numberOfBoxOfEggs = Number(input[1]);
    const kilogramsOfCookie = Number(input[2]);

    const easterBreadPrice = 3.20;
    const boxOfEggsPrice = 4.35;
    const cookiePrice = 5.40;
    const paintForEggPrice = 0.15;
    const sumForBreadPrice = numberOfEasterBread * easterBreadPrice;
    const sumForBoxOfEggs = numberOfBoxOfEggs * boxOfEggsPrice + (numberOfBoxOfEggs * 12) * paintForEggPrice;
    const sumForCookie = kilogramsOfCookie * cookiePrice;
    const expense = sumForBreadPrice + sumForBoxOfEggs + sumForCookie;
    console.log(`${expense.toFixed(2)}`);
}
easterLunch(["3", "2", "3"]);
easterLunch(["4", "4", "3"]);
