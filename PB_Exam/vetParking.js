function vetParking(input) {
    let numberOfDays = Number(input[0]);
    let numberOfHours = Number(input[1]);
    let totalTax = 0;
    let sum = 0;
    for (let i = 1; i <= numberOfDays; i++) {
        for (let j = 1; j <= numberOfHours; j++) {
            let tax = 1;
            if (i % 2 === 0 && j % 2 !== 0) {
                tax *= 2.50;
            } else if (i % 2 !== 0 && j % 2 === 0) {
                tax *= 1.25;
            } else {
                tax *= 1.00;
            }
            totalTax += tax;
        }
        sum += totalTax;    
        console.log(`Day: ${i} - ${totalTax.toFixed(2)} leva`);
        totalTax = 0;
    }
    console.log(`Total: ${sum.toFixed(2)} leva`);
}
vetParking(["2", "5"])
