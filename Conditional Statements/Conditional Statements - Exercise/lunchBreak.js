function lunchBreak(input) {
    let seriesName = input[0];
    let episodeLength = Number(input[1]);
    let durationOfTheBreak = Number(input[2]);
    let timeForLunch = durationOfTheBreak / 8;
    let timeForBreak = durationOfTheBreak / 4;
    let necessaryTime = durationOfTheBreak - timeForBreak - timeForLunch;
    if (necessaryTime >= episodeLength) {
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(necessaryTime - episodeLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeLength - necessaryTime)} more minutes.`);
    }
}
lunchBreak(["Game of Thrones", "60", "96"]);
