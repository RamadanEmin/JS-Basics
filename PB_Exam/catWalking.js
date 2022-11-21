function catWalking(input = []) {
    const minutesOfWalking = Number(input[0]);
    const numberOfWalks = Number(input[1]);
    const calories = Number(input[2]);
    const timeForWalk = minutesOfWalking * numberOfWalks;
    const burnedCalories = timeForWalk * 5;
    if (burnedCalories >= calories * 0.50) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);
    }
}
catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);
