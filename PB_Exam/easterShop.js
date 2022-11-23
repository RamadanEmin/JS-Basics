function easterShop(input = []) {
    let index = 0;
    let eggsInStore = Number(input[index++]);
    let soldEggs = 0;
    let isClose = true;
    while (input[index] !== 'Close') {
        let command = input[index++];
        let eggs = Number(input[index++]);
        if (command === 'Buy') {
            if (eggs > eggsInStore) {
                console.log('Not enough eggs in store!');
                console.log(`You can buy only ${eggsInStore}.`);
                isClose = false;
                break;
            } else {
                eggsInStore -= eggs;
                soldEggs += eggs;
            }
        } else if (command === 'Fill') {
            eggsInStore += eggs;
        }
    }
    if (isClose) {
        console.log('Store is closed!');
        console.log(`${soldEggs} eggs sold.`);
    }
}
easterShop([
    "13",
    "Buy",
    "8",
    "Fill",
    "3",
    "Buy",
    "10"]);
easterShop([
    "20",
    "Fill",
    "30",
    "Buy",
    "15",
    "Buy",
    "20",
    "Close"]);
