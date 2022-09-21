function vacationBooksList(input) {
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let neededDays = Number(input[2]);
    let hours = (bookPages / pagesPerHour) / neededDays;
    console.log(hours);
}
vacationBooksList(["432","15","4"]);