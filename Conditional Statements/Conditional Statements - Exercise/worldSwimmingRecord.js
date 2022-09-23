function worldSwimmingRecord(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let swimmingTime = Number(input[2]);
    let swimming = distanceInMeters * swimmingTime;
    let delay = distanceInMeters / 15;
    delay = Math.trunc(delay);
    delay *= 12.5;
    let necessaryTime = swimming + delay;
    if (necessaryTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(necessaryTime).toFixed(2)} seconds.`);
    } else{
        console.log(`No, he failed! He was ${(necessaryTime - recordInSeconds).toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(["10464", "1500", "20"]);
