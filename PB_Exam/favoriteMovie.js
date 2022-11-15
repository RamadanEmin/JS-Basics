function favoriteMovie(input) {
    let index = 0;
    let command = input[index++];
    let bestMovie = "";
    let bestPoint = Number.MIN_SAFE_INTEGER;
    let counter = 0;
    while (command !== "STOP") {
        counter++;
        if (counter === 7) {
            console.log("The limit is reached.");
            break;
        }
        let movieTitle = "" + command;
        let points = 0;
        for (let i = 0; i < movieTitle.length; i++) {
            points += movieTitle.charCodeAt(i);
            if (movieTitle.charCodeAt(i) >= 97 && movieTitle.charCodeAt(i) <= 122) {
                points -= 2 * movieTitle.length;
            } else if (movieTitle.charCodeAt(i) >= 65 && movieTitle.charCodeAt(i) <= 90) {
                points -= movieTitle.length;
            } else {
                continue;
            }
        }
        if (points > bestPoint) {
            bestMovie = movieTitle;
            bestPoint = points;
        }
        command = input[index++];
    }
    console.log(`The best movie for you is ${bestMovie} with ${bestPoint} ASCII sum.`);
}
favoriteMovie(["Wrong turn","The maze","Area 51","Night Club","Ice age","Harry Potter","Wizards"]);



