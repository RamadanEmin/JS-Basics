function worldSnookerChampionship(input = []) {
    const stageOfChampionship = input[0];
    const ticketType = input[1];
    const numberOfTickets = Number(input[2]);
    const includePhoto = input[3];
    let price = 0;
    let discount = false;
    switch (stageOfChampionship) {
        case 'Quarter final':
            switch (ticketType) {
                case 'Standard':
                    price = 55.50 * numberOfTickets;
                    break;
                case 'Premium':
                    price = 105.20 * numberOfTickets;
                    break;
                case 'VIP':
                    price = 118.90 * numberOfTickets;
                    break;
            }
            break;
        case 'Semi final':
            switch (ticketType) {
                case 'Standard':
                    price = 75.88 * numberOfTickets;
                    break;
                case 'Premium':
                    price = 125.22 * numberOfTickets;
                    break;
                case 'VIP':
                    price = 300.40 * numberOfTickets;
                    break;
            }
            break;
        case 'Final':
            switch (ticketType) {
                case 'Standard':
                    price = 110.10 * numberOfTickets;
                    break;
                case 'Premium':
                    price = 160.66 * numberOfTickets;
                    break;
                case 'VIP':
                    price = 400.00 * numberOfTickets;
                    break;
            }
            break;
    }
    if (price > 4000) {
        discount = true;
        price = price * 0.75;
    } else if (price > 2500) {
        price *= 0.90;
    }
    if (includePhoto === 'Y') {
        if (!discount) {
            price += 40 * numberOfTickets;
        }
    }
    console.log(`${price.toFixed(2)}`);
}
worldSnookerChampionship(["Final", "Premium", "25", "Y"]);
worldSnookerChampionship(["Semi final", "VIP", "9", "Y"]);
