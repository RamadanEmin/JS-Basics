function darts(input = []) {
    let index = 0;
    const playerName = input[index++];
    let field = '';
    let points = 0;
    let startPoints = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;
    let isWin = false;
    while (input[index] !== 'Retire') {
        field = input[index++];
        points = Number(input[index++]);
        switch (field) {
            case 'Single':
                if (startPoints - points >= 0) {
                    startPoints -= points;
                    successfulShots++;
                } else {
                    unsuccessfulShots++;
                }
                break;
            case 'Double':
                if (startPoints - (points * 2) >= 0) {
                    startPoints -= (points * 2);
                    successfulShots++;
                } else {
                    unsuccessfulShots++;
                }
                break;
            case 'Triple':
                if (startPoints - (points * 3) >= 0) {
                    startPoints -= (points * 3);
                    successfulShots++;
                } else {
                    unsuccessfulShots++;
                }
                break;
        }
        if (startPoints === 0) {
            isWin = true;
            break;
        }
    }
    if (isWin) {
        console.log(`${playerName} won the leg with ${successfulShots} shots.`);
    } else {
        console.log(`${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`);
    }
}
darts([
    "Michael van Gerwen",
    "Triple",
    "20",
    "Triple",
    "19",
    "Double",
    "10",
    "Single",
    "3",
    "Single",
    "1",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20"])
darts([
    "Stephen Bunting",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "7",
    "Single",
    "12",
    "Double",
    "1",
    "Single",
    "1"])
