function filmPremiere(input) {
    let projection = input[0];
    let moviePack = input[1];
    let ticketCounter = Number(input[2]);
    let price = 0;
    switch (projection) {
        case "John Wick":
            switch (moviePack) {
                case "Drink": price = ticketCounter * 12;
                    break;
                case "Popcorn": price = ticketCounter * 15;
                    break;
                case "Menu": price = ticketCounter * 19;
                    break;
            }
            break;
        case "Star Wars":
            switch (moviePack) {
                case "Drink": price = ticketCounter * 18;
                    break;
                case "Popcorn": price = ticketCounter * 25;
                    break;
                case "Menu": price = ticketCounter * 30;
                    break;
            }
            break;
        case "Jumanji":
            switch (moviePack) {
                case "Drink": price = ticketCounter * 9;
                    break;
                case "Popcorn": price = ticketCounter * 11;
                    break;
                case "Menu": price = ticketCounter * 14;
                    break;
            }
            break;
    }
    if (projection === "Star Wars" && ticketCounter >= 4) {
        price *= 0.70;
    }
    if (projection === "Jumanji" && ticketCounter === 2) {
        price *= 0.85;
    }
    console.log(`Your bill is ${price.toFixed(2)} leva.`);
}
filmPremiere(["Star Wars","Popcorn","4"]);


