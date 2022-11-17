function oscarsCeremony(input) {
    let hallRent = Number(input[0]);
    let statuettes = hallRent * 0.70;
    let kettering = statuettes * 0.85;
    let sounding = kettering * 0.50;
    let expense = statuettes + kettering + sounding + hallRent;
    console.log(expense.toFixed(2));
}
oscarsCeremony(["5555"]);