function basketballTournament(input) {
    let index = 0;
    let command = input[index++];
    let winCounter = 0;
    let loseCounter = 0;
    let game = 0;
    let gameCounter = 0;
    while (command !== "End of tournaments") {
        let name = command;
        let matchNumber = Number(input[index++]);
        
        gameCounter = 0;
        for (let i = 1; i <= matchNumber; i++) {
            let hostPoints = Number(input[index++]);
            let guestPoints = Number(input[index++]);
            gameCounter++;
            if (hostPoints > guestPoints) {
                winCounter++;
                console.log(`Game ${gameCounter} of tournament ${name}: win with ${hostPoints - guestPoints} points.`);
            } else {
                loseCounter++;
                console.log(`Game ${gameCounter} of tournament ${name}: lost with ${guestPoints - hostPoints} points.`);
            }
        }
        game += gameCounter;
        command = input[index++];
    }
    console.log(`${(winCounter / game * 100).toFixed(2)}% matches win`);
    console.log(`${(loseCounter / game * 100).toFixed(2)}% matches lost`);
}
basketballTournament(["Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34", "83", "98", "66", "45", "End of tournaments"]);
