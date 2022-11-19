function tennisRanklist(input) {
    let index = 0;
    let numberOfTournaments = Number(input[index++]);
    let startingPoints = Number(input[index++]);
    let point = 0;
    let win = 0;
    for (let i = 0; i < numberOfTournaments; i++) {
        let stageOfTheTournament = input[index++];
        switch (stageOfTheTournament) {
            case "W": point += 2000; win++;
                break;
            case "F": point += 1200;
                break;
            case "SF": point += 720;
                break;
        }
    }
    let averagePoints = point / numberOfTournaments;
    let totalPoints = point + startingPoints;
    let winStats = win / numberOfTournaments * 100;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winStats.toFixed(2)}%`);
}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
