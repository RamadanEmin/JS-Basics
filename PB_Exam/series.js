function series(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let numberOfSeries = Number(input[index++]);
    let totalPrice = 0;
    for (let i = 0; i < numberOfSeries; i++) {
        let name = input[index++];
        let price = Number(input[index++]);
        switch (name) {
            case "Thrones": totalPrice += price * 0.50;
                break;
            case "Lucifer": totalPrice += price * 0.60;
                break;
            case "Protector": totalPrice += price * 0.70;
                break;
            case "TotalDrama": totalPrice += price * 0.80;
                break;
            case "Area": totalPrice += price * 0.90;
                break;
            default: totalPrice += price;
            break;
        }
    }
if(budget >= totalPrice){
console.log(`You bought all the series and left with ${(budget - totalPrice).toFixed(2)} lv.`);
}else{
console.log(`You need ${(totalPrice - budget).toFixed(2)} lv. more to buy the series!`);
}
}
series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
