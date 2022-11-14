function easterDecoration(input) {
    let index = 0;
    let customers = Number(input[index++]);
    let command = input[index++];
    let sum = 0;
    for (let i = 0; i < customers; i++) {
        let purchasesCounter = 0;
        let purchasesPrice = 0;
        while (command !== "Finish") {
            let product = command;
            purchasesCounter++;
            switch (product) {
                case "basket": purchasesPrice += 1.50;
                    break;
                case "wreath": purchasesPrice += 3.80;
                    break;
                case "chocolate bunny": purchasesPrice += 7;
                    break;
            }
            command = input[index++];
        }
        if (purchasesCounter % 2 === 0) {
            purchasesPrice *= 0.80;
        }
        console.log(`You purchased ${purchasesCounter} items for ${purchasesPrice.toFixed(2)} leva.`);
        sum += purchasesPrice;
        command = input[index++];
    }
    console.log(`Average bill per client is: ${(sum / customers).toFixed(2)} leva.`);
}
easterDecoration(["2", "basket", "wreath", "chocolate bunny", "Finish", "wreath", "chocolate bunny", "Finish"])
