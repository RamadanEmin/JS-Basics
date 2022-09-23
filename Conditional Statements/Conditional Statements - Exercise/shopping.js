function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let memories = Number(input[3]);
    let videoCardsPrice = videoCards * 250;
    let processorsPrice = videoCardsPrice * 0.35;
    let memoriesPrice = videoCardsPrice * 0.10;
    let totalPrice = videoCardsPrice + processors * processorsPrice + memories * memoriesPrice;
    if (videoCards > processors) {
        totalPrice *= 0.85;
    }
    if (budget >= totalPrice){
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else{
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}
shopping(["900", "2", "1", "3"]);
