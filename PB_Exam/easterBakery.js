function easterBakery(input = []) {
    const flourPrice = Number(input[0]);
    const kilogramsOfFlour = Number(input[1]);
    const kilogramsOfSugar = Number(input[2]);
    const numberOfEggshells = Number(input[3]);
    const yeastPackages = Number(input[4]);

    const sugarPrice = flourPrice * 0.75;
    const sumForFlour = kilogramsOfFlour * flourPrice;
    const sumForSugar = kilogramsOfSugar * sugarPrice;
    const sumForEggshells = numberOfEggshells * (flourPrice * 1.10);
    const sumForYeast = yeastPackages * (sugarPrice * 0.20);
    const requiredAmount = sumForFlour + sumForSugar + sumForEggshells + sumForYeast;
    console.log(`${requiredAmount.toFixed(2)}`);
}
easterBakery(["50", "10", "3.5", "6", "1"]);
easterBakery(["63.44", "3.57", "6.35", "8", "2"]);