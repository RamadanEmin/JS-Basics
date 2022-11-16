function movieProfit(input) {
    let movie = input[0];
    let numberOfDays = Number(input[1]);
    let numberOfTickets = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percent = Number(input[4]);
    let income = numberOfTickets * ticketPrice * numberOfDays;
    let studioRevenue = (income * percent) / 100;
    console.log(`The profit from the movie ${movie} is ${(income - studioRevenue).toFixed(2)} lv.`);
}
movieProfit(["The Programmer", "20", "500", "7.50", "7"]);
