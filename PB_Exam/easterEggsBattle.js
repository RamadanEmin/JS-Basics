function easterEggsBattle(input = []) {
    let index = 0;
    let firstPlayerEggs = Number(input[index++]);
    let secondPlayerEggs = Number(input[index++]);
    let isEnd = true;
    while (input[index] !== 'End') {
        let command = input[index++];
        if (command === 'one') {
            secondPlayerEggs--;
        } else if (command === 'two') {
            firstPlayerEggs--;
        }
        if (firstPlayerEggs === 0) {
            console.log(`Player one is out of eggs. Player two has ${secondPlayerEggs} eggs left.`);
            isEnd = false;
            break;
        } else if (secondPlayerEggs === 0) {
            console.log(`Player two is out of eggs. Player one has ${firstPlayerEggs} eggs left.`);
            isEnd = false;
            break;
        }
    }
    if (isEnd) {
        console.log(`Player one has ${firstPlayerEggs} eggs left.`);
        console.log(`Player two has ${secondPlayerEggs} eggs left.`);
    }
}
easterEggsBattle([
    5,
    4,
    'one',
    'two',
    'one',
    'two',
    'two',
    'End',])
easterEggsBattle