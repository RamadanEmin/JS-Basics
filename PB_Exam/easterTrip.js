function easterTrip(input = []) {
    const destination = input[0];
    const dates = input[1];
    const numberOfNights = Number(input[2]);
    let price = 0;
    switch (destination) {
        case 'France':
            switch (dates) {
                case '21-23':
                    price = numberOfNights * 30;
                    break;
                case '24-27':
                    price = numberOfNights * 35;
                    break;
                case '28-31':
                    price = numberOfNights * 40;
                    break;
            }
            break;
        case 'Italy':
            switch (dates) {
                case '21-23':
                    price = numberOfNights * 28;
                    break;
                case '24-27':
                    price = numberOfNights * 32;
                    break;
                case '28-31':
                    price = numberOfNights * 39;
                    break;
            }
            break;
        case 'Germany':
            switch (dates) {
                case '21-23':
                    price = numberOfNights * 32;
                    break;
                case '24-27':
                    price = numberOfNights * 37;
                    break;
                case '28-31':
                    price = numberOfNights * 43;
                    break;
            }
            break;
    }
    console.log(`Easter trip to ${destination} : ${price.toFixed(2)} leva.`);
}
easterTrip(["Germany", "24-27", "5"]);
easterTrip(["Italy", "21-23", "7"]);
easterTrip(["France", "28-31", "8"]);
