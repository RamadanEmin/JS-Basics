function sumOfTwoNumbers(input) {
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let sum = Number(input[2]);
    let counter = 0;
    flag = false;
    for (let x1 = startNumber; x1 <= endNumber; x1++) {
        for (let x2 = startNumber; x2 <= endNumber; x2++) {
            counter++;
            if (x1 + x2 === sum) {
                flag = true;
                console.log(`Combination N:${counter} (${x1} + ${x2} = ${sum})`);
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    if (!flag) {
        console.log(`${counter} combinations - neither equals ${sum}`);
    }
}
sumOfTwoNumbers(["88", "888", "2000"]);


