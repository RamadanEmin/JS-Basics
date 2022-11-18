function poolDay(input) {
    let numberOfPeople = Number(input[0]);
    let entranceFee = Number(input[1]);
    let sunLoungerPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);
    let amountForExpenses = 0;
    let sunLounger = Math.ceil(numberOfPeople * 0.75);
    let umbrella = Math.ceil(numberOfPeople * 0.5);
    amountForExpenses = numberOfPeople * entranceFee + umbrellaPrice * umbrella + sunLoungerPrice * sunLounger;
    console.log(`${amountForExpenses.toFixed(2)} lv.`);
}
poolDay(["21", "5.50", "4.40", "6.20"]);
