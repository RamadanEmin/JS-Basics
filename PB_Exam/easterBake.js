function easterBake(input) {
    let index = 0;
    let easterBread = Number(input[index++]);
    let totalSugar = 0;
    let totalFlour = 0;
    let sugarMax = Number.MIN_SAFE_INTEGER;
    let flourMax = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < easterBread; i++) {
        let sugar = Number(input[index++]);
        let flour = Number(input[index++]);
        if (sugar > sugarMax) {
            sugarMax = sugar;
        }
        if (flour > flourMax) {
            flourMax = flour;
        }
        totalSugar += sugar;
        totalFlour += flour;
    }
    let neededSugar = Math.ceil(totalSugar / 950);
    let neededFlour = Math.ceil(totalFlour / 750);
console.log(`Sugar: ${neededSugar}`);
console.log(`Flour: ${neededFlour}`);
console.log(`Max used flour is ${flourMax} grams, max used sugar is ${sugarMax} grams.`);
}
easterBake(["3","400","350","250","300","450","380"])
