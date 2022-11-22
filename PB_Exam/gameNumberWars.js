function gameNumberWars(input = []) {
    let index = 0;
    const firstPlayerName = input[index++];
    const secondPlayerName = input[index++];
    let firstdPlayerPoints = 0;
    let secondPlayerPoints = 0;
    let isWinner = false;
    while (input[index] !== 'End of game') {
        let firstPlayerCard = Number(input[index++]);
        let secondPlayerCard = Number(input[index++]);
        if (firstPlayerCard > secondPlayerCard) {
            firstdPlayerPoints += firstPlayerCard - secondPlayerCard;
        } else if (firstPlayerCard < secondPlayerCard) {
            secondPlayerPoints += secondPlayerCard - firstPlayerCard;
        } else if (firstPlayerCard === secondPlayerCard) {
            console.log('Number wars!');
            firstPlayerCard = Number(input[index++]);
            secondPlayerCard = Number(input[index++]);
            isWinner = true;
            if (firstPlayerCard > secondPlayerCard) {
                console.log(`${firstPlayerName} is winner with ${firstdPlayerPoints} points`);
            } else if (firstPlayerCard < secondPlayerCard) {
                console.log(`${secondPlayerName} is winner with ${secondPlayerPoints} points`);
            }
            break;
        }
    }
    if (!isWinner) {
        console.log(`${firstPlayerName} has ${firstdPlayerPoints} points`);
        console.log(`${secondPlayerName} has ${secondPlayerPoints} points`);
    }
}
gameNumberWars([
    "Desi",
    "Niki",
    "7",
    "5",
    "3",
    "4",
    "3",
    "3",
    "5",
    "3"]);
gameNumberWars([
    "Elena",
    "Simeon",
    "6",
    "3",
    "2",
    "5",
    "8",
    "9",
    "End of game"]);
