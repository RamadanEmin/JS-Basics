function footballTournament(input) {
    let index = 0;
    let footballTeam = input[index++];
    let matchesPlayed = Number(input[index++]);
    let isPlayed = true;
    let point = 0;
    let winCounter = 0;
    let drawCounter = 0;
    let loseCounter = 0;
    if (matchesPlayed === 0) {
        isPlayed = false;
        console.log(`${footballTeam} hasn't played any games during this season.`);
    }
    for (let i = 1; i <= matchesPlayed; i++) {
        let result = input[index++];
        switch (result) {
            case "W": point += 3; winCounter++;
                break;
            case "D": point += 1; drawCounter++;
                break;
            case "L": loseCounter++; break;
        }
    }
    if (isPlayed) {
        console.log(`${footballTeam} has won ${point} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${winCounter}`);
        console.log(`## D: ${drawCounter}`);
        console.log(`## L: ${loseCounter}`);
        console.log(`Win rate: ${((winCounter / matchesPlayed) * 100).toFixed(2)}%`);
    }
}
footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
