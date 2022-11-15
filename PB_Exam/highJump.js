function highJump(input) {
    let index = 0;
    let desiredHeight = Number(input[index++]);
    flag = true;
    let counter = 0;
    let bestJump = 0;
    for (let i = desiredHeight - 30; i <= desiredHeight; i = i + 5) {
        for (let j = 1; j <= 4; j++) {
            counter++;
            let jump = Number(input[index++]);
            if (jump > i) {
                break;
            }
            if (j > 3) {
                counter--;
                flag = false;
                console.log(`Tihomir failed at ${i}cm after ${counter} jumps.`);
            }
        }
        if (!flag) {
            break;
        }
        bestJump = i;
    }
    if (flag) {
        console.log(`Tihomir succeeded, he jumped over ${bestJump}cm after ${counter} jumps.`);
    }
}
highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
