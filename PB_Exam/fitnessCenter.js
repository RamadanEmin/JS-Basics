function fitnessCenter(input) {
    let index = 0;
    let gymVisitors = Number(input[index++]);
    let activityInTheGym = input[index++];
    let backCounter = 0;
    let chestCounter = 0;
    let legsCounter = 0;
    let absCounter = 0;
    let shakeCounter = 0;
    let barCounter = 0;
    for (let i = 0; i < gymVisitors; i++) {
        switch (activityInTheGym) {
            case "Back": backCounter++;
                break;
            case "Chest": chestCounter++;
                break;
            case "Legs": legsCounter++;
                break;
            case "Abs": absCounter++;
                break;
            case "Protein shake": shakeCounter++;
                break;
            case "Protein bar": barCounter++;
                break;
        }
        activityInTheGym = input[index++];
    }
    let train = backCounter + chestCounter + legsCounter + absCounter;
    let purchase = shakeCounter + barCounter;
    console.log(`${backCounter} - back`);
    console.log(`${chestCounter} - chest`);
    console.log(`${legsCounter} - legs`);
    console.log(`${absCounter} - abs`);
    console.log(`${shakeCounter} - protein shake`);
    console.log(`${barCounter} - protein bar`);
    console.log(`${(train / gymVisitors * 100).toFixed(2)}% - work out`);
    console.log(`${(purchase / gymVisitors * 100).toFixed(2)}% - protein`);
}
fitnessCenter(["10",
    "Back",
    "Chest",
    "Legs",
    "Abs",
    "Protein shake",
    "Protein bar",
    "Protein shake",
    "Protein bar",
    "Legs",
    "Abs"])
