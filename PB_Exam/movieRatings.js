function movieRatings(input) {
    let index = 0;
    let numberOfMovies = Number(input[index++]);
    let sumRating = 0;
    let maxRating = Number.MIN_SAFE_INTEGER;
    let maxRatingName = "";
    let minRating = Number.MAX_SAFE_INTEGER;
    let minRatingName = "";
    for (let i = 0; i < numberOfMovies; i++) {
        let name = input[index++];
        let rating = Number(input[index++]);
        if (rating > maxRating) {
            maxRating = rating;
            maxRatingName = name;
        }
        if (minRating > rating) {
            minRating = rating;
            minRatingName = name;
        }
        sumRating += rating;
    }
    let average = sumRating / numberOfMovies;
    console.log(`${maxRatingName} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatingName} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${average.toFixed(1)}`);
}
movieRatings(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);
