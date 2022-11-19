function seriesCalculator(input) {
    let series = input[0];
    let numberOfSeasons = Number(input[1]);
    let numberOfEpisodes = Number(input[2]);
    let timeOfEpisodes = Number(input[3]);
    let episodesWithAd = timeOfEpisodes * 1.20;
    let timeOfSeasons = numberOfSeasons * 10;
    let time = numberOfSeasons * numberOfEpisodes * episodesWithAd + timeOfSeasons;
    console.log(`Total time needed to watch the ${series} series is ${Math.floor(time)} minutes.`);
}
seriesCalculator(["Lucifer", "3", "18", "55"]);
