function footballResults(input) {
    let firstMatch = input[0];
    let secondMatch = input[1];
    let thirdMatch = input[2];
    let winCount = 0;
    let loseCount = 0;
    let equallyCount = 0;
    let teamA = Number(firstMatch[0]);
    let teamB = Number(firstMatch[2]);
    if (teamA > teamB) {
        winCount++;
    } else if (teamA < teamB) {
        loseCount++;
    } else {
        equallyCount++;
    }
    teamA = Number(secondMatch[0]);
    teamB = Number(secondMatch[2]);
    if (teamA > teamB) {
        winCount++;
    } else if (teamA < teamB) {
        loseCount++;
    } else {
        equallyCount++;
    }
    teamA = Number(thirdMatch[0]);
    teamB = Number(thirdMatch[2]);
    if (teamA > teamB) {
        winCount++;
    } else if (teamA < teamB) {
        loseCount++;
    } else {
        equallyCount++;
    }
console.log(`Team won ${winCount} games.`);
console.log(`Team lost ${loseCount} games.`);
console.log(`Drawn games: ${equallyCount}`);
}
footballResults(["3:1", "0:2", "0:0"]);
