function tennisRanklist(input) {
    let numberOfTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let finalPoints = 0;
    let victory = 0;
    for (let i = 2; i < numberOfTournaments + 2; i++) {
        let tournaments = input[i];
        switch (tournaments) {
            case "W": finalPoints += 2000;
                victory++;
                break;
            case "F":
                finalPoints += 1200;
                break;
            case "SF":
                finalPoints += 720;
                break;
        }
    }
    console.log(`Final points: ${finalPoints + startingPoints}`);
    console.log(`Average points: ${Math.floor(finalPoints / numberOfTournaments)}`);
    console.log(`${(victory / numberOfTournaments * 100).toFixed(2)}% `);
}
tennisRanklist(["4","750","SF","W","SF","W"]);

