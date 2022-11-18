function oscarsWeekInCinema(input) {
    let movieName = input[0];
    let typeOfHall = input[1];
    let ticketCounter = Number(input[2]);
    let income = 0;
    switch (movieName) {
        case "A Star Is Born":
            switch (typeOfHall) {
                case "normal": income = ticketCounter * 7.50;
                    break;
                case "luxury": income = ticketCounter * 10.50;
                    break;
                case "ultra luxury": income = ticketCounter * 13.50;
                    break;
            }
            break;
        case "Bohemian Rhapsody":
            switch (typeOfHall) {
                case "normal": income = ticketCounter * 7.35;
                    break;
                case "luxury": income = ticketCounter * 9.45;
                    break;
                case "ultra luxury": income = ticketCounter * 12.75;
                    break;
            }
            break;
        case "Green Book":
            switch (typeOfHall) {
                case "normal": income = ticketCounter * 8.15;
                    break;
                case "luxury": income = ticketCounter * 10.25;
                    break;
                case "ultra luxury": income = ticketCounter * 13.25;
                    break;
            }    
        break;
        case "The Favourite": 
        switch (typeOfHall) {
            case "normal": income = ticketCounter * 8.75;
                break;
            case "luxury": income = ticketCounter * 11.55;
                break;
            case "ultra luxury": income = ticketCounter * 13.95;
                break;
        }
        break;
    }
console.log(`${movieName} -> ${income.toFixed(2)} lv.`);
}
oscarsWeekInCinema(["Green Book","normal","63"]);

