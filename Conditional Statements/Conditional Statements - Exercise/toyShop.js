function toyShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let number = puzzles + dolls + teddyBears + minions + trucks;
    let sum = puzzles * 2.60 + dolls * 3 + teddyBears * 4.10 + minions * 8.20 + trucks * 2;
    if (number >= 50) {
        sum = sum - (sum * 0.25);
    }
    sum = sum - (sum * 0.10);
    if (excursionPrice <= sum) {
        let money = sum - excursionPrice;
        console.log(`Yes! ${money.toFixed(2)} lv left.`);
    } else if (excursionPrice > sum) {
        let money = excursionPrice - sum;
        console.log(`Not enough money! ${money.toFixed(2)} lv needed.`);
    }
}
toyShop(["320","8","2","5","5","1"]);

