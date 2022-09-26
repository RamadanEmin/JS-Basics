function newHouse(input) {
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let sum = 0;
    switch (flowersType) {
        case "Roses": sum = flowersCount * 5;
            if (flowersCount > 80) {
                sum *= 0.90;
            } break;
        case "Dahlias": sum = flowersCount * 3.80;
            if (flowersCount > 90) {
                sum *= 0.85;
            } break;
        case "Tulips": sum = flowersCount * 2.80;
            if (flowersCount > 80) {
                sum *= 0.85;
            } break;
        case "Narcissus": sum = flowersCount * 3;
            if (flowersCount < 120) {
                sum *= 1.15;
            } break;
        case "Gladiolus": sum = flowersCount * 2.50;
            if (flowersCount < 80) {
                sum *= 1.20;
            } break;
    }
    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
    }
}
newHouse(["Tulips","88","260"]);
