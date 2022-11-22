function skeleton(input = []) {
    const controlMinutes = Number(input[0]);
    const controlSeconds = Number(input[1]);
    const chuteLength = Number(input[2]);
    const timeForHundredMeter = Number(input[3]);

    let controlTime = controlMinutes * 60 + controlSeconds;
    let reducedTime = (chuteLength / 120) * 2.5;
    let competitorTime = (chuteLength / 100) * timeForHundredMeter - reducedTime;
    if (competitorTime <= controlTime) {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${competitorTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(competitorTime - controlTime).toFixed(3)} second slower.`);
    }
}
skeleton(["2", "12", "1200", "10"]);
skeleton(["1", "20", "1546", "12"]);
