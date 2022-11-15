function fruitMarket(input) {
    let strawberryPrice = Number(input[0]);
    let amountOfBanana = Number(input[1]);
    let amountOfOrange = Number(input[2]);
    let amountOfRaspberries = Number(input[3]);
    let amountOfStrawberry = Number(input[4]);
    let raspberriesPrice = strawberryPrice * 0.5;
    let orangePrice = raspberriesPrice * 0.60;
    let bananaPrice = raspberriesPrice * 0.20;
    let account = amountOfStrawberry * strawberryPrice + amountOfRaspberries * raspberriesPrice + amountOfOrange * orangePrice + amountOfBanana * bananaPrice;
    console.log(account.toFixed(2));
}
fruitMarket(["48", "10", "3.3", "6.5", "1.7"])