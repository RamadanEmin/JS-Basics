function sumSeconds(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);
    let totalTime = timeFirst + timeSecond + timeThird;
    let minute = Math.floor(totalTime / 60);
    let second = totalTime % 60;
    if (second < 10) {
        console.log(`${minute}:0${second}`);
    } else {
        console.log(`${minute}:${second}`);
    }

}
sumSeconds(["22", "7", "34"]);