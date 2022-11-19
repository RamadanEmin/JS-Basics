function travelAgency(input) {
    let town = input[0];
    let packageType = input[1];
    let discount = input[2];
    let daysToStay = Number(input[3]);
    let price = 0;
    let isPositive = false;
    if (daysToStay > 7) {
        daysToStay -= 1;
    } else if (daysToStay < 1) {
        isPositive = true;
        console.log(`Days must be positive number!`);
    }
    switch (town) {
        case "Bansko":
        case "Borovets":
            switch (packageType) {
                case "withEquipment":
                    if (discount === "yes") {
                        price = daysToStay * 100 * 0.90;
                    } else {
                        price = daysToStay * 100;
                    }
                    break;
                case "noEquipment":
                    if (discount === "yes") {
                        price = daysToStay * 80 * 0.95;
                    } else {
                        price = daysToStay * 80;
                    }
                    break;
                default: console.log("Invalid input!");
                    isPositive = true;
                    break;
            }
            break;
        case "Varna":
        case "Burgas":
            switch (packageType) {
                case "withBreakfast":
                    if (discount === "yes") {
                        price = daysToStay * 130 * 0.88;
                    } else {
                        price = daysToStay * 130;
                    }
                    break;
                case "noBreakfast":
                    if (discount === "yes") {
                        price = daysToStay * 100 * 0.93;
                    } else {
                        price = daysToStay * 100;
                    }
                    break;
                default: console.log("Invalid input!");
                    isPositive = true;
                    break;
            }
            break;
        default: console.log("Invalid input!");
        isPositive = true;
            break;
    }
    if (!isPositive) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
}
travelAgency(["Bansko",
    "withEquipment",
    "no",
    "8"])



