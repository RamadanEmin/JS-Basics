function movieDay(input) {
    let photoTime = Number(input[0]);
    let numberOfScenes = Number(input[1]);
    let durationOfAScene = Number(input[2]);
    let fieldPreparation = photoTime * 0.15;
    let timeToShoot = numberOfScenes * durationOfAScene;
    let neededTime = fieldPreparation + timeToShoot;
    if (neededTime <= photoTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(photoTime - neededTime)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${neededTime - photoTime} minutes.`);
    }
}
movieDay(["60","15","3"]);

