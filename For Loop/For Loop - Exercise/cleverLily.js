function cleverLily(input) {
    let ageOfLily = Number(input[0]);
    let priceOfMachine = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let money = 0;
    let toy = 0;
    let sum = 0;
    for (let i = 1; i <= ageOfLily; i++) {
        if (i % 2 === 0) {
            money += (i / 2) * 10;
            money--;
        } else {
            toy++;
        }
    }
    sum = money + toy * pricePerToy;
    if (sum >= priceOfMachine) {
        console.log(`Yes! ${(sum - priceOfMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceOfMachine - sum).toFixed(2)}`);
    }
}
cleverLily(["21","1570.98","3"]);
