function mountainRun(input = []) {
    const recordInSeconds = Number(input[0]);
    const distanceInMeters = Number(input[1]);
    const timeInSecondsForMeter = Number(input[2]);
    let delay = Math.floor(distanceInMeters / 50) * 30;
    let time = (distanceInMeters * timeInSecondsForMeter) + delay;
    if (time < recordInSeconds) {
        console.log(`Yes! The new record is ${time.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(time - recordInSeconds).toFixed(2)} seconds slower.`);
    }
}
mountainRun(["10164", "1400", "25"]);
mountainRun(["5554.36", "1340", "3.23"]);

