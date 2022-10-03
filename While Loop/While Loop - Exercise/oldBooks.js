function oldBooks(input) {
    let index = 0;
    let favouriteBook = input[index];
    index++;
    let book = input[index];
    index++;
    let counter = 0;
    let bookIsFound = false;
    while (book !== "No More Books") {
        if (favouriteBook === book) {
            bookIsFound = true;
            console.log(`You checked ${counter} books and found it.`);
            break;
        }
        book = input[index];
        index++;
        counter++;
    }
    if(bookIsFound === false){
    console.log(`The book you search is not here!`);
    console.log(`You checked ${counter} books.`);
    }
}
oldBooks(["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"]);


