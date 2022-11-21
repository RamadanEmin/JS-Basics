function agencyProfit(input = []) {
    const airline = input.shift();
    const adultTickets = Number(input.shift());
    const childrenTickets = Number(input.shift());
    const priceForAdultTickets = Number(input.shift());
    const serviceCharge = Number(input.shift());
    let priceForChildrenTickets = priceForAdultTickets * 0.30;
    let profit = adultTickets * priceForAdultTickets + childrenTickets * priceForChildrenTickets;
    profit += (adultTickets + childrenTickets) * serviceCharge;
    console.log(`The profit of your agency from ${airline} tickets is ${(profit*0.20).toFixed(2)} lv.`);
}
agencyProfit([
    "WizzAir",
    "15",
    "5",
    "120",
    "40"])
