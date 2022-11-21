function fitnessCard(input = []) {
    const amount = Number(input[0]);
    const gender = input[1];
    const age = Number(input[2]);
    const sport = input[3];
    let requiredAmount = 0;
    if (gender === 'm') {
        switch (sport) {
            case 'Gym':
                requiredAmount = 42;
                break;
            case 'Boxing':
                requiredAmount = 41;
                break;
            case 'Yoga':
                requiredAmount = 45;
                break;
            case 'Zumba':
                requiredAmount = 34;
                break;
            case 'Dances':
                requiredAmount = 51;
                break;
            case 'Pilates':
                requiredAmount = 39;
                break;
        }
    } else if (gender === 'f') {
        switch (sport) {
            case 'Gym':
                requiredAmount = 35;
                break;
            case 'Boxing':
                requiredAmount = 37;
                break;
            case 'Yoga':
                requiredAmount = 42;
                break;
            case 'Zumba':
                requiredAmount = 31;
                break;
            case 'Dances':
                requiredAmount = 53;
                break;
            case 'Pilates':
                requiredAmount = 37;
                break;
        }
    }
    if (age <= 19) {
        requiredAmount *= 0.80;
    }
    if (amount >= requiredAmount) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(requiredAmount - amount).toFixed(2)} more.`);
    }
}
fitnessCard([
    "50",
    "m",
    "23",
    "Gym"])
fitnessCard([
    "20",
    "f",
    "15",
    "Yoga"])

