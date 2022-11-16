function mobileOperator(input) {
    let term = input[0];
    let type = input[1];
    let hasInternet = input[2];
    let countMonth = Number(input[3]);
    let money = 0;
    switch (term) {
        case "one":
            switch (type) {
                case "Small": money = countMonth * 9.98;
                    break;
                case "Middle": money = countMonth * 18.99;
                    break;
                case "Large": money = countMonth * 25.98;
                    break;
                case "ExtraLarge": money = countMonth * 35.99;
                    break;
            }
            break;
        case "two":
            switch (type) {
                case "Small": money = countMonth * 8.58;
                    break;
                case "Middle": money = countMonth * 17.09;
                    break;
                case "Large": money = countMonth * 23.59;
                    break;
                case "ExtraLarge": money = countMonth * 31.79;
                    break;
            }
            break;
    }
    if (hasInternet === "yes") {
        if (type === "Small") {
            money += countMonth * 5.50;
        } else if (type === "Middle" || type === "Large") {
            money += countMonth * 4.35;
        } else if (type === "ExtraLarge") {
            money += countMonth * 3.85;
        }
    }
    if (term === "two") {
        money *= 0.9625;
    }
    console.log(`${money.toFixed(2)} lv.`);
}
mobileOperator(["two", "ExtraLarge", "yes", "20"]);


