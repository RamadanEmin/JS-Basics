function paintingEggs(input = []) {
    const eggSize = input[0];
    const eggColor = input[1];
    const numberOfBatches = Number(input[2]);
    let income = 0;
    switch (eggSize) {
        case 'Large':
            switch (eggColor) {
                case 'Red':
                    income = numberOfBatches * 16;
                    break;
                case 'Green':
                    income = numberOfBatches * 12;
                    break;
                case 'Yellow':
                    income = numberOfBatches * 9;
                    break;
            }
            break;
        case 'Medium':
            switch (eggColor) {
                case 'Red':
                    income = numberOfBatches * 13;
                    break;
                case 'Green':
                    income = numberOfBatches * 9;
                    break;
                case 'Yellow':
                    income = numberOfBatches * 7;
                    break;
            }
            break;
        case 'Small':
            switch (eggColor) {
                case 'Red':
                    income = numberOfBatches * 9;
                    break;
                case 'Green':
                    income = numberOfBatches * 8;
                    break;
                case 'Yellow':
                    income = numberOfBatches * 5;
                    break;
            }
            break;
    }
    income *= 0.65;
    console.log(`${income.toFixed(2)} leva.`);
}
paintingEggs(["Large", "Red", "7"]);
paintingEggs(["Medium", "Green", "5"]);
paintingEggs(["Small", "Yellow", "3"]);
