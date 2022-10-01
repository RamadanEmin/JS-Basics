function sumNumbers(input) {
    let i = 0;
    let num = Number(input[i]);
    i++;
    let sum = 0;
    while (num > sum) {
        let number = Number(input[i]);
        i++;
        sum += number;
    }
    console.log(sum);
}
sumNumbers(["100", "10", "20", "30", "40"]);
