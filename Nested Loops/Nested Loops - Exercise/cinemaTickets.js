function cinemaTickets(input) {
    let index = 0;
    let command = input[index++];
    let tickets = 0;
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;
    while (command !== "Finish") {
        let movieTitle = command;
        let freeSeats = Number(input[index++]);
        let sales = 0;
        let studentSales = 0;
        let standardSales = 0;
        let kidSales = 0;
        for (let i = 1; i <= freeSeats; i++) {
            let ticket = input[index++];
            if (ticket === "End") {
                break;
            }
            switch (ticket) {
                case "student":
                    studentSales++;
                    studentTicket++;
                    tickets++;
                    break;
                case "standard":
                    standardSales++;
                    standardTicket++;
                    tickets++;
                    break;
                case "kid":
                    kidSales++;
                    kidTicket++;
                    tickets++;
                    break;
                default:
                    break;
            }
            sales = studentSales + standardSales + kidSales;
        }
        console.log(`${movieTitle} - ${((sales / freeSeats) * 100).toFixed(2)}% full.`);
        command = input[index++];
    }
    console.log(`Total tickets: ${tickets}`);
    console.log(`${((studentTicket / tickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTicket / tickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTicket / tickets) * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);
