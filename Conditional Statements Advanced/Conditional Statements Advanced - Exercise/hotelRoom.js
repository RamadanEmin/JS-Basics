function hotelRoom(input) {
    let month = input[0];
    let numberOfNight = Number(input[1]);
    switch (month) {
        case "May":
        case "October":
            if (numberOfNight > 7 && numberOfNight <= 14) {
                console.log(`Apartment: ${(numberOfNight * 65).toFixed(2)} lv.`);
                console.log(`Studio: ${(numberOfNight * 50 * 0.95).toFixed(2)} lv.`);
            } else if (numberOfNight > 14) {
                console.log(`Apartment: ${(numberOfNight * 65 * 0.90).toFixed(2)} lv.`);
                console.log(`Studio: ${(numberOfNight * 50 * 0.70).toFixed(2)} lv.`);
            } else {
                console.log(`Apartment: ${(numberOfNight * 65).toFixed(2)} lv.`);
                console.log(`Studio: ${(numberOfNight * 50).toFixed(2)} lv.`);
            } break;
        case "June":
        case "September":
            if (numberOfNight > 14) {
                console.log(`Apartment: ${(numberOfNight * 68.70 * 0.90).toFixed(2)} lv.`);
                console.log(`Studio: ${(numberOfNight * 75.20 * 0.80).toFixed(2)} lv.`);
            } else {
                console.log(`Apartment: ${(numberOfNight * 68.70).toFixed(2)} lv.`);
                console.log(`Studio: ${(numberOfNight * 75.20).toFixed(2)} lv.`);
            } break;
        case "July":
        case "August":
            if (numberOfNight > 14) {
                console.log(`Apartment: ${(numberOfNight * 77 * 0.90).toFixed(2)} lv.`);
                console.log(`Studio: ${(numberOfNight * 76).toFixed(2)} lv.`);
            } else {
                console.log(`Apartment: ${(numberOfNight * 77).toFixed(2)} lv.`);
                console.log(`Studio: ${(numberOfNight * 76).toFixed(2)} lv.`);
            } break;
    }
}
hotelRoom(["June","14"])

