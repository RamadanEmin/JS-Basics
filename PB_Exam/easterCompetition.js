function easterCompetition(input) {
    let index = 0;
    let easterBread = Number(input[index++]);
    let maxPoints = Number.MIN_SAFE_INTEGER;
    let bakerName = "";
    for (let i = 1; i <= easterBread; i++) {
        let name = input[index++];
        let points = 0;
        let command = input[index++];
        while (command !== "Stop") {
            let point = Number(command);  
            points += point;
            command = input[index++];
        }
        console.log(`${name} has ${points} points.`);
        if (points > maxPoints) {
            bakerName = name;
            maxPoints = points;
            console.log(`${name} is the new number 1!`);
        }
    }
    console.log(`${bakerName} won competition with ${maxPoints} points!`);
}
easterCompetition(["2","Chef Angelov","9","9","9","Stop","Chef Rowe","10","10","10","10","Stop"])

