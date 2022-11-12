function club(input) {
    let index = 0;
    let desiredProfit = Number(input[index++]);
    let command = input[index++];
    let profit = 0;
    let cocktailPrice = 0;
    let isAcquire = false;
    while (command !== "Party!") {
        let cocktail = "" + command;
        let cocktailCount = Number(input[index++]);
        cocktailPrice = Number(cocktail.length);
        let price = cocktailPrice * cocktailCount;
        if (price % 2 === 0) {
            profit += price;
        } else {
            profit += price * 0.75;
        }
        if (profit >= desiredProfit) {
            isAcquire = true;
            console.log(`Target acquired.`);
            break;
        }
        command = input[index++];
    }
if(!isAcquire){
    console.log(`We need ${(desiredProfit -profit).toFixed(2)} leva more.`);
}
console.log(`Club income - ${profit.toFixed(2)} leva.`);
}
club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
