function movieStars(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let command = input[index++];
    let isNeddedMoney = false;
    while (command !== "ACTION") {
        let name = "" + command;
        let reward = 0;
        let otherReward = 0;
        if (name.length <= 15) {
            reward = Number(input[index++]);

        } else {
            otherReward = budget * 0.20;
        }
        budget -= reward;
        budget -= otherReward;
        if (budget <= 0) {
            isNeddedMoney = true;
            console.log(`We need ${(Math.abs(budget)).toFixed(2)} leva for our actors.`);
            break;
        }
        command = input[index++];
    }
    if (!isNeddedMoney) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }
}
movieStars(["90000",
    "Christian Bale",
    "70000.50",
    "Leonard DiCaprio",
    "Kevin Spacey",
    "24000.99",
    "ACTION"])


