function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);
    let order = chickenMenu * 10.35 + fishMenu * 12.40 + vegetarianMenu * 8.15;
    let dessert = order * 0.20;
    let total = order + dessert + 2.50;   
    console.log(total);
}
foodDelivery(["2","4","3"]);