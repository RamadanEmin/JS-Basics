function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extraCount = Number(input[1]);
    let costOfClothing = Number(input[2]);
    let decor = budget * 0.10;
    let clothing = extraCount * costOfClothing;
    if (extraCount > 150) {
        clothing *= 0.90;
    }
    totalCost = decor + clothing;
    if (totalCost > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalCost - budget).toFixed(2)} leva more.`);
    } else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalCost).toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["20000", 
"120",
"55.5"])
