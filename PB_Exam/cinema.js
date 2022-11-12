function cinema(input) {
    let index = 0;
    let hallCapacity = Number(input[index++]);
    let command = input[index++];
    let income = 0;
    let capacity = 0;
    let freeSeats = true;
    while (command !== "Movie time!") {
        let num = Number(command);
        capacity += num;
        if (capacity > hallCapacity) {
            freeSeats = false;
            console.log("The cinema is full.");
            break;
        }
        let price = 0;
        if (num % 3 === 0) {
            price = num * 5 - 5;
        } else {
            price = num * 5;
        }
        income += price;
        command = input[index++];
    }
    if (freeSeats) {
        console.log(`There are ${hallCapacity - capacity} seats left in the cinema.`);
    }
console.log(`Cinema income - ${income} lv.`);
}
cinema(["100","10","10","10","10","10","10","10","10","10","10","Movie time!"]);

