function energyBooster(input = []) {
    const fruit = input[0];
    const sizeOfSet = input[1];
    const orderedSets = Number(input[2]);
    let price = 0;
    let product = 0
    if (sizeOfSet === 'small') {
        product = 2;
        switch (fruit) {
            case 'Watermelon':
                price = product * 56 * orderedSets;
                break;
            case 'Mango':
                price = product * 36.66 * orderedSets;
                break;
            case 'Pineapple':
                price = product * 42.10 * orderedSets;
                break;
            case 'Raspberry':
                price = product * 20 * orderedSets;
                break;
        }
    } else if (sizeOfSet === 'big') {
        product = 5;
        switch (fruit) {
            case 'Watermelon':
                price = product * 28.70 * orderedSets;
                break;
            case 'Mango':
                price = product * 19.60 * orderedSets;
                break;
            case 'Pineapple':
                price = product * 24.80 * orderedSets;
                break;
            case 'Raspberry':
                price = product * 15.20 * orderedSets;
                break;
        }
    }
    if (price > 1000) {
        price *= 0.50;
    } else if (400 <= price && price <= 1000) {
        price *= 0.85;
    }
    console.log(`${price.toFixed(2)} lv.`);
}
energyBooster(["Watermelon", "big", "4"]);
energyBooster(["Mango", "big", "8"]);
